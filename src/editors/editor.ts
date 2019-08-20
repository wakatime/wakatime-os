export default abstract class Editor implements IEditor {
  abstract name: string;

  abstract icon: string;

  get key(): string {
    return this.name.replace(/\s/g, "").toLowerCase();
  }

  abstract isEditorInstalled(): Promise<boolean>;

  abstract isPluginInstalled(): Promise<boolean>;

  abstract installPlugin(): Promise<void>;

  abstract uninstallPlugin(): Promise<void>;
}

declare interface IEditor {
  key: string;
  name: string;
  icon: string;

  isEditorInstalled(): Promise<boolean>;
  isPluginInstalled(): Promise<boolean>;
  installPlugin(): Promise<void>;
  uninstallPlugin(): Promise<void>;
}
