import * as vscode from "vscode";
import { apply } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  const applyCommand = vscode.commands.registerCommand(
    "aesthetics-remake.apply",
    () => apply(context)
  );

  context.subscriptions.push(applyCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
