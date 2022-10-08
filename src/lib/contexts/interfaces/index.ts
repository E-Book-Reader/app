export interface ContextInterface<ContextContentInterface> {
  initiate?: () => any;
  content: ContextContentInterface;
  setContent: (content: ContextContentInterface) => void;
}

export interface ContextContentInterface {
  ready: boolean;
}
