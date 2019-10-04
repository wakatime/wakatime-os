import os from "os";

import Editor from "./editor";

export default class DataGrip extends Editor {
  public static getName(): string {
    return "DataGrip";
  }

  public get name(): string {
    return "DataGrip";
  }

  public get icon(): string {
    return "";
  }

  public get binaries(): string[] {
    return ["datagrip"];
  }

  public async isEditorInstalled(): Promise<boolean> {
    return await this.isDirectory(this.appDirectory());
  }

  public async isPluginInstalled(): Promise<boolean> {
    const result = this.pluginsDirectories().some(path => {
      return this.isFileSync(path) === true;
    });

    return await result;
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
        return "/Applications/DataGrip.app/Contents";
      case "linux":
        return null;
      default:
        return null;
    }
  }

  private pluginsDirectories(): string[] {
    const pathsToCheck = ["2019.2", "2019.1", "2018.2", "2018.1"];
    switch (os.platform()) {
      case "win32": {
        return [""];
      }
      case "darwin":
        return pathsToCheck.map(
          path =>
            `${os.homedir()}/Library/Application\ Support/DataGrip${path}/WakaTime.jar`
        );
      case "linux":
        return [""];
      default:
        return null;
    }
  }
}
