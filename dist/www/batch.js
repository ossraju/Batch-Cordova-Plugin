!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.writeBatchLog=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var a=["[Batch]"].concat(Array.prototype.slice.call(arguments,1));!0===o.Consts.DevelopmentMode&&!0===t?console&&console.debug&&console.debug.apply(console,a):!1===t&&console&&console.log&&console.log.apply(console,a)},e.sendToBridge=function(t,e,n){cordova.exec(t||function(){},function(){},o.Consts.BatchPluginName,"BA_"+e,null!=n?n:[{}])},e.isString=function(t){return t instanceof String||"string"==typeof t},e.isNumber=function(t){return t instanceof Number||"number"==typeof t&&!isNaN(t)},e.isBoolean=function(t){return t instanceof Boolean||"boolean"==typeof t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.SetConfig="setConfig",t.Start="start",t.OptIn="optIn",t.OptOut="optOut",t.OptOutWipeData="optOutAndWipeData"}(e.Core||(e.Core={})),function(t){t.GetLastKnownPushToken="push.getLastKnownPushToken",t.SetIOSNotifTypes="push.setIOSNotifTypes",t.SetAndroidNotifTypes="push.setAndroidNotifTypes",t.Register="push.register",t.DismissNotifications="push.dismissNotifications",t.ClearBadge="push.clearBadge"}(e.Push||(e.Push={})),function(t){t.SetDoNotDisturbEnabled="messaging.setDoNotDisturbEnabled",t.ShowPendingMessage="messaging.showPendingMessage"}(e.Messaging||(e.Messaging={})),function(t){t.Fetch="inbox.fetch",t.FetchForUserID="inbox.fetchForUserIdentifier"}(e.Inbox||(e.Inbox={})),function(t){t.Edit="user.edit",t.TrackEvent="user.track.event",t.TrackLegacyEvent="user.track.legacy_event",t.TrackTransaction="user.track.transaction",t.TrackLocation="user.track.location",t.DataDebug="user.data.debug",t.GetInstallationID="user.getInstallationID"}(e.User||(e.User={})),function(t){t.SetLanguage="SET_LANGUAGE",t.SetRegion="SET_REGION",t.SetIdentifier="SET_IDENTIFIER",t.SetAttribute="SET_ATTRIBUTE",t.RemoveAttribute="REMOVE_ATTRIBUTE",t.ClearAttribute="CLEAR_ATTRIBUTES",t.AddTag="ADD_TAG",t.RemoveTag="REMOVE_TAG",t.ClearTags="CLEAR_TAGS",t.ClearTagCollection="CLEAR_TAG_COLLECTION"}(e.UserDataOperation||(e.UserDataOperation={})),function(t){t.SetupCallback="_setupCallback"}(e.Internal||(e.Internal={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Consts={AttributeKeyRegexp:/^[a-zA-Z0-9_]{1,30}$/,AttributeStringMaxLength:64,BatchPluginName:"Batch",DevelopmentMode:!0,EventDataMaxTags:10,EventDataMaxValues:10,EventDataStringMaxLength:64},e.default=e.Consts},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={Android:"android",iOS:"ios",isCurrent:function(t){return cordova.platformId.toLowerCase()===t}};e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a,i=n(1),r=n(0);!function(t){t[t.NONE=0]="NONE",t[t.SOUND=1]="SOUND",t[t.VIBRATE=2]="VIBRATE",t[t.LIGHTS=4]="LIGHTS",t[t.ALERT=8]="ALERT"}(o=e.AndroidNotificationTypes||(e.AndroidNotificationTypes={})),function(t){t[t.NONE=0]="NONE",t[t.BADGE=1]="BADGE",t[t.SOUND=2]="SOUND",t[t.ALERT=4]="ALERT"}(a=e.iOSNotificationTypes||(e.iOSNotificationTypes={}));var s=function(){function t(){this.AndroidNotificationTypes=o,this.iOSNotificationTypes=a}return t.prototype.registerForRemoteNotifications=function(){r.sendToBridge(null,i.Push.Register,null)},t.prototype.setAndroidNotificationTypes=function(t){"number"!=typeof t?r.writeBatchLog(!1,"notifTypes must be a number (of the AndroidNotificationTypes enum)"):r.sendToBridge(null,i.Push.SetAndroidNotifTypes,[{notifTypes:t}])},t.prototype.setiOSNotificationTypes=function(t){"number"==typeof t?r.sendToBridge(null,i.Push.SetIOSNotifTypes,[{notifTypes:t}]):r.writeBatchLog(!1,"notifTypes must be a number (of the iOSNotificationTypes enum)")},t.prototype.clearBadge=function(){r.sendToBridge(null,i.Push.ClearBadge,null)},t.prototype.dismissNotifications=function(){r.sendToBridge(null,i.Push.DismissNotifications,null)},t.prototype.getLastKnownPushToken=function(t){r.sendToBridge(t,i.Push.GetLastKnownPushToken,null)},t}();e.PushModule=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(1),i=n(0);!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.CAMPAIGN=1]="CAMPAIGN",t[t.TRANSACTIONAL=2]="TRANSACTIONAL"}(o=e.InboxNotificationSource||(e.InboxNotificationSource={}));var r=function(){function t(){this.NotificationSource=o}return t.prototype.fetchNotifications=function(t){var e=this;i.sendToBridge(function(n){e.handleFetchCallback(n,t)},a.Inbox.Fetch,null)},t.prototype.fetchNotificationsForUserIdentifier=function(t,e,n){var o=this;i.sendToBridge(function(t){o.handleFetchCallback(t,n)},a.Inbox.FetchForUserID,[{id:t,auth:e}])},t.prototype.handleFetchCallback=function(t,e){var n,o=this;if("function"!=typeof e)throw new Error("callback is a required parameter, and must be a function");try{n=JSON.parse(t)}catch(t){return void e(new Error("Internal bridge error"),void 0)}if(i.isString(n.error))e(new Error(n.error));else{var a=n.notifications;if(Array.isArray(a)){var r=[];a.forEach(function(t){try{r.push(o.parseBridgeNotification(t))}catch(t){}}),e(void 0,r)}else e(new Error("Internal error: malformed notifications"))}},t.prototype.parseBridgeNotification=function(t){if("object"!=typeof t)throw new Error("Raw notification is not an object");var e=t.body;if(!i.isString(t.body))throw new Error("An Inbox Notification must at least have a body");var n=t.identifier;if(!i.isString(t.identifier))throw new Error("An Inbox Notification must at least have an identifier");var a=t.date;if(!i.isNumber(a))throw new Error("An Inbox Notification must at least have a date");var r=t.is_unread;if("boolean"!=typeof r)throw new Error("An Inbox Notification must at least have a read flag");var s=t.source;if(!i.isNumber(s))throw new Error("An Inbox Notification must at least have a source");s!==o.CAMPAIGN&&s!==o.TRANSACTIONAL&&s!==o.UNKNOWN&&(s=o.UNKNOWN);var u={body:e,date:new Date(a),identifier:n,isUnread:r,payload:{},source:s};return i.isString(t.ios_attachment_url)&&(u.iOSAttachmentURL=t.ios_attachment_url),"object"==typeof t.payload&&(u.payload=t.payload),i.isString(t.title)&&(u.title=t.title),u},t}();e.InboxModule=r},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var actions_1=__webpack_require__(1),consts_1=__webpack_require__(2),helpers_1=__webpack_require__(0),CallbackAction;!function(t){t.Log="_log",t.Eval="_eval",t.DispatchPush="_dispatchPush",t.DispatchMessagingEvent="_dispatchMessagingEvent",t.OnBridgeFailure="onBridgeFailure"}(CallbackAction=exports.CallbackAction||(exports.CallbackAction={}));var CallbackHandler=function(){function CallbackHandler(){}return CallbackHandler.prototype.setup=function(){cordova.exec(this.handleCallback,function(){},consts_1.Consts.BatchPluginName,actions_1.Internal.SetupCallback,[{}])},CallbackHandler.prototype.handleCallback=function(callbackData){switch(callbackData.action!==CallbackAction.Log&&helpers_1.writeBatchLog(!0,"Got callback from Batch",callbackData),callbackData.action){case CallbackAction.DispatchPush:var pushPayload=callbackData.payload;for(var key in pushPayload)if(pushPayload.hasOwnProperty(key)){var value=pushPayload[key];if("string"==typeof value)try{pushPayload[key]=JSON.parse(value),"object"!=typeof pushPayload[key]&&(pushPayload[key]=value)}catch(t){}else"number"!=typeof value&&"boolean"!=typeof value||(pushPayload[key]=String(value))}var hasLandingMessage=!1;!0===callbackData.hasLandingMessage&&(hasLandingMessage=!0),cordova.fireDocumentEvent("batchPushReceived",{hasLandingMessage:hasLandingMessage,payload:pushPayload});break;case CallbackAction.DispatchMessagingEvent:var lifecycleEventName=callbackData.lifecycleEvent,publicEventName=void 0;if("shown"==lifecycleEventName)publicEventName="batchMessageShown";else{if("closed"!=lifecycleEventName){helpers_1.writeBatchLog(!0,"Unknown messaging lifecycle event, can't forward",callbackData.lifecycleEvent);break}publicEventName="batchMessageClosed"}var payload={};helpers_1.isString(callbackData.messageIdentifier)&&(payload.messageIdentifier=callbackData.messageIdentifier),cordova.fireDocumentEvent(publicEventName,payload);break;case CallbackAction.Log:console&&console.log&&console.log(callbackData.message);break;case CallbackAction.Eval:eval(callbackData.command);break;case CallbackAction.OnBridgeFailure:helpers_1.writeBatchLog(!1,"Internal Bridge error",callbackData.result)}},CallbackHandler}();exports.CallbackHandler=CallbackHandler},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),a=n(4),i=function(){function t(){}return t.prototype.setDoNotDisturbEnabled=function(t){},t.prototype.showPendingMessage=function(){},t}(),r=function(){function t(){this.AndroidNotificationTypes=a.AndroidNotificationTypes,this.iOSNotificationTypes=a.iOSNotificationTypes}return t.prototype.registerForRemoteNotifications=function(){},t.prototype.setAndroidNotificationTypes=function(t){},t.prototype.setiOSNotificationTypes=function(t){},t.prototype.clearBadge=function(){},t.prototype.dismissNotifications=function(){},t.prototype.getLastKnownPushToken=function(t){},t}(),s=function(){function t(){this.eventData=c}return t.prototype.getInstallationID=function(t){},t.prototype.getEditor=function(){return new l},t.prototype.printDebugInformation=function(){},t.prototype.trackEvent=function(t,e,n){},t.prototype.trackTransaction=function(t,e){},t.prototype.trackLocation=function(t){},t}(),u=function(){function t(){this.NotificationSource=o.InboxNotificationSource}return t.prototype.fetchNotifications=function(t){},t.prototype.fetchNotificationsForUserIdentifier=function(t,e,n){},t}(),c=function(){function t(){}return t.prototype.addTag=function(t){return this},t.prototype.put=function(t,e){return this},t}(),l=function(){function t(){}return t.prototype.setLanguage=function(t){return this},t.prototype.setRegion=function(t){return this},t.prototype.setIdentifier=function(t){return this},t.prototype.setAttribute=function(t,e){return this},t.prototype.removeAttribute=function(t){return this},t.prototype.clearAttributes=function(){return this},t.prototype.addTag=function(t,e){return this},t.prototype.removeTag=function(t,e){return this},t.prototype.clearTags=function(){return this},t.prototype.clearTagCollection=function(t){return this},t.prototype.save=function(){return this},t}(),f=function(){function t(){this.push=new r,this.user=new s,this.messaging=new i,this.inbox=new u}return t.prototype.on=function(t,e){},t.prototype.off=function(t){},t.prototype.setConfig=function(t){},t.prototype.start=function(){console&&console.log&&console.log("Batch is not supported in this environement")},t.prototype.optIn=function(){},t.prototype.optOut=function(){},t.prototype.optOutAndWipeData=function(){},t}();e.default=f},function(t,e,n){"use strict";var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=a(n(2)),s=n(0),u=function(){function t(t){if(!0!==t)throw new Error("Do not instanciate BatchUserDataEditor yourself: use batch.user.getEditor()");this._operationQueue=[]}return t.prototype.setLanguage=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Language must be a string or null"),this):(this._enqueueOperation(i.UserDataOperation.SetLanguage,{value:t}),this)},t.prototype.setRegion=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Region must be a string or null"),this):(this._enqueueOperation(i.UserDataOperation.SetRegion,{value:t}),this)},t.prototype.setIdentifier=function(t){return"string"!=typeof t&&null!==t?(s.writeBatchLog(!1,"BatchUserDataEditor - Identifier must be a string or null"),this):(this._enqueueOperation(i.UserDataOperation.SetIdentifier,{value:t}),this)},t.prototype.setAttribute=function(t,e){if(!r.default.AttributeKeyRegexp.test(t||""))return s.writeBatchLog(!1,"BatchUserDataEditor - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this;if(void 0===t||null===t)return s.writeBatchLog(!1,"BatchUserDataEditor - Value argument cannot be undefined or null"),this;if(void 0===e)return s.writeBatchLog(!1,"BatchUserDataEditor - A value is required"),this;var n={value:e,key:t,type:""};if(e instanceof Date)n.value=e.getTime(),n.type="date";else{if("number"==typeof e&&isNaN(e))return s.writeBatchLog(!1,"BatchUserDataEditor - Value cannot be NaN"),this;if(s.isNumber(e))n.type=e%1==0?"integer":"float";else if(s.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return s.writeBatchLog(!1,"BatchUserDataEditor - String attributes can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring attribute '"+t+"'."),this;n.type="string"}else{if(!(e instanceof Boolean||"boolean"==typeof e))return s.writeBatchLog(!1,"BatchUserDataEditor - Value argument must be one of these types: number, string, boolean, date"),this;n.type="boolean"}}return this._enqueueOperation(i.UserDataOperation.SetAttribute,n),this},t.prototype.removeAttribute=function(t){return r.default.AttributeKeyRegexp.test(t||"")?(this._enqueueOperation(i.UserDataOperation.RemoveAttribute,{key:t}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this)},t.prototype.clearAttributes=function(){return this._enqueueOperation(i.UserDataOperation.ClearAttribute,{}),this},t.prototype.addTag=function(t,e){return s.isString(t)?r.default.AttributeKeyRegexp.test(t||"")?void 0===e?(s.writeBatchLog(!1,"BatchUserDataEditor - A tag is required"),this):s.isString(e)?0===e.length||e.length>r.default.AttributeStringMaxLength?(s.writeBatchLog(!1,"BatchUserDataEditor - Tags can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring tag '"+e+"'."),this):(this._enqueueOperation(i.UserDataOperation.AddTag,{collection:t,tag:e}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Tag argument must be a string"),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this)},t.prototype.removeTag=function(t,e){if("string"!=typeof t&&!(t instanceof String))return s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this;if(!r.default.AttributeKeyRegexp.test(t||""))return s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this;if(void 0===e)return s.writeBatchLog(!1,"BatchUserDataEditor - A tag is required"),this;if(s.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return s.writeBatchLog(!1,"BatchUserDataEditor - Tags can't be empty or longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring tag '"+e+"'."),this}else s.writeBatchLog(!1,"BatchUserDataEditor - Tag argument must be a string");return this._enqueueOperation(i.UserDataOperation.RemoveTag,{collection:t,tag:e}),this},t.prototype.clearTags=function(){return this._enqueueOperation(i.UserDataOperation.ClearTags,{}),this},t.prototype.clearTagCollection=function(t){return"string"!=typeof t?(s.writeBatchLog(!1,"BatchUserDataEditor - Collection argument must be a string"),this):r.default.AttributeKeyRegexp.test(t||"")?(this._enqueueOperation(i.UserDataOperation.ClearTagCollection,{collection:t}),this):(s.writeBatchLog(!1,"BatchUserDataEditor - Invalid collection. Please make sure that the collection is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring collection '"+t+"'"),this)},t.prototype.save=function(){return s.sendToBridge(null,i.User.Edit,[{operations:this._operationQueue}]),this._operationQueue=[],this},t.prototype._enqueueOperation=function(t,e){var n=o({operation:t},e);this._operationQueue.push(n)},t}();e.BatchUserDataEditor=u},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a,i=o(n(2)),r=n(0);!function(t){t.String="s",t.Boolean="b",t.Integer="i",t.Float="f"}(a=e.TypedEventAttributeType||(e.TypedEventAttributeType={}));var s=function(){function t(){this._tags={},this._attributes={}}return t.prototype.addTag=function(t){return void 0===t?(r.writeBatchLog(!1,"BatchEventData - A tag is required"),this):r.isString(t)?0===t.length||t.length>i.default.EventDataStringMaxLength?(r.writeBatchLog(!1,"BatchEventData - Tags can't be empty or longer than "+i.default.EventDataStringMaxLength+" characters. Ignoring tag '"+t+"'."),this):Object.keys(this._tags).length>=i.default.EventDataMaxTags?(r.writeBatchLog(!1,"BatchEventData - Event data cannot hold more than "+i.default.EventDataMaxTags+" tags. Ignoring tag: '"+t+"'"),this):(this._tags[t.toLowerCase()]=!0,this):(r.writeBatchLog(!1,"BatchEventData - Tag argument must be a string"),this)},t.prototype.put=function(t,e){if(!r.isString(t))return r.writeBatchLog(!1,"BatchEventData - Key must be a string"),this;if(!i.default.AttributeKeyRegexp.test(t||""))return r.writeBatchLog(!1,"BatchEventData - Invalid key. Please make sure that the key is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring attribute '"+t+"'"),this;if(void 0===e||null===e)return r.writeBatchLog(!1,"BatchEventData - Value cannot be undefined or null"),this;if(t=t.toLowerCase(),Object.keys(this._tags).length>=i.default.EventDataMaxValues&&!this._attributes.hasOwnProperty(t))return r.writeBatchLog(!1,"BatchEventData - Event data cannot hold more than "+i.default.EventDataMaxValues+" attributes. Ignoring attribute: '"+t+"'"),this;var n;if(r.isString(e))n={type:a.String,value:e};else if(r.isNumber(e))n={type:e%1==0?a.Integer:a.Float,value:e};else{if(!r.isBoolean(e))return r.writeBatchLog(!1,"BatchEventData - Invalid attribute value type. Must be a string, number or boolean"),this;n={type:a.Boolean,value:e}}return n&&(this._attributes[t]=n),this},t.prototype._toInternalRepresentation=function(){return{attributes:this._attributes,tags:Object.keys(this._tags)}},t}();e.BatchEventData=s},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(0),r=o(n(2)),s=n(9),u=n(8),c=function(){function t(){this.eventData=s.BatchEventData}return t.prototype.getInstallationID=function(t){i.sendToBridge(t,a.User.GetInstallationID,null)},t.prototype.getEditor=function(){return new u.BatchUserDataEditor(!0)},t.prototype.printDebugInformation=function(){i.sendToBridge(null,a.User.DataDebug,null)},t.prototype.trackEvent=function(t,e,n){if(i.isString(t)&&r.default.AttributeKeyRegexp.test(t||"")){var o={name:t};if(i.isString(e)){if(0===e.length||e.length>r.default.AttributeStringMaxLength)return void i.writeBatchLog(!1,"BatchUserDataEditor - Label can't be longer than "+r.default.AttributeStringMaxLength+" characters. Ignoring event '"+t+"'.");o.label=e}else if(null!=e&&void 0!==e)return void i.writeBatchLog(!1,"BatchUser - If supplied, label argument must be a string. Ignoring event '"+t+"'.");if(n instanceof s.BatchEventData)o.event_data=n._toInternalRepresentation();else if("object"==typeof n)return o.data=n,void i.sendToBridge(null,a.User.TrackLegacyEvent,[o]);i.sendToBridge(null,a.User.TrackEvent,[o])}else i.writeBatchLog(!1,"BatchUser - Invalid event name. Please make sure that the name is made of letters, underscores and numbers only (a-zA-Z0-9_). It also can't be longer than 30 characters. Ignoring event '"+t+"'")},t.prototype.trackTransaction=function(t,e){if(void 0!==t)if(i.isNumber(t)&&!isNaN(t)){var n={amount:t};"object"==typeof e&&(n.data=e),i.sendToBridge(null,a.User.TrackTransaction,[n])}else i.writeBatchLog(!1,"BatchUser - Amount must be a valid number. Ignoring transaction.");else i.writeBatchLog(!1,"BatchUser - Amount must be a valid number. Ignoring transaction.")},t.prototype.trackLocation=function(t){"object"==typeof t?"number"!=typeof t.latitude||isNaN(t.latitude)?i.writeBatchLog(!1,"BatchUser - Invalid latitude. Skipping."):"number"!=typeof t.longitude||isNaN(t.longitude)?i.writeBatchLog(!1,"BatchUser - Invalid longitude. Skipping."):!t.precision||"number"==typeof t.precision&&!isNaN(t.precision)?!t.date||t.date instanceof Date?i.sendToBridge(null,a.User.TrackLocation,[{date:t.date?t.date.getTime():void 0,latitude:t.latitude,longitude:t.longitude,precision:t.precision}]):i.writeBatchLog(!1,"BatchUser - Invalid date. Skipping."):i.writeBatchLog(!1,"BatchUser - Invalid precision. Skipping."):i.writeBatchLog(!1,"BatchUser - Invalid trackLocation argument. Skipping.")},t}();e.UserModule=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),a=n(0),i=function(){function t(){}return t.prototype.setDoNotDisturbEnabled=function(t){"boolean"==typeof t?a.sendToBridge(null,o.Messaging.SetDoNotDisturbEnabled,[{enabled:t}]):a.writeBatchLog(!1,"Batch.Messaging - setDoNotDisturbEnabled: parameter must be a boolean")},t.prototype.showPendingMessage=function(){a.sendToBridge(null,o.Messaging.ShowPendingMessage,null)},t}();e.MessagingModule=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=function(){function t(){this._eventListeners={}}return t.prototype.on=function(t,e){return"string"!=typeof t?(o.writeBatchLog(!1,"Event name must be a string if supplied"),this):(this._eventListeners[t]=this._eventListeners[t]||[],this._eventListeners[t].push(e),this)},t.prototype.off=function(t){return void 0===t?(this._eventListeners={},this):"string"!=typeof t?(o.writeBatchLog(!1,"Event name must be a string if supplied"),this):(this._eventListeners[t]=[],this)},t.prototype.emit=function(t,e){o.writeBatchLog(!0,"Calling back developer implementation - "+t,e),(this._eventListeners[t]||[]).forEach(function(n){n(t,e)})},t}();e.EventEmitter=a},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(12),r=n(0),s=n(5),u=n(11),c=n(4),l=n(10),f=o(n(3)),p=function(){function t(){this.push=new c.PushModule,this.user=new l.UserModule,this.messaging=new u.MessagingModule,this.inbox=new s.InboxModule,this._config=null,this._eventEmitter=new i.EventEmitter}return t.prototype.on=function(t,e){this._eventEmitter.on(t,e)},t.prototype.off=function(t){this._eventEmitter.off(t)},t.prototype.setConfig=function(t){if("object"==typeof t){var e={androidAPIKey:null,canUseAdvertisingIdentifier:!0,iOSAPIKey:null};for(var n in t)e.hasOwnProperty(n)?e[n]=t[n]:this.log(!1,"Unknown key found in the config object : "+n);this._config=e}else r.writeBatchLog(!1,"Config must be an object.")},t.prototype.start=function(){if(null===this._config)return r.writeBatchLog(!1,"You must call setConfig before calling start."),this;var t=f.default.isCurrent(f.default.Android)?this._config.androidAPIKey:this._config.iOSAPIKey;"string"==typeof t?(r.sendToBridge(null,a.Core.SetConfig,[{APIKey:t,useAndroidID:!1,useIDFA:!0===this._config.canUseAdvertisingIdentifier}]),r.sendToBridge(null,a.Core.Start,null)):r.writeBatchLog(!1,"No API key was specified for the current platform.")},t.prototype.optIn=function(){r.sendToBridge(null,a.Core.OptIn,null)},t.prototype.optOut=function(){r.sendToBridge(null,a.Core.OptOut,null)},t.prototype.optOutAndWipeData=function(){r.sendToBridge(null,a.Core.OptOutWipeData,null)},t.prototype.log=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];r.writeBatchLog.apply(void 0,[t].concat(e))},t}();e.default=p},function(t,e,n){"use strict";var o,a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=a(n(13)),r=a(n(7)),s=n(6),u=a(n(3));u.default.isCurrent(u.default.iOS)||u.default.isCurrent(u.default.Android)?(o=new i.default,(new s.CallbackHandler).setup()):o=new r.default,t.exports=o}]));