export class Printer {
  constructor() {}

  public print(log: FinalLog): LogRender {
    const use_emoji =
      env().$shed?.overrides?.use_emoji === true || log.cfg.use_emoji === true;
    return log.printer(log, use_emoji);
  }
}
