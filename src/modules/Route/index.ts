import * as _ from 'lodash';
import * as UrlPattern from 'url-pattern';
import { SlashedString } from '../SlashedString';

// TODO: write tests
export class Route {
  private restKey: string = '_';

  constructor(private template: string, private path: string) {}

  public params(): RouteParams {
    return _.omit(this.match(), [this.restKey]) as RouteParams;
  }

  public rest(): string {
    return this.match()[this.restKey];
  }

  private parser() {
    return new UrlPattern(
      new SlashedString(this.template).read()
    );
  }

  private match() {
    const result = this.parser().match(this.path);

    if (!Boolean(result)) {
      throw new Error('No match');
    }

    return result;
  }
}

export type RouteParams = {
  [key: string]: string,
}
