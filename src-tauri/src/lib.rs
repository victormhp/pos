use std::sync::{Arc, Mutex};
use tauri_plugin_shell::ShellExt;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let child_process = Arc::new(Mutex::new(None));
    let child_process_clone = child_process.clone();

    let builder = tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init());

    let app = builder.setup(move |app| {
        let pocketbase_cmd =
            app.shell()
                .sidecar("pocketbase")
                .unwrap()
                .args(["serve", "--dir", "./db/pb_data"]);

        let (_, child) = pocketbase_cmd.spawn().expect("Failed to spawn pocketbase");
        *child_process.lock().unwrap() = Some(child);
        Ok(())
    });

    app.on_window_event(move |_window, event| {
        if let tauri::WindowEvent::Destroyed = event {
            if let Some(child) = child_process_clone.lock().unwrap().take() {
                let _ = child.kill();
            }
        }
    })
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
