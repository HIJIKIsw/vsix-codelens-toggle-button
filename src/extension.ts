import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    const commandId = 'codelens-toggle.toggle';

    context.subscriptions.push(
        vscode.commands.registerCommand(commandId, () => {
            toggleCodeLens();
        })
    );

    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBarItem.command = commandId;
    context.subscriptions.push(myStatusBarItem);

    updateStatusBarItem();

    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration('editor.codeLens')) {
                updateStatusBarItem();
            }
        })
    );

    myStatusBarItem.show();
}

function toggleCodeLens() {
    const config = vscode.workspace.getConfiguration('editor');
    const currentValue = config.get<boolean>('codeLens');
    // Toggle the value in the Global configuration
    config.update('codeLens', !currentValue, vscode.ConfigurationTarget.Global);
}

function updateStatusBarItem() {
    const config = vscode.workspace.getConfiguration('editor');
    const enabled = config.get<boolean>('codeLens');

    if (enabled) {
        myStatusBarItem.text = '$(eye) CodeLens: On';
        myStatusBarItem.tooltip = 'Click to disable CodeLens';
        myStatusBarItem.backgroundColor = undefined;
    } else {
        myStatusBarItem.text = '$(eye-closed) CodeLens: Off';
        myStatusBarItem.tooltip = 'Click to enable CodeLens';
        // Optional: Add a warning color or similar if desired, but standard is fine
    }
}

export function deactivate() {}
