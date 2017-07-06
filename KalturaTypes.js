// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2017  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

module.exports.AnnouncementOrderBy = {
NONE : 'NONE',
};

module.exports.AnnouncementRecipientsType = {
ALL : 'All',
LOGGEDIN : 'LoggedIn',
GUESTS : 'Guests',
OTHER : 'Other',
};

module.exports.AnnouncementStatus = {
NOTSENT : 'NotSent',
SENDING : 'Sending',
SENT : 'Sent',
ABORTED : 'Aborted',
};

module.exports.ApiParameterPermissionItemAction = {
READ : 'READ',
INSERT : 'INSERT',
UPDATE : 'UPDATE',
USAGE : 'USAGE',
};

module.exports.AppTokenHashType = {
SHA1 : 'SHA1',
SHA256 : 'SHA256',
SHA512 : 'SHA512',
MD5 : 'MD5',
};

module.exports.AppTokenStatus = {
DELETED : 0,
DISABLED : 1,
ACTIVE : 2,
};

module.exports.AssetCommentOrderBy = {
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.AssetHistoryOrderBy = {
NONE : 'NONE',
};

module.exports.AssetOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
LIKES_DESC : 'LIKES_DESC',
};

module.exports.AssetReferenceType = {
MEDIA : 'media',
EPG_INTERNAL : 'epg_internal',
EPG_EXTERNAL : 'epg_external',
};

module.exports.AssetType = {
MEDIA : 'media',
RECORDING : 'recording',
EPG : 'epg',
};

module.exports.BillingAction = {
UNKNOWN : 'unknown',
PURCHASE : 'purchase',
RENEW_PAYMENT : 'renew_payment',
RENEW_CANCELED_SUBSCRIPTION : 'renew_canceled_subscription',
CANCEL_SUBSCRIPTION_ORDER : 'cancel_subscription_order',
SUBSCRIPTION_DATE_CHANGED : 'subscription_date_changed',
};

module.exports.BillingItemsType = {
UNKNOWN : 'unknown',
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
PRE_PAID : 'pre_paid',
PRE_PAID_EXPIRED : 'pre_paid_expired',
COLLECTION : 'collection',
};

module.exports.BookmarkActionType = {
HIT : 'HIT',
PLAY : 'PLAY',
STOP : 'STOP',
PAUSE : 'PAUSE',
FIRST_PLAY : 'FIRST_PLAY',
SWOOSH : 'SWOOSH',
FULL_SCREEN : 'FULL_SCREEN',
SEND_TO_FRIEND : 'SEND_TO_FRIEND',
LOAD : 'LOAD',
FULL_SCREEN_EXIT : 'FULL_SCREEN_EXIT',
FINISH : 'FINISH',
ERROR : 'ERROR',
BITRATE_CHANGE : 'BITRATE_CHANGE',
NONE : 'NONE',
};

module.exports.BookmarkOrderBy = {
POSITION_ASC : 'POSITION_ASC',
POSITION_DESC : 'POSITION_DESC',
};

module.exports.BundleType = {
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
};

module.exports.ChannelEnrichment = {
CLIENTLOCATION : 'ClientLocation',
USERID : 'UserId',
HOUSEHOLDID : 'HouseholdId',
DEVICEID : 'DeviceId',
DEVICETYPE : 'DeviceType',
UTCOFFSET : 'UTCOffset',
LANGUAGE : 'Language',
NPVRSUPPORT : 'NPVRSupport',
CATCHUP : 'Catchup',
PARENTAL : 'Parental',
DTTREGION : 'DTTRegion',
ATHOME : 'AtHome',
};

module.exports.CouponStatus = {
VALID : 'VALID',
NOT_EXISTS : 'NOT_EXISTS',
ALREADY_USED : 'ALREADY_USED',
EXPIRED : 'EXPIRED',
INACTIVE : 'INACTIVE',
};

module.exports.DeviceStatus = {
PENDING : 'PENDING',
ACTIVATED : 'ACTIVATED',
NOT_ACTIVATED : 'NOT_ACTIVATED',
};

module.exports.EntitlementOrderBy = {
PURCHASE_DATE_ASC : 'PURCHASE_DATE_ASC',
PURCHASE_DATE_DESC : 'PURCHASE_DATE_DESC',
};

module.exports.EntityReferenceBy = {
USER : 'user',
HOUSEHOLD : 'household',
};

module.exports.ExportDataType = {
VOD : 'vod',
EPG : 'epg',
USERS : 'users',
};

module.exports.ExportTaskOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.ExportType = {
FULL : 'full',
INCREMENTAL : 'incremental',
};

module.exports.FavoriteOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.FollowTvSeriesOrderBy = {
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.HouseholdFrequencyType = {
DEVICES : 'devices',
USERS : 'users',
};

module.exports.HouseholdPaymentGatewaySelectedBy = {
NONE : 'none',
ACCOUNT : 'account',
HOUSEHOLD : 'household',
};

module.exports.HouseholdRestriction = {
NOT_RESTRICTED : 'not_restricted',
USER_MASTER_RESTRICTED : 'user_master_restricted',
DEVICE_MASTER_RESTRICTED : 'device_master_restricted',
DEVICE_USER_MASTER_RESTRICTED : 'device_user_master_restricted',
};

module.exports.HouseholdState = {
OK : 'ok',
CREATED_WITHOUT_NPVR_ACCOUNT : 'created_without_npvr_account',
SUSPENDED : 'suspended',
NO_USERS_IN_HOUSEHOLD : 'no_users_in_household',
};

module.exports.HouseholdSuspentionState = {
NOT_SUSPENDED : 'not_suspended',
SUSPENDED : 'suspended',
};

module.exports.HouseholdUserStatus = {
OK : 'OK',
PENDING : 'PENDING',
};

module.exports.InboxMessageOrderBy = {
NONE : 'NONE',
};

module.exports.InboxMessageStatus = {
UNREAD : 'Unread',
READ : 'Read',
DELETED : 'Deleted',
};

module.exports.InboxMessageType = {
SYSTEMANNOUNCEMENT : 'SystemAnnouncement',
FOLLOWED : 'Followed',
};

module.exports.NotificationType = {
ANNOUNCEMENT : 'announcement',
SYSTEM : 'system',
};

module.exports.OTTAssetType = {
SERIES : 0,
};

module.exports.OTTUserBy = {
USER_NAME : 'USER_NAME',
EXTERNAL_ID : 'EXTERNAL_ID',
};

module.exports.OTTUserOrderBy = {
ID_ASC : 'ID_ASC',
};

module.exports.ParentalRuleOrderBy = {
PARTNER_SORT_VALUE : 'PARTNER_SORT_VALUE',
};

module.exports.ParentalRuleType = {
ALL : 'ALL',
MOVIES : 'MOVIES',
TV_SERIES : 'TV_SERIES',
};

module.exports.PartnerConfigurationType = {
DEFAULTPAYMENTGATEWAY : 'DefaultPaymentGateway',
ENABLEPAYMENTGATEWAYSELECTION : 'EnablePaymentGatewaySelection',
OSSADAPTER : 'OSSAdapter',
};

module.exports.PaymentMethodProfileOrderBy = {
NONE : 'NONE',
};

module.exports.PaymentMethodType = {
UNKNOWN : 'unknown',
CREDIT_CARD : 'credit_card',
SMS : 'sms',
PAY_PAL : 'pay_pal',
DEBIT_CARD : 'debit_card',
IDEAL : 'ideal',
INCASO : 'incaso',
GIFT : 'gift',
VISA : 'visa',
MASTER_CARD : 'master_card',
IN_APP : 'in_app',
M1 : 'm1',
CHANGE_SUBSCRIPTION : 'change_subscription',
OFFLINE : 'offline',
};

module.exports.PersonalFeedOrderBy = {
RELEVANCY_DESC : 'RELEVANCY_DESC',
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
VIEWS_DESC : 'VIEWS_DESC',
RATINGS_DESC : 'RATINGS_DESC',
VOTES_DESC : 'VOTES_DESC',
START_DATE_DESC : 'START_DATE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
};

module.exports.PinType = {
PURCHASE : 'purchase',
PARENTAL : 'parental',
};

module.exports.PositionOwner = {
HOUSEHOLD : 'household',
USER : 'user',
};

module.exports.ProductPriceOrderBy = {
PRODUCT_ID_ASC : 'PRODUCT_ID_ASC',
PRODUCT_ID_DESC : 'PRODUCT_ID_DESC',
};

module.exports.PurchaseSettingsType = {
BLOCK : 'block',
ASK : 'ask',
ALLOW : 'allow',
};

module.exports.PurchaseStatus = {
PPV_PURCHASED : 'ppv_purchased',
FREE : 'free',
FOR_PURCHASE_SUBSCRIPTION_ONLY : 'for_purchase_subscription_only',
SUBSCRIPTION_PURCHASED : 'subscription_purchased',
FOR_PURCHASE : 'for_purchase',
SUBSCRIPTION_PURCHASED_WRONG_CURRENCY : 'subscription_purchased_wrong_currency',
PRE_PAID_PURCHASED : 'pre_paid_purchased',
GEO_COMMERCE_BLOCKED : 'geo_commerce_blocked',
ENTITLED_TO_PREVIEW_MODULE : 'entitled_to_preview_module',
FIRST_DEVICE_LIMITATION : 'first_device_limitation',
COLLECTION_PURCHASED : 'collection_purchased',
USER_SUSPENDED : 'user_suspended',
NOT_FOR_PURCHASE : 'not_for_purchase',
};

module.exports.RecordingOrderBy = {
TITLE_ASC : 'TITLE_ASC',
TITLE_DESC : 'TITLE_DESC',
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
};

module.exports.RecordingStatus = {
SCHEDULED : 'SCHEDULED',
RECORDING : 'RECORDING',
RECORDED : 'RECORDED',
CANCELED : 'CANCELED',
FAILED : 'FAILED',
DELETED : 'DELETED',
};

module.exports.RecordingType = {
SINGLE : 'SINGLE',
SEASON : 'SEASON',
SERIES : 'SERIES',
};

module.exports.RegionOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.RuleLevel = {
INVALID : 'invalid',
USER : 'user',
HOUSEHOLD : 'household',
ACCOUNT : 'account',
};

module.exports.RuleType = {
PARENTAL : 'parental',
GEO : 'geo',
USER_TYPE : 'user_type',
DEVICE : 'device',
};

module.exports.SeriesRecordingOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
ID_ASC : 'ID_ASC',
ID_DESC : 'ID_DESC',
SERIES_ID_ASC : 'SERIES_ID_ASC',
SERIES_ID_DESC : 'SERIES_ID_DESC',
};

module.exports.SessionType = {
USER : 0,
ADMIN : 2,
};

module.exports.SocialNetwork = {
FACEBOOK : 'facebook',
};

module.exports.StreamType = {
CATCHUP : 'catchup',
START_OVER : 'start_over',
TRICK_PLAY : 'trick_play',
};

module.exports.SubscriptionOrderBy = {
START_DATE_ASC : 'START_DATE_ASC',
START_DATE_DESC : 'START_DATE_DESC',
};

module.exports.TopicAutomaticIssueNotification = {
INHERIT : 'Inherit',
YES : 'Yes',
NO : 'No',
};

module.exports.TopicOrderBy = {
NONE : 'NONE',
};

module.exports.TransactionAdapterStatus = {
OK : 'OK',
PENDING : 'PENDING',
FAILED : 'FAILED',
};

module.exports.TransactionHistoryOrderBy = {
CREATE_DATE_ASC : 'CREATE_DATE_ASC',
CREATE_DATE_DESC : 'CREATE_DATE_DESC',
};

module.exports.TransactionType = {
PPV : 'ppv',
SUBSCRIPTION : 'subscription',
COLLECTION : 'collection',
};

module.exports.UserAssetRuleOrderBy = {
NAME_ASC : 'NAME_ASC',
NAME_DESC : 'NAME_DESC',
};

module.exports.UserAssetsListItemType = {
ALL : 'all',
MEDIA : 'media',
};

module.exports.UserAssetsListType = {
ALL : 'all',
WATCH : 'watch',
PURCHASE : 'purchase',
LIBRARY : 'library',
};

module.exports.UserRoleOrderBy = {
NONE : 'NONE',
};

module.exports.UserState = {
OK : 'ok',
USER_WITH_NO_HOUSEHOLD : 'user_with_no_household',
USER_CREATED_WITH_NO_ROLE : 'user_created_with_no_role',
USER_NOT_ACTIVATED : 'user_not_activated',
};

module.exports.WatchStatus = {
PROGRESS : 'progress',
DONE : 'done',
ALL : 'all',
};
