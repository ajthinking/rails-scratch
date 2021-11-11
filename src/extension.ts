// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rails-scratch" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('rails-scratch.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from rails-scratch!');
	});

	let command = vscode.commands.registerCommand('rails-scratch.runFile', async () => {
    const terminal = vscode.window.createTerminal('runner');

    terminal.show(true);

    await vscode.commands.executeCommand('workbench.action.terminal.clear');

		const activeFile = (vscode.window.activeTextEditor as vscode.TextEditor).document.uri.fsPath
		const railsCode = `Pry::ColorPrinter.pp(eval(File.open("${activeFile}").read))`

		// DONE
		// PrettyPrint
		// Ability to run any file

		// TODO
		// Improve loading time
		// Clear screen
		// Clear/reuse terminal window
		// Eject to console
		// Remove HelloWorld script


		terminal.sendText('clear');
    terminal.sendText(`rails runner '${railsCode}'`);

		vscode.window.showInformationMessage('Ran command from rails-scratch!');
	});

	context.subscriptions.push(command);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
