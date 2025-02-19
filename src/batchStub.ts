import { BatchSDK } from "../types";
import { InboxNotificationSource } from "./modules/inbox";
import { AndroidNotificationTypes, iOSNotificationTypes } from "./modules/push";
import { BatchUserAttributeType } from "./modules/user";

/* tslint:disable:no-console */

class MessagingStub implements BatchSDK.MessagingModule {
  public setDoNotDisturbEnabled(_enabled: boolean) {}
  public showPendingMessage() {}
}

class PushStub implements BatchSDK.PushModule {
  public AndroidNotificationTypes: typeof AndroidNotificationTypes;
  public iOSNotificationTypes: typeof iOSNotificationTypes;

  constructor() {
    this.AndroidNotificationTypes = AndroidNotificationTypes;
    this.iOSNotificationTypes = iOSNotificationTypes;
  }

  public registerForRemoteNotifications() {}
  public refreshToken() {}
  public requestNotificationAuthorization() {}
  public requestProvisionalNotificationAuthorization() {}
  public setiOSShowForegroundNotifications(_showForeground: boolean) {}
  public setAndroidNotificationTypes(_notifTypes: unknown) {}
  public setiOSNotificationTypes(_notifTypes: unknown) {}
  public clearBadge() {}
  public dismissNotifications() {}
  public getLastKnownPushToken(): Promise<undefined | string> {
    return Promise.resolve(undefined);
  }
}

class UserStub implements BatchSDK.UserModule {
  public eventData: typeof BatchSDK.BatchEventData;
  public BatchUserAttributeType: typeof BatchSDK.BatchUserAttributeType;

  constructor() {
    this.eventData = BatchEventDataStub;
    this.BatchUserAttributeType = BatchUserAttributeType;
  }

  public getLanguage(): Promise<undefined | string> {
    return Promise.resolve(undefined);
  }
  public getRegion(): Promise<undefined | string> {
    return Promise.resolve(undefined);
  }
  public getIdentifier(): Promise<undefined | string> {
    return Promise.resolve(undefined);
  }
  public getInstallationID(): Promise<undefined | string> {
    return Promise.resolve(undefined);
  }
  public getAttributes(): Promise<{
    [key: string]: BatchSDK.BatchUserAttribute;
  }> {
    return Promise.resolve({});
  }
  public getTagCollections(): Promise<{ [key: string]: string[] }> {
    return Promise.resolve({});
  }
  public getEditor(): BatchSDK.BatchUserDataEditor {
    return new BatchUserDataEditorStub();
  }
  public printDebugInformation() {}
  public trackEvent(_name: string, _label?: string, _data?: unknown) {}
  public trackTransaction(
    _amount: number,
    _data?: { [key: string]: unknown }
  ) {}
  public trackLocation(_location: BatchSDK.Location): void {}
}

class InboxStub implements BatchSDK.InboxModule {
  public NotificationSource: typeof InboxNotificationSource;

  constructor() {
    this.NotificationSource = InboxNotificationSource;
  }
  getFetcherForInstallation(
    _maxPageSize?: number,
    _limit?: number
  ): Promise<BatchSDK.InboxFetcher> {
    return new Promise(() => {});
  }

  getFetcherForUser(
    _userIdentifier: string,
    _authenticationKey: string,
    _maxPageSize?: number,
    _limit?: number
  ): Promise<BatchSDK.InboxFetcher> {
    return new Promise(() => {});
  }
}

class BatchEventDataStub implements BatchSDK.BatchEventData {
  public addTag(_tag: string): BatchSDK.BatchEventData {
    return this;
  }

  public put(_key: unknown, _value: string | number | boolean | Date) {
    return this;
  }
}

class BatchUserDataEditorStub implements BatchSDK.BatchUserDataEditor {
  public setLanguage(_language: string | null) {
    return this;
  }
  public setRegion(_region: string | null) {
    return this;
  }
  public setIdentifier(_identifier: string | null) {
    return this;
  }
  public setAttribute(_key: string, _value: string | number | boolean | Date) {
    return this;
  }
  public removeAttribute(_key: string) {
    return this;
  }
  public clearAttributes() {
    return this;
  }
  public addTag(_collection: string, _tag: string) {
    return this;
  }
  public removeTag(_collection: string, _tag: string) {
    return this;
  }
  public clearTags() {
    return this;
  }
  public clearTagCollection(_collection: string) {
    return this;
  }
  public save() {
    return this;
  }
}

export class BatchStub implements BatchSDK.Batch {
  public push: BatchSDK.PushModule;
  public user: BatchSDK.UserModule;
  public messaging: BatchSDK.MessagingModule;
  public inbox: BatchSDK.InboxModule;
  constructor() {
    this.push = new PushStub();
    this.user = new UserStub();
    this.messaging = new MessagingStub();
    this.inbox = new InboxStub();
  }
  public on(
    _event: string,
    _listener: (
      eventName: string,
      parameters: { [key: string]: unknown }
    ) => void
  ): void {}
  public off(_event?: string): void {}
  public setConfig(_config: BatchSDK.Config): void {}
  public start(): void {
    if (console && console.log) {
      console.log("Batch is not supported in this environement");
    }
  }
  public optIn(): void {}
  public optOut(): void {}
  public optOutAndWipeData(): void {}
}
