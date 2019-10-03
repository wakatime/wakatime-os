import os from "os";

import Editor from "./editor";

export default class CLion extends Editor {
  public static getName(): string {
    return "CLion";
  }

  public get name(): string {
    return "CLion";
  }

  public get icon(): string {
    return "";
  }

  public get binaries(): string[] {
    return ["clion"];
  }

  public async isEditorInstalled(): Promise<boolean> {
    return await this.isDirectory(this.appDirectory());
  }

  public async isPluginInstalled(): Promise<boolean> {
    return await this.isFile(this.pluginsDirectory());
  }

  public async installPlugin(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async uninstallPlugin(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private appDirectory(): string {
    switch (os.platform()) {
      case "win32":
        return null;
      case "darwin":
        return "/Applications/CLion.app/Contents";
      case "linux":
        return null;
      default:
        return null;
    }
  }

  private pluginsDirectory(): string {
    switch (os.platform()) {
      case "win32": {
        return "";
      }
      case "darwin":
        return `${os.homedir()}/Library/Application\ Support/CLion2019.2/WakaTime.jar`;
      case "linux":
        return "";
      default:
        return null;
    }
  }
}
