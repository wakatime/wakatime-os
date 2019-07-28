import * as fs from "async-file";
import * as os from "os";
import * as path from "path";
import "./editor";

export default class SublimeText3 implements Editor {
  public get name(): string {
    return "Sublime Text 3";
  }

  public get icon(): string {
    return "";
  }

  public async isEditorInstalled(): Promise<boolean> {
    const stats = await fs.stat(this._appDirectory());
    return new Promise<boolean>(resolve => {
      resolve(stats.isDirectory());
    });
  }

  public async isPluginInstalled(): Promise<boolean> {
    const pluginDir = path.join(this._pluginsDirectory(), "WakaTime");
    const stats = await fs.stat(pluginDir);
    return new Promise<boolean>(resolve => {
      resolve(stats.isDirectory());
    });
  }

  public async installPlugin(): Promise<void> {
    return new Promise<void>(resolve => {
      resolve();
    });
  }

  public async uninstallPlugin(): Promise<void> {
    return new Promise<void>(resolve => {
      resolve();
    });
  }

  private _appDirectory(): string {
    let dir;
    switch (os.platform()) {
      case "win32":
        break;
      case "darwin":
        dir = "/Applications/Sublime Text 3.app/Contents";
        break;
      default:
        dir = null;
    }
    return dir;
  }

  private _pluginsDirectory(): string {
    switch (os.platform()) {
      case "win32": {
        const is64bit =
          process.arch === "x64" ||
          process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432");
        if (is64bit) return "";
        return "";
      }
      case "darwin":
        return path.join(
          os.homedir(),
          "Library/Application Support/Sublime Text 3/Packages"
        );
      case "linux":
        return "";
      default:
        return null;
    }
  }
}
