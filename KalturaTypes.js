// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platforms allow them to do with
// text.
//
// Copyright (C) 2006-2023  Kaltura Inc.
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

module.exports.AppTokenStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.AppearInListType = {
PARTNER_ONLY : 1,
CATEGORY_MEMBERS_ONLY : 3,
};

module.exports.AssetParamsDeletePolicy = {
KEEP : 0,
DELETE : 1,
};

module.exports.AssetParamsOrigin = {
CONVERT : 0,
INGEST : 1,
CONVERT_WHEN_MISSING : 2,
};

module.exports.AttachmentAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

module.exports.AuditTrailChangeXmlNodeType = {
CHANGED : 1,
ADDED : 2,
REMOVED : 3,
};

module.exports.AuditTrailContext = {
CLIENT : -1,
SCRIPT : 0,
PS2 : 1,
API_V3 : 2,
};

module.exports.AuditTrailFileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

module.exports.AuditTrailStatus = {
PENDING : 1,
READY : 2,
FAILED : 3,
};

module.exports.BatchJobErrorTypes = {
APP : 0,
RUNTIME : 1,
HTTP : 2,
CURL : 3,
KALTURA_API : 4,
KALTURA_CLIENT : 5,
};

module.exports.BatchJobStatus = {
PENDING : 0,
QUEUED : 1,
PROCESSING : 2,
PROCESSED : 3,
MOVEFILE : 4,
FINISHED : 5,
FAILED : 6,
ABORTED : 7,
ALMOST_DONE : 8,
RETRY : 9,
FATAL : 10,
DONT_PROCESS : 11,
FINISHED_PARTIALLY : 12,
SUSPEND : 13,
SUSPEND_ALMOST_DONE : 14,
};

module.exports.BitRateMode = {
CBR : 1,
VBR : 2,
};

module.exports.BulkUploadCsvVersion = {
V1 : 1,
V2 : 2,
V3 : 3,
};

module.exports.CaptionAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

module.exports.CategoryEntryStatus = {
PENDING : 1,
ACTIVE : 2,
DELETED : 3,
REJECTED : 4,
};

module.exports.CategoryStatus = {
UPDATING : 1,
ACTIVE : 2,
DELETED : 3,
PURGED : 4,
};

module.exports.CategoryUserPermissionLevel = {
MANAGER : 0,
MODERATOR : 1,
CONTRIBUTOR : 2,
MEMBER : 3,
NONE : 4,
};

module.exports.CategoryUserStatus = {
ACTIVE : 1,
PENDING : 2,
NOT_ACTIVE : 3,
DELETED : 4,
};

module.exports.ChinaCacheAlgorithmType = {
SHA1 : 1,
SHA256 : 2,
};

module.exports.CommercialUseType = {
NON_COMMERCIAL_USE : 0,
COMMERCIAL_USE : 1,
};

module.exports.ConfMapsStatus = {
STATUS_DISABLED : 0,
STATUS_ENABLED : 1,
};

module.exports.ConferenceRoomStatus = {
CREATED : 1,
READY : 2,
ENDED : 3,
};

module.exports.ContributionPolicyType = {
ALL : 1,
MEMBERS_WITH_CONTRIBUTION_PERMISSION : 2,
};

module.exports.ControlPanelCommandStatus = {
PENDING : 1,
HANDLED : 2,
DONE : 3,
FAILED : 4,
};

module.exports.ControlPanelCommandTargetType = {
DATA_CENTER : 1,
SCHEDULER : 2,
JOB_TYPE : 3,
JOB : 4,
BATCH : 5,
};

module.exports.ControlPanelCommandType = {
KILL : 4,
};

module.exports.CountryRestrictionType = {
RESTRICT_COUNTRY_LIST : 0,
ALLOW_COUNTRY_LIST : 1,
};

module.exports.CuePointStatus = {
READY : 1,
DELETED : 2,
HANDLED : 3,
PENDING : 4,
};

module.exports.DVRStatus = {
DISABLED : 0,
ENABLED : 1,
};

module.exports.DailymotionDistributionCaptionAction = {
UPDATE_ACTION : 1,
SUBMIT_ACTION : 2,
DELETE_ACTION : 3,
};

module.exports.DailymotionDistributionCaptionFormat = {
SRT : 1,
STL : 2,
TT : 3,
};

module.exports.DailymotionGeoBlockingMapping = {
DISABLED : 0,
ACCESS_CONTROL : 1,
METADATA : 2,
};

module.exports.DeleteFlavorsLogicType = {
KEEP_LIST_DELETE_OTHERS : 1,
DELETE_LIST : 2,
DELETE_KEEP_SMALLEST : 3,
};

module.exports.DeliveryStatus = {
ACTIVE : 0,
DELETED : 1,
STAGING_IN : 2,
STAGING_OUT : 3,
};

module.exports.DirectoryRestrictionType = {
DONT_DISPLAY : 0,
DISPLAY_WITH_LINK : 1,
};

module.exports.DistributeTrigger = {
ENTRY_READY : 1,
MODERATION_APPROVED : 2,
};

module.exports.DistributionAction = {
SUBMIT : 1,
UPDATE : 2,
DELETE : 3,
FETCH_REPORT : 4,
};

module.exports.DistributionErrorType = {
MISSING_FLAVOR : 1,
MISSING_THUMBNAIL : 2,
MISSING_METADATA : 3,
INVALID_DATA : 4,
MISSING_ASSET : 5,
CONDITION_NOT_MET : 6,
};

module.exports.DistributionFieldRequiredStatus = {
NOT_REQUIRED : 0,
REQUIRED_BY_PROVIDER : 1,
REQUIRED_BY_PARTNER : 2,
REQUIRED_FOR_AUTOMATIC_DISTRIBUTION : 3,
};

module.exports.DistributionProfileActionStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

module.exports.DistributionProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

module.exports.DistributionProtocol = {
FTP : 1,
SCP : 2,
SFTP : 3,
HTTP : 4,
HTTPS : 5,
ASPERA : 10,
};

module.exports.DistributionValidationErrorType = {
CUSTOM_ERROR : 0,
STRING_EMPTY : 1,
STRING_TOO_LONG : 2,
STRING_TOO_SHORT : 3,
INVALID_FORMAT : 4,
};

module.exports.DocumentType = {
DOCUMENT : 11,
SWF : 12,
PDF : 13,
};

module.exports.DrmLicenseExpirationPolicy = {
FIXED_DURATION : 1,
ENTRY_SCHEDULING_END : 2,
UNLIMITED : 3,
};

module.exports.DrmPolicyStatus = {
ACTIVE : 1,
DELETED : 2,
};

module.exports.DrmProfileStatus = {
ACTIVE : 1,
DELETED : 2,
};

module.exports.DropFolderContentFileHandlerMatchPolicy = {
ADD_AS_NEW : 1,
MATCH_EXISTING_OR_ADD_AS_NEW : 2,
MATCH_EXISTING_OR_KEEP_IN_FOLDER : 3,
};

module.exports.DropFolderFileDeletePolicy = {
MANUAL_DELETE : 1,
AUTO_DELETE : 2,
AUTO_DELETE_WHEN_ENTRY_IS_READY : 3,
};

module.exports.DropFolderFileStatus = {
UPLOADING : 1,
PENDING : 2,
WAITING : 3,
HANDLED : 4,
IGNORE : 5,
DELETED : 6,
PURGED : 7,
NO_MATCH : 8,
ERROR_HANDLING : 9,
ERROR_DELETING : 10,
DOWNLOADING : 11,
ERROR_DOWNLOADING : 12,
PROCESSING : 13,
PARSED : 14,
DETECTED : 15,
};

module.exports.DropFolderStatus = {
DISABLED : 0,
ENABLED : 1,
DELETED : 2,
ERROR : 3,
};

module.exports.DryRunFileType = {
LIST_RESPONSE : 1,
CSV : 2,
};

module.exports.ESearchItemType = {
EXACT_MATCH : 1,
PARTIAL : 2,
STARTS_WITH : 3,
EXISTS : 4,
RANGE : 5,
};

module.exports.ESearchOperatorType = {
AND_OP : 1,
OR_OP : 2,
NOT_OP : 3,
};

module.exports.EditorType = {
SIMPLE : 1,
ADVANCED : 2,
};

module.exports.EffectType = {
VIDEO_FADE_IN : 1,
VIDEO_FADE_OUT : 2,
};

module.exports.EmailIngestionProfileStatus = {
INACTIVE : 0,
ACTIVE : 1,
};

module.exports.EmailNotificationTemplatePriority = {
HIGH : 1,
NORMAL : 3,
LOW : 5,
};

module.exports.EntryDisplayInSearchType = {
SYSTEM : -1,
NONE : 0,
PARTNER_ONLY : 1,
KALTURA_NETWORK : 2,
};

module.exports.EntryDistributionFlag = {
NONE : 0,
SUBMIT_REQUIRED : 1,
DELETE_REQUIRED : 2,
UPDATE_REQUIRED : 3,
ENABLE_REQUIRED : 4,
DISABLE_REQUIRED : 5,
};

module.exports.EntryDistributionStatus = {
PENDING : 0,
QUEUED : 1,
READY : 2,
DELETED : 3,
SUBMITTING : 4,
UPDATING : 5,
DELETING : 6,
ERROR_SUBMITTING : 7,
ERROR_UPDATING : 8,
ERROR_DELETING : 9,
REMOVED : 10,
IMPORT_SUBMITTING : 11,
IMPORT_UPDATING : 12,
};

module.exports.EntryDistributionSunStatus = {
BEFORE_SUNRISE : 1,
AFTER_SUNRISE : 2,
AFTER_SUNSET : 3,
};

module.exports.EntryModerationStatus = {
PENDING_MODERATION : 1,
APPROVED : 2,
REJECTED : 3,
DELETED : 4,
FLAGGED_FOR_REVIEW : 5,
AUTO_APPROVED : 6,
};

module.exports.EntryServerNodeRecordingStatus = {
STOPPED : 0,
ON_GOING : 1,
DONE : 2,
DISMISSED : 3,
};

module.exports.EntryServerNodeStatus = {
ERROR : -1,
STOPPED : 0,
PLAYABLE : 1,
BROADCASTING : 2,
AUTHENTICATED : 3,
MARKED_FOR_DELETION : 4,
TASK_PENDING : 5,
TASK_QUEUED : 6,
TASK_PROCESSING : 7,
TASK_UPLOADING : 8,
TASK_FINISHED : 9,
};

module.exports.EntryVendorTaskCreationMode = {
MANUAL : 1,
AUTOMATIC : 2,
};

module.exports.EntryVendorTaskStatus = {
PENDING : 1,
READY : 2,
PROCESSING : 3,
PENDING_MODERATION : 4,
REJECTED : 5,
ERROR : 6,
ABORTED : 7,
PENDING_ENTRY_READY : 8,
SCHEDULED : 9,
};

module.exports.EventNotificationTemplateStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.FeatureStatusType = {
LOCK_CATEGORY : 1,
CATEGORY : 2,
CATEGORY_ENTRY : 3,
ENTRY : 4,
CATEGORY_USER : 5,
USER : 6,
};

module.exports.FileSyncStatus = {
ERROR : -1,
PENDING : 1,
READY : 2,
DELETED : 3,
PURGED : 4,
};

module.exports.FileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

module.exports.FlavorAssetStatus = {
ERROR : -1,
QUEUED : 0,
CONVERTING : 1,
READY : 2,
DELETED : 3,
NOT_APPLICABLE : 4,
TEMP : 5,
WAIT_FOR_CONVERT : 6,
IMPORTING : 7,
VALIDATING : 8,
EXPORTING : 9,
};

module.exports.FlavorReadyBehaviorType = {
NO_IMPACT : 0,
INHERIT_FLAVOR_PARAMS : 0,
REQUIRED : 1,
OPTIONAL : 2,
};

module.exports.Gender = {
UNKNOWN : 0,
MALE : 1,
FEMALE : 2,
};

module.exports.GenericDistributionProviderParser = {
XSL : 1,
XPATH : 2,
REGEX : 3,
};

module.exports.GenericDistributionProviderStatus = {
ACTIVE : 2,
DELETED : 3,
};

module.exports.GroupProcessStatus = {
NONE : 0,
PROCESSING : 1,
};

module.exports.GroupUserCreationMode = {
MANUAL : 1,
AUTOMATIC : 2,
};

module.exports.GroupUserRole = {
MEMBER : 1,
MANAGER : 2,
};

module.exports.GroupUserStatus = {
ACTIVE : 0,
DELETED : 1,
};

module.exports.HandleParticipantsMode = {
ADD_AS_CO_PUBLISHERS : 0,
ADD_AS_CO_VIEWERS : 1,
IGNORE : 2,
};

module.exports.HttpNotificationAuthenticationMethod = {
ANYSAFE : -18,
ANY : -17,
BASIC : 1,
DIGEST : 2,
GSSNEGOTIATE : 4,
NTLM : 8,
};

module.exports.HttpNotificationMethod = {
GET : 1,
POST : 2,
PUT : 3,
DELETE : 4,
};

module.exports.HttpNotificationSslVersion = {
V2 : 2,
V3 : 3,
};

module.exports.InheritanceType = {
INHERIT : 1,
MANUAL : 2,
};

module.exports.IpAddressRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

module.exports.LicenseType = {
UNKNOWN : -1,
NONE : 0,
COPYRIGHTED : 1,
PUBLIC_DOMAIN : 2,
CREATIVECOMMONS_ATTRIBUTION : 3,
CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE : 4,
CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES : 5,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL : 6,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE : 7,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES : 8,
GFDL : 9,
GPL : 10,
AFFERO_GPL : 11,
LGPL : 12,
BSD : 13,
APACHE : 14,
MOZILLA : 15,
};

module.exports.LimitFlavorsRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

module.exports.LivePublishStatus = {
DISABLED : 0,
ENABLED : 1,
};

module.exports.LiveReportExportType = {
PARTNER_TOTAL_ALL : 1,
PARTNER_TOTAL_LIVE : 2,
ENTRY_TIME_LINE_ALL : 11,
ENTRY_TIME_LINE_LIVE : 12,
LOCATION_ALL : 21,
LOCATION_LIVE : 22,
SYNDICATION_ALL : 31,
SYNDICATION_LIVE : 32,
};

module.exports.LiveStatsEventType = {
LIVE : 1,
DVR : 2,
};

module.exports.LiveStreamBroadcastStatus = {
OFFLINE : 1,
PREVIEW : 2,
LIVE : 3,
};

module.exports.MailJobStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
QUEUED : 4,
};

module.exports.MediaType = {
VIDEO : 1,
IMAGE : 2,
AUDIO : 5,
LIVE_STREAM_FLASH : 201,
LIVE_STREAM_WINDOWS_MEDIA : 202,
LIVE_STREAM_REAL_MEDIA : 203,
LIVE_STREAM_QUICKTIME : 204,
};

module.exports.MetadataProfileCreateMode = {
API : 1,
KMC : 2,
APP : 3,
};

module.exports.MetadataProfileStatus = {
ACTIVE : 1,
DEPRECATED : 2,
TRANSFORMING : 3,
};

module.exports.MetadataStatus = {
VALID : 1,
INVALID : 2,
DELETED : 3,
};

module.exports.ModerationFlagType = {
SEXUAL_CONTENT : 1,
VIOLENT_REPULSIVE : 2,
HARMFUL_DANGEROUS : 3,
SPAM_COMMERCIALS : 4,
COPYRIGHT : 5,
TERMS_OF_USE_VIOLATION : 6,
};

module.exports.MrssExtensionMode = {
APPEND : 1,
REPLACE : 2,
};

module.exports.NotificationObjectType = {
ENTRY : 1,
KSHOW : 2,
USER : 3,
BATCH_JOB : 4,
};

module.exports.NotificationStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
SHOULD_RESEND : 4,
ERROR_RESENDING : 5,
SENT_SYNCH : 6,
QUEUED : 7,
};

module.exports.NotificationType = {
ENTRY_ADD : 1,
ENTR_UPDATE_PERMISSIONS : 2,
ENTRY_DELETE : 3,
ENTRY_BLOCK : 4,
ENTRY_UPDATE : 5,
ENTRY_UPDATE_THUMBNAIL : 6,
ENTRY_UPDATE_MODERATION : 7,
USER_ADD : 21,
USER_BANNED : 26,
};

module.exports.NullableBoolean = {
NULL_VALUE : -1,
FALSE_VALUE : 0,
TRUE_VALUE : 1,
};

module.exports.PartnerAuthenticationType = {
PASSWORD_ONLY : 0,
TWO_FACTOR_AUTH : 1,
SSO : 2,
};

module.exports.PartnerGroupType = {
PUBLISHER : 1,
VAR_GROUP : 2,
GROUP : 3,
TEMPLATE : 4,
};

module.exports.PartnerStatus = {
DELETED : 0,
ACTIVE : 1,
BLOCKED : 2,
FULL_BLOCK : 3,
READ_ONLY : 4,
};

module.exports.PartnerType = {
KMC : 1,
WIKI : 100,
WORDPRESS : 101,
DRUPAL : 102,
DEKIWIKI : 103,
MOODLE : 104,
COMMUNITY_EDITION : 105,
JOOMLA : 106,
BLACKBOARD : 107,
SAKAI : 108,
ADMIN_CONSOLE : 109,
};

module.exports.PermissionStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

module.exports.PermissionType = {
NORMAL : 1,
SPECIAL_FEATURE : 2,
PLUGIN : 3,
PARTNER_GROUP : 4,
};

module.exports.PlayReadyAnalogVideoOPL = {
MIN_100 : 100,
MIN_150 : 150,
MIN_200 : 200,
};

module.exports.PlayReadyCompressedDigitalVideoOPL = {
MIN_400 : 400,
MIN_500 : 500,
};

module.exports.PlayReadyDigitalAudioOPL = {
MIN_100 : 100,
MIN_150 : 150,
MIN_200 : 200,
MIN_250 : 250,
MIN_300 : 300,
};

module.exports.PlayReadyLicenseRemovalPolicy = {
FIXED_FROM_EXPIRATION : 1,
ENTRY_SCHEDULING_END : 2,
NONE : 3,
};

module.exports.PlayReadyMinimumLicenseSecurityLevel = {
NON_COMMERCIAL_QUALITY : 150,
COMMERCIAL_QUALITY : 2000,
};

module.exports.PlayReadyUncompressedDigitalVideoOPL = {
MIN_100 : 100,
MIN_250 : 250,
MIN_270 : 270,
MIN_300 : 300,
};

module.exports.PlaylistType = {
STATIC_LIST : 3,
DYNAMIC : 10,
EXTERNAL : 101,
PATH : 102,
};

module.exports.PrivacyType = {
ALL : 1,
AUTHENTICATED_USERS : 2,
MEMBERS_ONLY : 3,
};

module.exports.QuestionType = {
MULTIPLE_CHOICE_ANSWER : 1,
TRUE_FALSE : 2,
REFLECTION_POINT : 3,
MULTIPLE_ANSWER_QUESTION : 4,
FILL_IN_BLANK : 5,
HOT_SPOT : 6,
GO_TO : 7,
OPEN_QUESTION : 8,
};

module.exports.QuizOutputType = {
PDF : 1,
};

module.exports.ReachProfileContentDeletionPolicy = {
DO_NOTHING : 1,
DELETE_ONCE_PROCESSED : 2,
DELETE_AFTER_WEEK : 3,
DELETE_AFTER_MONTH : 4,
DELETE_AFTER_THREE_MONTHS : 5,
};

module.exports.ReachProfileStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.ReachProfileType = {
FREE_TRIAL : 1,
PAID : 2,
};

module.exports.RecordStatus = {
DISABLED : 0,
APPENDED : 1,
PER_SESSION : 2,
};

module.exports.RecordingStatus = {
STOPPED : 0,
PAUSED : 1,
ACTIVE : 2,
DISABLED : 3,
};

module.exports.ReportExportItemType = {
TABLE : 1,
TOTAL : 2,
GRAPH : 3,
};

module.exports.ResponseProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

module.exports.ResponseProfileType = {
INCLUDE_FIELDS : 1,
EXCLUDE_FIELDS : 2,
};

module.exports.ResponseType = {
RESPONSE_TYPE_JSON : 1,
RESPONSE_TYPE_XML : 2,
RESPONSE_TYPE_PHP : 3,
RESPONSE_TYPE_PHP_ARRAY : 4,
RESPONSE_TYPE_HTML : 7,
RESPONSE_TYPE_MRSS : 8,
RESPONSE_TYPE_JSONP : 9,
};

module.exports.ScheduleEventClassificationType = {
PUBLIC_EVENT : 1,
PRIVATE_EVENT : 2,
CONFIDENTIAL_EVENT : 3,
};

module.exports.ScheduleEventConflictType = {
RESOURCE_CONFLICT : 1,
BLACKOUT_CONFLICT : 2,
BOTH : 3,
};

module.exports.ScheduleEventRecurrenceType = {
NONE : 0,
RECURRING : 1,
RECURRENCE : 2,
};

module.exports.ScheduleEventStatus = {
CANCELLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.ScheduleEventType = {
RECORD : 1,
LIVE_STREAM : 2,
BLACKOUT : 3,
MEETING : 4,
LIVE_REDIRECT : 5,
VOD : 6,
};

module.exports.ScheduleResourceStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.ScheduledTaskAddOrRemoveType = {
ADD : 1,
REMOVE : 2,
MOVE : 3,
};

module.exports.ScheduledTaskProfileStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
SUSPENDED : 4,
DRY_RUN_ONLY : 5,
};

module.exports.SchedulerStatusType = {
RUNNING_BATCHES_COUNT : 1,
RUNNING_BATCHES_CPU : 2,
RUNNING_BATCHES_MEMORY : 3,
RUNNING_BATCHES_NETWORK : 4,
RUNNING_BATCHES_DISC_IO : 5,
RUNNING_BATCHES_DISC_SPACE : 6,
RUNNING_BATCHES_IS_RUNNING : 7,
RUNNING_BATCHES_LAST_EXECUTION_TIME : 8,
};

module.exports.ScoreType = {
HIGHEST : 1,
LOWEST : 2,
LATEST : 3,
FIRST : 4,
AVERAGE : 5,
};

module.exports.SearchOperatorType = {
SEARCH_AND : 1,
SEARCH_OR : 2,
};

module.exports.SearchProviderType = {
FLICKR : 3,
YOUTUBE : 4,
MYSPACE : 7,
PHOTOBUCKET : 8,
JAMENDO : 9,
CCMIXTER : 10,
NYPL : 11,
CURRENT : 12,
MEDIA_COMMONS : 13,
KALTURA : 20,
KALTURA_USER_CLIPS : 21,
ARCHIVE_ORG : 22,
KALTURA_PARTNER : 23,
METACAFE : 24,
SEARCH_PROXY : 28,
PARTNER_SPECIFIC : 100,
};

module.exports.ServerNodeStatus = {
ACTIVE : 1,
DISABLED : 2,
DELETED : 3,
NOT_REGISTERED : 4,
NOT_OPERATIONAL : 5,
};

module.exports.SessionType = {
USER : 0,
ADMIN : 2,
};

module.exports.ShortLinkStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

module.exports.SipSourceType = {
PICTURE_IN_PICTURE : 1,
TALKING_HEADS : 2,
SCREEN_SHARE : 3,
};

module.exports.SiteRestrictionType = {
RESTRICT_SITE_LIST : 0,
ALLOW_SITE_LIST : 1,
};

module.exports.SsoStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.StatsEventType = {
WIDGET_LOADED : 1,
MEDIA_LOADED : 2,
PLAY : 3,
PLAY_REACHED_25 : 4,
PLAY_REACHED_50 : 5,
PLAY_REACHED_75 : 6,
PLAY_REACHED_100 : 7,
OPEN_EDIT : 8,
OPEN_VIRAL : 9,
OPEN_DOWNLOAD : 10,
OPEN_REPORT : 11,
BUFFER_START : 12,
BUFFER_END : 13,
OPEN_FULL_SCREEN : 14,
CLOSE_FULL_SCREEN : 15,
REPLAY : 16,
SEEK : 17,
OPEN_UPLOAD : 18,
SAVE_PUBLISH : 19,
CLOSE_EDITOR : 20,
PRE_BUMPER_PLAYED : 21,
POST_BUMPER_PLAYED : 22,
BUMPER_CLICKED : 23,
PREROLL_STARTED : 24,
MIDROLL_STARTED : 25,
POSTROLL_STARTED : 26,
OVERLAY_STARTED : 27,
PREROLL_CLICKED : 28,
MIDROLL_CLICKED : 29,
POSTROLL_CLICKED : 30,
OVERLAY_CLICKED : 31,
PREROLL_25 : 32,
PREROLL_50 : 33,
PREROLL_75 : 34,
MIDROLL_25 : 35,
MIDROLL_50 : 36,
MIDROLL_75 : 37,
POSTROLL_25 : 38,
POSTROLL_50 : 39,
POSTROLL_75 : 40,
};

module.exports.StatsFeatureType = {
NONE : 0,
RELATED : 1,
};

module.exports.StatsKmcEventType = {
CONTENT_PAGE_VIEW : 1001,
CONTENT_ADD_PLAYLIST : 1010,
CONTENT_EDIT_PLAYLIST : 1011,
CONTENT_DELETE_PLAYLIST : 1012,
CONTENT_EDIT_ENTRY : 1013,
CONTENT_CHANGE_THUMBNAIL : 1014,
CONTENT_ADD_TAGS : 1015,
CONTENT_REMOVE_TAGS : 1016,
CONTENT_ADD_ADMIN_TAGS : 1017,
CONTENT_REMOVE_ADMIN_TAGS : 1018,
CONTENT_DOWNLOAD : 1019,
CONTENT_APPROVE_MODERATION : 1020,
CONTENT_REJECT_MODERATION : 1021,
CONTENT_BULK_UPLOAD : 1022,
CONTENT_ADMIN_KCW_UPLOAD : 1023,
ACCOUNT_CHANGE_PARTNER_INFO : 1030,
ACCOUNT_CHANGE_LOGIN_INFO : 1031,
ACCOUNT_CONTACT_US_USAGE : 1032,
ACCOUNT_UPDATE_SERVER_SETTINGS : 1033,
ACCOUNT_ACCOUNT_OVERVIEW : 1034,
ACCOUNT_ACCESS_CONTROL : 1035,
ACCOUNT_TRANSCODING_SETTINGS : 1036,
ACCOUNT_ACCOUNT_UPGRADE : 1037,
ACCOUNT_SAVE_SERVER_SETTINGS : 1038,
ACCOUNT_ACCESS_CONTROL_DELETE : 1039,
ACCOUNT_SAVE_TRANSCODING_SETTINGS : 1040,
LOGIN : 1041,
DASHBOARD_IMPORT_CONTENT : 1042,
DASHBOARD_UPDATE_CONTENT : 1043,
DASHBOARD_ACCOUNT_CONTACT_US : 1044,
DASHBOARD_VIEW_REPORTS : 1045,
DASHBOARD_EMBED_PLAYER : 1046,
DASHBOARD_EMBED_PLAYLIST : 1047,
DASHBOARD_CUSTOMIZE_PLAYERS : 1048,
APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO : 1050,
APP_STUDIO_NEW_PLAYER_PLAYLIST : 1051,
APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST : 1052,
APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO : 1053,
APP_STUDIO_EDIT_PLAYER_PLAYLIST : 1054,
APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST : 1055,
APP_STUDIO_DUPLICATE_PLAYER : 1056,
CONTENT_CONTENT_GO_TO_PAGE : 1057,
CONTENT_DELETE_ITEM : 1058,
CONTENT_DELETE_MIX : 1059,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB : 1070,
REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB : 1071,
REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB : 1072,
REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS : 1073,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS : 1074,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS : 1075,
REPORTS_AND_ANALYTICS_TOP_CONTENT : 1076,
REPORTS_AND_ANALYTICS_CONTENT_DROPOFF : 1077,
REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS : 1078,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS : 1079,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN : 1080,
REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION : 1081,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN : 1082,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF : 1083,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN : 1084,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN : 1085,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY : 1086,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY : 1087,
CONTENT_ENTRY_DRILLDOWN : 1088,
CONTENT_OPEN_PREVIEW_AND_EMBED : 1089,
};

module.exports.StorageProfileDeliveryStatus = {
ACTIVE : 1,
BLOCKED : 2,
};

module.exports.StorageProfileReadyBehavior = {
NO_IMPACT : 0,
REQUIRED : 1,
};

module.exports.StorageProfileStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

module.exports.SyndicationFeedStatus = {
DELETED : -1,
ACTIVE : 1,
};

module.exports.SyndicationFeedType = {
GOOGLE_VIDEO : 1,
YAHOO : 2,
ITUNES : 3,
TUBE_MOGUL : 4,
KALTURA : 5,
KALTURA_XSLT : 6,
ROKU_DIRECT_PUBLISHER : 7,
OPERA_TV_SNAP : 8,
};

module.exports.ThumbAssetStatus = {
ERROR : -1,
QUEUED : 0,
CAPTURING : 1,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

module.exports.ThumbCropType = {
RESIZE : 1,
RESIZE_WITH_PADDING : 2,
CROP : 3,
CROP_FROM_TOP : 4,
RESIZE_WITH_FORCE : 5,
};

module.exports.ThumbCuePointSubType = {
SLIDE : 1,
CHAPTER : 2,
};

module.exports.TrackEntryEventType = {
UPLOADED_FILE : 1,
WEBCAM_COMPLETED : 2,
IMPORT_STARTED : 3,
ADD_ENTRY : 4,
UPDATE_ENTRY : 5,
DELETED_ENTRY : 6,
};

module.exports.TwoFactorAuthenticationMode = {
ALL : 0,
ADMIN_USERS_ONLY : 1,
NON_ADMIN_USERS_ONLY : 2,
};

module.exports.UiConfCreationMode = {
WIZARD : 2,
ADVANCED : 3,
SYSTEM : 4,
};

module.exports.UiConfObjType = {
PLAYER : 1,
CONTRIBUTION_WIZARD : 2,
SIMPLE_EDITOR : 3,
ADVANCED_EDITOR : 4,
PLAYLIST : 5,
APP_STUDIO : 6,
KRECORD : 7,
PLAYER_V3 : 8,
KMC_ACCOUNT : 9,
KMC_ANALYTICS : 10,
KMC_CONTENT : 11,
KMC_DASHBOARD : 12,
KMC_LOGIN : 13,
PLAYER_SL : 14,
CLIENTSIDE_ENCODER : 15,
KMC_GENERAL : 16,
KMC_ROLES_AND_PERMISSIONS : 17,
CLIPPER : 18,
KSR : 19,
KUPLOAD : 20,
WEBCASTING : 21,
};

module.exports.UpdateMethodType = {
MANUAL : 0,
AUTOMATIC : 1,
};

module.exports.UploadErrorCode = {
NO_ERROR : 0,
GENERAL_ERROR : 1,
PARTIAL_UPLOAD : 2,
};

module.exports.UploadTokenStatus = {
PENDING : 0,
PARTIAL_UPLOAD : 1,
FULL_UPLOAD : 2,
CLOSED : 3,
TIMED_OUT : 4,
DELETED : 5,
};

module.exports.UserAgentRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

module.exports.UserJoinPolicyType = {
AUTO_JOIN : 1,
REQUEST_TO_JOIN : 2,
NOT_ALLOWED : 3,
};

module.exports.UserMode = {
NONE : 0,
PROTECTED_USER : 1,
};

module.exports.UserRoleStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

module.exports.UserStatus = {
BLOCKED : 0,
ACTIVE : 1,
DELETED : 2,
};

module.exports.UserType = {
USER : 0,
GROUP : 1,
};

module.exports.VendorCatalogItemOutputFormat = {
SRT : 1,
DFXP : 2,
VTT : 3,
};

module.exports.VendorCatalogItemStatus = {
DEPRECATED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.VendorIntegrationStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

module.exports.VendorServiceFeature = {
CAPTIONS : 1,
TRANSLATION : 2,
ALIGNMENT : 3,
AUDIO_DESCRIPTION : 4,
CHAPTERING : 5,
INTELLIGENT_TAGGING : 6,
DUBBING : 7,
LIVE_CAPTION : 8,
EXTENDED_AUDIO_DESCRIPTION : 9,
};

module.exports.VendorServiceTurnAroundTime = {
BEST_EFFORT : -1,
IMMEDIATE : 0,
ONE_BUSINESS_DAY : 1,
TWO_BUSINESS_DAYS : 2,
THREE_BUSINESS_DAYS : 3,
FOUR_BUSINESS_DAYS : 4,
FIVE_BUSINESS_DAYS : 5,
SIX_BUSINESS_DAYS : 6,
SEVEN_BUSINESS_DAYS : 7,
THIRTY_MINUTES : 1800,
TWO_HOURS : 7200,
THREE_HOURS : 10800,
SIX_HOURS : 21600,
EIGHT_HOURS : 28800,
TWELVE_HOURS : 43200,
TWENTY_FOUR_HOURS : 86400,
FORTY_EIGHT_HOURS : 172800,
FOUR_DAYS : 345600,
FIVE_DAYS : 432000,
TEN_DAYS : 864000,
};

module.exports.VendorServiceType = {
HUMAN : 1,
MACHINE : 2,
};

module.exports.VendorTaskProcessingRegion = {
US : 1,
EU : 2,
};

module.exports.ViewMode = {
PREVIEW : 0,
ALLOW_ALL : 1,
};

module.exports.VirusFoundAction = {
NONE : 0,
DELETE : 1,
CLEAN_NONE : 2,
CLEAN_DELETE : 3,
};

module.exports.VirusScanJobResult = {
SCAN_ERROR : 1,
FILE_IS_CLEAN : 2,
FILE_WAS_CLEANED : 3,
FILE_INFECTED : 4,
};

module.exports.VirusScanProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

module.exports.WidevineRepositorySyncMode = {
MODIFY : 0,
};

module.exports.WidgetSecurityType = {
NONE : 1,
TIMEHASH : 2,
};

module.exports.YahooDistributionProcessFeedActionStatus = {
MANUAL : 0,
AUTOMATIC : 1,
};

module.exports.YouTubeApiDistributionCaptionAction = {
UPDATE_ACTION : 1,
SUBMIT_ACTION : 2,
DELETE_ACTION : 3,
};

module.exports.ZoomGroupParticipationType = {
NO_CLASSIFICATION : 0,
OPT_IN : 1,
OPT_OUT : 2,
};

module.exports.ZoomUsersMatching = {
DO_NOT_MODIFY : 0,
ADD_POSTFIX : 1,
REMOVE_POSTFIX : 2,
CMS_MATCHING : 3,
};

module.exports.AccessControlOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.AccessControlProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ActivitiBusinessProcessServerOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ActivitiBusinessProcessServerProtocol = {
HTTP : 'http',
HTTPS : 'https',
};

module.exports.AdCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AdProtocolType = {
CUSTOM : '0',
VAST : '1',
VAST_2_0 : '2',
VPAID : '3',
};

module.exports.AdType = {
VIDEO : '1',
OVERLAY : '2',
};

module.exports.AdminUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AkamaiUniversalStreamType = {
HD_IPHONE_IPAD_LIVE : 'HD iPhone/iPad Live',
UNIVERSAL_STREAMING_LIVE : 'Universal Streaming Live',
};

module.exports.AmazonS3StorageProfileFilesPermissionLevel = {
ACL_AUTHENTICATED_READ : 'authenticated-read',
ACL_PRIVATE : 'private',
ACL_PUBLIC_READ : 'public-read',
ACL_PUBLIC_READ_WRITE : 'public-read-write',
};

module.exports.AmazonS3StorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AnnotationOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AnswerCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ApiActionPermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ApiParameterPermissionItemAction = {
USAGE : 'all',
INSERT : 'insert',
READ : 'read',
UPDATE : 'update',
};

module.exports.ApiParameterPermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AppTokenHashType = {
MD5 : 'MD5',
SHA1 : 'SHA1',
SHA256 : 'SHA256',
SHA512 : 'SHA512',
};

module.exports.AppTokenOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AssetParamsOrderBy = {
};

module.exports.AssetParamsOutputOrderBy = {
};

module.exports.AssetType = {
ATTACHMENT : 'attachment.Attachment',
CAPTION : 'caption.Caption',
DOCUMENT : 'document.Document',
IMAGE : 'document.Image',
PDF : 'document.PDF',
SWF : 'document.SWF',
TIMED_THUMB_ASSET : 'thumbCuePoint.timedThumb',
TRANSCRIPT : 'transcript.Transcript',
WIDEVINE_FLAVOR : 'widevine.WidevineFlavor',
FLAVOR : '1',
THUMBNAIL : '2',
LIVE : '3',
};

module.exports.AttachmentAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AttachmentType = {
TEXT : '1',
MEDIA : '2',
DOCUMENT : '3',
JSON : '4',
};

module.exports.AudioCodec = {
NONE : '',
AAC : 'aac',
AACHE : 'aache',
AC3 : 'ac3',
AMRNB : 'amrnb',
COPY : 'copy',
EAC3 : 'eac3',
MP3 : 'mp3',
MPEG2 : 'mpeg2',
PCM : 'pcm',
VORBIS : 'vorbis',
WMA : 'wma',
WMAPRO : 'wmapro',
};

module.exports.AuditTrailAction = {
CHANGED : 'CHANGED',
CONTENT_VIEWED : 'CONTENT_VIEWED',
COPIED : 'COPIED',
CREATED : 'CREATED',
DELETED : 'DELETED',
FILE_SYNC_CREATED : 'FILE_SYNC_CREATED',
RELATION_ADDED : 'RELATION_ADDED',
RELATION_REMOVED : 'RELATION_REMOVED',
VIEWED : 'VIEWED',
};

module.exports.AuditTrailObjectType = {
BATCH_JOB : 'BatchJob',
EMAIL_INGESTION_PROFILE : 'EmailIngestionProfile',
FILE_SYNC : 'FileSync',
KSHOW_KUSER : 'KshowKuser',
METADATA : 'Metadata',
METADATA_PROFILE : 'MetadataProfile',
PARTNER : 'Partner',
PERMISSION : 'Permission',
REACH_PROFILE : 'ReachProfile',
UPLOAD_TOKEN : 'UploadToken',
USER_LOGIN_DATA : 'UserLoginData',
USER_ROLE : 'UserRole',
ACCESS_CONTROL : 'accessControl',
CATEGORY : 'category',
CATEGORY_ENTRY : 'categoryEntry',
CONVERSION_PROFILE_2 : 'conversionProfile2',
ENTRY : 'entry',
FLAVOR_ASSET : 'flavorAsset',
FLAVOR_PARAMS : 'flavorParams',
FLAVOR_PARAMS_CONVERSION_PROFILE : 'flavorParamsConversionProfile',
FLAVOR_PARAMS_OUTPUT : 'flavorParamsOutput',
KSHOW : 'kshow',
KUSER : 'kuser',
MEDIA_INFO : 'mediaInfo',
MODERATION : 'moderation',
ROUGHCUT : 'roughcutEntry',
SYNDICATION : 'syndicationFeed',
THUMBNAIL_ASSET : 'thumbAsset',
THUMBNAIL_PARAMS : 'thumbParams',
THUMBNAIL_PARAMS_OUTPUT : 'thumbParamsOutput',
UI_CONF : 'uiConf',
WIDGET : 'widget',
};

module.exports.AuditTrailOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARSED_AT_ASC : '+parsedAt',
CREATED_AT_DESC : '-createdAt',
PARSED_AT_DESC : '-parsedAt',
};

module.exports.AvnDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.AvnDistributionProviderOrderBy = {
};

module.exports.BaseEntryCloneOptions = {
AD_CUE_POINTS : 'adCuePoint.AD_CUE_POINTS',
ANNOTATION_CUE_POINTS : 'annotation.ANNOTATION_CUE_POINTS',
CODE_CUE_POINTS : 'codeCuePoint.CODE_CUE_POINTS',
THUMB_CUE_POINTS : 'thumbCuePoint.THUMB_CUE_POINTS',
USERS : '1',
CATEGORIES : '2',
CHILD_ENTRIES : '3',
ACCESS_CONTROL : '4',
METADATA : '5',
FLAVORS : '6',
CAPTIONS : '7',
};

module.exports.BaseEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

module.exports.BaseEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.BaseEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

module.exports.BaseSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BaseUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BatchJobObjectType = {
ENTRY_DISTRIBUTION : 'contentDistribution.EntryDistribution',
DROP_FOLDER_FILE : 'dropFolderXmlBulkUpload.DropFolderFile',
METADATA : 'metadata.Metadata',
METADATA_PROFILE : 'metadata.MetadataProfile',
SCHEDULED_TASK_PROFILE : 'scheduledTask.ScheduledTaskProfile',
ENTRY : '1',
CATEGORY : '2',
FILE_SYNC : '3',
ASSET : '4',
};

module.exports.BatchJobOrderBy = {
CREATED_AT_ASC : '+createdAt',
ESTIMATED_EFFORT_ASC : '+estimatedEffort',
EXECUTION_ATTEMPTS_ASC : '+executionAttempts',
FINISH_TIME_ASC : '+finishTime',
LOCK_VERSION_ASC : '+lockVersion',
PRIORITY_ASC : '+priority',
QUEUE_TIME_ASC : '+queueTime',
STATUS_ASC : '+status',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ESTIMATED_EFFORT_DESC : '-estimatedEffort',
EXECUTION_ATTEMPTS_DESC : '-executionAttempts',
FINISH_TIME_DESC : '-finishTime',
LOCK_VERSION_DESC : '-lockVersion',
PRIORITY_DESC : '-priority',
QUEUE_TIME_DESC : '-queueTime',
STATUS_DESC : '-status',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BatchJobType = {
CONVERT : '0',
CONVERT_CAPTION_ASSET : 'caption.convertcaptionasset',
PARSE_MULTI_LANGUAGE_CAPTION_ASSET : 'caption.parsemultilanguagecaptionasset',
PARSE_CAPTION_ASSET : 'captionSearch.parseCaptionAsset',
DISTRIBUTION_DELETE : 'contentDistribution.DistributionDelete',
DISTRIBUTION_DISABLE : 'contentDistribution.DistributionDisable',
DISTRIBUTION_ENABLE : 'contentDistribution.DistributionEnable',
DISTRIBUTION_FETCH_REPORT : 'contentDistribution.DistributionFetchReport',
DISTRIBUTION_SUBMIT : 'contentDistribution.DistributionSubmit',
DISTRIBUTION_SYNC : 'contentDistribution.DistributionSync',
DISTRIBUTION_UPDATE : 'contentDistribution.DistributionUpdate',
DROP_FOLDER_CONTENT_PROCESSOR : 'dropFolder.DropFolderContentProcessor',
DROP_FOLDER_WATCHER : 'dropFolder.DropFolderWatcher',
EVENT_NOTIFICATION_HANDLER : 'eventNotification.EventNotificationHandler',
INTEGRATION : 'integration.Integration',
ENTRY_VENDOR_TASK_CSV : 'reach.EntryVendorTasksCsv',
SYNC_REACH_CREDIT_TASK : 'reach.SyncReachCreditTask',
SCHEDULED_TASK : 'scheduledTask.ScheduledTask',
INDEX_TAGS : 'tagSearch.IndexTagsByPrivacyContext',
TAG_RESOLVE : 'tagSearch.TagResolve',
VIRUS_SCAN : 'virusScan.VirusScan',
WIDEVINE_REPOSITORY_SYNC : 'widevine.WidevineRepositorySync',
IMPORT : '1',
DELETE : '2',
FLATTEN : '3',
BULKUPLOAD : '4',
DVDCREATOR : '5',
DOWNLOAD : '6',
OOCONVERT : '7',
CONVERT_PROFILE : '10',
POSTCONVERT : '11',
EXTRACT_MEDIA : '14',
MAIL : '15',
NOTIFICATION : '16',
CLEANUP : '17',
SCHEDULER_HELPER : '18',
BULKDOWNLOAD : '19',
DB_CLEANUP : '20',
PROVISION_PROVIDE : '21',
CONVERT_COLLECTION : '22',
STORAGE_EXPORT : '23',
PROVISION_DELETE : '24',
STORAGE_DELETE : '25',
EMAIL_INGESTION : '26',
METADATA_IMPORT : '27',
METADATA_TRANSFORM : '28',
FILESYNC_IMPORT : '29',
CAPTURE_THUMB : '30',
DELETE_FILE : '31',
INDEX : '32',
MOVE_CATEGORY_ENTRIES : '33',
COPY : '34',
CONCAT : '35',
CONVERT_LIVE_SEGMENT : '36',
COPY_PARTNER : '37',
VALIDATE_LIVE_MEDIA_SERVERS : '38',
SYNC_CATEGORY_PRIVACY_CONTEXT : '39',
LIVE_REPORT_EXPORT : '40',
RECALCULATE_CACHE : '41',
LIVE_TO_VOD : '42',
COPY_CAPTIONS : '43',
CHUNKED_ENCODE_JOB_SCHEDULER : '44',
SERVER_NODE_MONITOR : '45',
USERS_CSV : '46',
CLIP_CONCAT : '47',
COPY_CUE_POINTS : '48',
EXPORT_CSV : '49',
REPORT_EXPORT : '50',
LIVE_ENTRY_ARCHIVE : '51',
STORAGE_UPDATE : '52',
STORAGE_PERIODIC_EXPORT : '53',
STORAGE_PERIODIC_PURGE : '54',
STORAGE_PERIODIC_DELETE_LOCAL : '55',
REACH_JOB_CLEANER : '56',
};

module.exports.BeaconIndexType = {
LOG : 'Log',
STATE : 'State',
};

module.exports.BeaconObjectTypes = {
SCHEDULE_RESOURCE_BEACON : '1',
ENTRY_SERVER_NODE_BEACON : '2',
SERVER_NODE_BEACON : '3',
ENTRY_BEACON : '4',
};

module.exports.BeaconOrderBy = {
OBJECT_ID_ASC : '+objectId',
UPDATED_AT_ASC : '+updatedAt',
OBJECT_ID_DESC : '-objectId',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BeaconScheduledResourceFieldName = {
EVENT_TYPE : 'event_type',
IS_LOG : 'is_log',
OBJECT_ID : 'object_id',
RECORDING : 'recording',
RESOURCE_NAME : 'resource_name',
STATUS : 'status',
UPDATED_AT : 'updated_at',
};

module.exports.BeaconScheduledResourceOrderByFieldName = {
STATUS : 'app_status',
RECORDING : 'recording_phase',
RESOURCE_NAME : 'resource_Name',
UPDATED_AT : 'updated_at',
};

module.exports.BulkUploadAction = {
CANCEL : 'scheduleBulkUpload.CANCEL',
ADD : '1',
UPDATE : '2',
DELETE : '3',
REPLACE : '4',
TRANSFORM_XSLT : '5',
ADD_OR_UPDATE : '6',
ACTIVATE : '7',
REJECT : '8',
UPDATE_STATUS : '9',
};

module.exports.BulkUploadObjectType = {
JOB : 'bulkUploadFilter.JOB',
SCHEDULE_EVENT : 'scheduleBulkUpload.SCHEDULE_EVENT',
SCHEDULE_RESOURCE : 'scheduleBulkUpload.SCHEDULE_RESOURCE',
ENTRY : '1',
CATEGORY : '2',
USER : '3',
CATEGORY_USER : '4',
CATEGORY_ENTRY : '5',
USER_ENTRY : '6',
VENDOR_CATALOG_ITEM : '7',
};

module.exports.BulkUploadOrderBy = {
};

module.exports.BulkUploadResultStatus = {
ERROR : '1',
OK : '2',
IN_PROGRESS : '3',
};

module.exports.BulkUploadType = {
CSV : 'bulkUploadCsv.CSV',
FILTER : 'bulkUploadFilter.FILTER',
XML : 'bulkUploadXml.XML',
DROP_FOLDER_XML : 'dropFolderXmlBulkUpload.DROP_FOLDER_XML',
ICAL : 'scheduleBulkUpload.ICAL',
DROP_FOLDER_ICAL : 'scheduleDropFolder.DROP_FOLDER_ICAL',
};

module.exports.BusinessProcessAbortNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BusinessProcessNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BusinessProcessProvider = {
ACTIVITI : 'activitiBusinessProcessNotification.Activiti',
};

module.exports.BusinessProcessServerOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BusinessProcessServerStatus = {
DISABLED : '1',
ENABLED : '2',
DELETED : '3',
};

module.exports.BusinessProcessSignalNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.BusinessProcessStartNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CameraScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CaptionAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CaptionParamsOrderBy = {
};

module.exports.CaptionSource = {
UNKNOWN : '0',
ZOOM : '1',
WEBEX : '2',
};

module.exports.CaptionType = {
SRT : '1',
DFXP : '2',
WEBVTT : '3',
CAP : '4',
SCC : '5',
};

module.exports.CatalogItemLanguage = {
AR : 'Arabic',
YUE : 'Cantonese',
CA : 'Catalan',
ZH : 'Chinese',
CS : 'Czech',
DA : 'Danish',
NL : 'Dutch',
EN : 'English',
EN_US : 'English (American)',
EN_GB : 'English (British)',
FI : 'Finnish',
FR : 'French',
FR_CA : 'French (Canada)',
GD : 'Gaelic (Scottish)',
DE : 'German',
EL : 'Greek',
HE : 'Hebrew',
HI : 'Hindi',
HU : 'Hungarian',
IS : 'Icelandic',
IN : 'Indonesian',
GA : 'Irish',
IT : 'Italian',
JA : 'Japanese',
KO : 'Korean',
ML : 'Malayalam',
CMN : 'Mandarin Chinese',
NO : 'Norwegian',
PL : 'Polish',
PT : 'Portuguese',
PT_BR : 'Portuguese (Brazil)',
RO : 'Romanian',
RU : 'Russian',
ES : 'Spanish',
ES_XL : 'Spanish (Latin America)',
SV : 'Swedish',
ZH_TW : 'Taiwanese Mandarin',
TA : 'Tamil',
TH : 'Thai',
TR : 'Turkish',
UK : 'Ukrainian',
UR : 'Urdu',
VI : 'Vietnamese',
CY : 'Welsh',
ZU : 'Zulu',
};

module.exports.CategoryEntryAdvancedOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.CategoryEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.CategoryIdentifierField = {
FULL_NAME : 'fullName',
ID : 'id',
REFERENCE_ID : 'referenceId',
};

module.exports.CategoryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DEPTH_ASC : '+depth',
DIRECT_ENTRIES_COUNT_ASC : '+directEntriesCount',
DIRECT_SUB_CATEGORIES_COUNT_ASC : '+directSubCategoriesCount',
ENTRIES_COUNT_ASC : '+entriesCount',
FULL_NAME_ASC : '+fullName',
MEMBERS_COUNT_ASC : '+membersCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DEPTH_DESC : '-depth',
DIRECT_ENTRIES_COUNT_DESC : '-directEntriesCount',
DIRECT_SUB_CATEGORIES_COUNT_DESC : '-directSubCategoriesCount',
ENTRIES_COUNT_DESC : '-entriesCount',
FULL_NAME_DESC : '-fullName',
MEMBERS_COUNT_DESC : '-membersCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CategoryUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.Cielo24Fidelity = {
MECHANICAL : 'MECHANICAL',
PREMIUM : 'PREMIUM',
PROFESSIONAL : 'PROFESSIONAL',
};

module.exports.Cielo24Priority = {
PRIORITY : 'PRIORITY',
STANDARD : 'STANDARD',
};

module.exports.CloneComponentSelectorType = {
INCLUDE_COMPONENT : '0',
EXCLUDE_COMPONENT : '1',
};

module.exports.CodeCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ComcastMrssDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ComcastMrssDistributionProviderOrderBy = {
};

module.exports.ConditionType = {
EVENT_NOTIFICATION_FIELD : 'eventNotification.BooleanField',
EVENT_NOTIFICATION_OBJECT_CHANGED : 'eventNotification.ObjectChanged',
METADATA_FIELD_CHANGED : 'metadata.FieldChanged',
METADATA_FIELD_COMPARE : 'metadata.FieldCompare',
METADATA_FIELD_MATCH : 'metadata.FieldMatch',
EVENT_CATEGORY_ENTRY : 'reach.CategoryEntry',
AUTHENTICATED : '1',
COUNTRY : '2',
IP_ADDRESS : '3',
SITE : '4',
USER_AGENT : '5',
FIELD_MATCH : '6',
FIELD_COMPARE : '7',
ASSET_PROPERTIES_COMPARE : '8',
USER_ROLE : '9',
GEO_DISTANCE : '10',
OR_OPERATOR : '11',
HASH : '12',
DELIVERY_PROFILE : '13',
ACTIVE_EDGE_VALIDATE : '14',
ANONYMOUS_IP : '15',
ASSET_TYPE : '16',
BOOLEAN : '17',
HTTP_HEADER : '18',
ENTRY_SCHEDULED : '19',
ACTION_NAME : '20',
URL_AUTH_PARAMS : '21',
};

module.exports.ConfMapsSourceLocation = {
FS : 'FileSystem',
DB : 'database',
};

module.exports.ConferenceServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ConfigurableDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ContainerFormat = {
_3GP : '3gp',
APPLEHTTP : 'applehttp',
AVI : 'avi',
BIF : 'bif',
BMP : 'bmp',
COPY : 'copy',
FLV : 'flv',
HLS : 'hls',
ISMA : 'isma',
ISMV : 'ismv',
JPG : 'jpg',
M2TS : 'm2ts',
M4V : 'm4v',
MKV : 'mkv',
MOV : 'mov',
MP3 : 'mp3',
MP4 : 'mp4',
MPEG : 'mpeg',
MPEGTS : 'mpegts',
MXF : 'mxf',
OGG : 'ogg',
OGV : 'ogv',
PDF : 'pdf',
PNG : 'png',
SWF : 'swf',
WAV : 'wav',
WEBM : 'webm',
WMA : 'wma',
WMV : 'wmv',
WVM : 'wvm',
};

module.exports.ContextType = {
PLAY : '1',
DOWNLOAD : '2',
THUMBNAIL : '3',
METADATA : '4',
EXPORT : '5',
SERVE : '6',
};

module.exports.ControlPanelCommandOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ConversionProfileAssetParamsOrderBy = {
};

module.exports.ConversionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.ConversionProfileStatus = {
DISABLED : '1',
ENABLED : '2',
DELETED : '3',
};

module.exports.ConversionProfileType = {
MEDIA : '1',
LIVE_STREAM : '2',
};

module.exports.CrossKalturaDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CrossKalturaDistributionProviderOrderBy = {
};

module.exports.CuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.CuePointType = {
AD : 'adCuePoint.Ad',
ANNOTATION : 'annotation.Annotation',
CODE : 'codeCuePoint.Code',
EVENT : 'eventCuePoint.Event',
QUIZ_ANSWER : 'quiz.QUIZ_ANSWER',
QUIZ_QUESTION : 'quiz.QUIZ_QUESTION',
THUMB : 'thumbCuePoint.Thumb',
};

module.exports.DailymotionDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DailymotionDistributionProviderOrderBy = {
};

module.exports.DataEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

module.exports.DataEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.DataEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

module.exports.DeliveryProfileAkamaiAppleHttpManifestOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileAkamaiHdsOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileAkamaiHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileGenericAppleHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileGenericHdsOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileGenericHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileGenericRtmpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileGenericSilverLightOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileLiveAppleHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileRtmpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DeliveryProfileType = {
EDGE_CAST_HTTP : 'edgeCast.EDGE_CAST_HTTP',
EDGE_CAST_RTMP : 'edgeCast.EDGE_CAST_RTMP',
KONTIKI_HTTP : 'kontiki.KONTIKI_HTTP',
VELOCIX_HDS : 'velocix.VELOCIX_HDS',
VELOCIX_HLS : 'velocix.VELOCIX_HLS',
APPLE_HTTP : '1',
HDS : '3',
HTTP : '4',
RTMP : '5',
RTSP : '6',
SILVER_LIGHT : '7',
AKAMAI_HLS_DIRECT : '10',
AKAMAI_HLS_MANIFEST : '11',
AKAMAI_HD : '12',
AKAMAI_HDS : '13',
AKAMAI_HTTP : '14',
AKAMAI_RTMP : '15',
AKAMAI_RTSP : '16',
AKAMAI_SS : '17',
GENERIC_HLS : '21',
GENERIC_HDS : '23',
GENERIC_HTTP : '24',
GENERIC_HLS_MANIFEST : '25',
GENERIC_HDS_MANIFEST : '26',
GENERIC_SS : '27',
GENERIC_RTMP : '28',
LEVEL3_HLS : '31',
LEVEL3_HTTP : '34',
LEVEL3_RTMP : '35',
LIMELIGHT_HTTP : '44',
LIMELIGHT_RTMP : '45',
LOCAL_PATH_APPLE_HTTP : '51',
LOCAL_PATH_HDS : '53',
LOCAL_PATH_HTTP : '54',
LOCAL_PATH_RTMP : '55',
VOD_PACKAGER_HLS : '61',
VOD_PACKAGER_HDS : '63',
VOD_PACKAGER_MSS : '67',
VOD_PACKAGER_DASH : '68',
VOD_PACKAGER_HLS_MANIFEST : '69',
LIVE_HLS : '1001',
LIVE_HDS : '1002',
LIVE_DASH : '1003',
LIVE_RTMP : '1005',
LIVE_HLS_TO_MULTICAST : '1006',
LIVE_PACKAGER_HLS : '1007',
LIVE_PACKAGER_HDS : '1008',
LIVE_PACKAGER_DASH : '1009',
LIVE_PACKAGER_MSS : '1010',
LIVE_AKAMAI_HDS : '1013',
};

module.exports.DeliveryServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DistributionProviderOrderBy = {
};

module.exports.DistributionProviderType = {
AVN : 'avnDistribution.AVN',
COMCAST_MRSS : 'comcastMrssDistribution.COMCAST_MRSS',
CROSS_KALTURA : 'crossKalturaDistribution.CROSS_KALTURA',
DAILYMOTION : 'dailymotionDistribution.DAILYMOTION',
DOUBLECLICK : 'doubleClickDistribution.DOUBLECLICK',
FACEBOOK : 'facebookDistribution.FACEBOOK',
FREEWHEEL : 'freewheelDistribution.FREEWHEEL',
FREEWHEEL_GENERIC : 'freewheelGenericDistribution.FREEWHEEL_GENERIC',
FTP : 'ftpDistribution.FTP',
FTP_SCHEDULED : 'ftpDistribution.FTP_SCHEDULED',
HULU : 'huluDistribution.HULU',
IDETIC : 'ideticDistribution.IDETIC',
METRO_PCS : 'metroPcsDistribution.METRO_PCS',
MSN : 'msnDistribution.MSN',
PODCAST : 'podcastDistribution.PODCAST',
QUICKPLAY : 'quickPlayDistribution.QUICKPLAY',
UNICORN : 'unicornDistribution.UNICORN',
YAHOO : 'yahooDistribution.YAHOO',
YOUTUBE : 'youTubeDistribution.YOUTUBE',
YOUTUBE_API : 'youtubeApiDistribution.YOUTUBE_API',
GENERIC : '1',
SYNDICATION : '2',
};

module.exports.DocumentEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

module.exports.DocumentEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.DocumentEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

module.exports.DocumentFlavorParamsOrderBy = {
};

module.exports.DocumentFlavorParamsOutputOrderBy = {
};

module.exports.DoubleClickDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DoubleClickDistributionProviderOrderBy = {
};

module.exports.DrmLicenseScenario = {
NONE : '0',
PROTECTION : 'playReady.PROTECTION',
PURCHASE : 'playReady.PURCHASE',
RENTAL : 'playReady.RENTAL',
SUBSCRIPTION : 'playReady.SUBSCRIPTION',
};

module.exports.DrmLicenseType = {
NON_PERSISTENT : 'playReady.NON_PERSISTENT',
PERSISTENT : 'playReady.PERSISTENT',
};

module.exports.DrmPolicyOrderBy = {
};

module.exports.DrmProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

module.exports.DrmProviderType = {
FAIRPLAY : 'fairplay.FAIRPLAY',
PLAY_READY : 'playReady.PLAY_READY',
WIDEVINE : 'widevine.WIDEVINE',
CENC : '1',
};

module.exports.DrmSchemeName = {
PLAYREADY_CENC : 'drm.PLAYREADY_CENC',
WIDEVINE_CENC : 'drm.WIDEVINE_CENC',
FAIRPLAY : 'fairplay.FAIRPLAY',
PLAYREADY : 'playReady.PLAYREADY',
WIDEVINE : 'widevine.WIDEVINE',
};

module.exports.DropFolderErrorCode = {
ERROR_CONNECT : '1',
ERROR_AUTENTICATE : '2',
ERROR_GET_PHISICAL_FILE_LIST : '3',
ERROR_GET_DB_FILE_LIST : '4',
DROP_FOLDER_APP_ERROR : '5',
CONTENT_MATCH_POLICY_UNDEFINED : '6',
MISSING_CONFIG : '7',
};

module.exports.DropFolderFileErrorCode = {
ERROR_ADDING_BULK_UPLOAD : 'dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD',
ERROR_ADD_CONTENT_RESOURCE : 'dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE',
ERROR_IN_BULK_UPLOAD : 'dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD',
ERROR_WRITING_TEMP_FILE : 'dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE',
LOCAL_FILE_WRONG_CHECKSUM : 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM',
LOCAL_FILE_WRONG_SIZE : 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE',
MALFORMED_XML_FILE : 'dropFolderXmlBulkUpload.MALFORMED_XML_FILE',
XML_FILE_SIZE_EXCEED_LIMIT : 'dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT',
ERROR_UPDATE_ENTRY : '1',
ERROR_ADD_ENTRY : '2',
FLAVOR_NOT_FOUND : '3',
FLAVOR_MISSING_IN_FILE_NAME : '4',
SLUG_REGEX_NO_MATCH : '5',
ERROR_READING_FILE : '6',
ERROR_DOWNLOADING_FILE : '7',
ERROR_UPDATE_FILE : '8',
ERROR_ADDING_CONTENT_PROCESSOR : '10',
ERROR_IN_CONTENT_PROCESSOR : '11',
ERROR_DELETING_FILE : '12',
FILE_NO_MATCH : '13',
};

module.exports.DropFolderFileHandlerType = {
XML : 'dropFolderXmlBulkUpload.XML',
ICAL : 'scheduleDropFolder.ICAL',
CONTENT : '1',
};

module.exports.DropFolderFileOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_NAME_ASC : '+fileName',
FILE_SIZE_ASC : '+fileSize',
FILE_SIZE_LAST_SET_AT_ASC : '+fileSizeLastSetAt',
ID_ASC : '+id',
PARSED_FLAVOR_ASC : '+parsedFlavor',
PARSED_SLUG_ASC : '+parsedSlug',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
FILE_NAME_DESC : '-fileName',
FILE_SIZE_DESC : '-fileSize',
FILE_SIZE_LAST_SET_AT_DESC : '-fileSizeLastSetAt',
ID_DESC : '-id',
PARSED_FLAVOR_DESC : '-parsedFlavor',
PARSED_SLUG_DESC : '-parsedSlug',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.DropFolderType = {
FEED : 'FeedDropFolder.FEED',
WEBEX : 'WebexDropFolder.WEBEX',
LOCAL : '1',
FTP : '2',
SCP : '3',
SFTP : '4',
S3 : '6',
};

module.exports.DurationType = {
LONG : 'long',
MEDIUM : 'medium',
NOT_AVAILABLE : 'notavailable',
SHORT : 'short',
};

module.exports.ESearchCaptionFieldName = {
CAPTION_ASSET_ID : 'caption_asset_id',
CONTENT : 'content',
END_TIME : 'end_time',
LABEL : 'label',
LANGUAGE : 'language',
START_TIME : 'start_time',
};

module.exports.ESearchCategoryAggregateByFieldName = {
CATEGORY_NAME : 'category_name',
};

module.exports.ESearchCategoryEntryFieldName = {
ANCESTOR_ID : 'ancestor_id',
ANCESTOR_NAME : 'ancestor_name',
FULL_IDS : 'full_ids',
ID : 'id',
NAME : 'name',
};

module.exports.ESearchCategoryFieldName = {
CONTRIBUTION_POLICY : 'contribution_policy',
CREATED_AT : 'created_at',
DEPTH : 'depth',
DESCRIPTION : 'description',
DIRECT_ENTRIES_COUNT : 'direct_entries_count',
DIRECT_SUB_CATEGORIES_COUNT : 'direct_sub_categories_count',
DISPLAY_IN_SEARCH : 'display_in_search',
ENTRIES_COUNT : 'entries_count',
FULL_IDS : 'full_ids',
FULL_NAME : 'full_name',
ID : 'id',
INHERITANCE_TYPE : 'inheritance_type',
INHERITED_PARENT_ID : 'inherited_parent_id',
MEMBERS_COUNT : 'members_count',
MODERATION : 'moderation',
NAME : 'name',
PARENT_ID : 'parent_id',
PENDING_ENTRIES_COUNT : 'pending_entries_count',
PENDING_MEMBERS_COUNT : 'pending_members_count',
PRIVACY : 'privacy',
PRIVACY_CONTEXT : 'privacy_context',
PRIVACY_CONTEXTS : 'privacy_contexts',
REFERENCE_ID : 'reference_id',
TAGS : 'tags',
UPDATED_AT : 'updated_at',
USER_ID : 'user_id',
};

module.exports.ESearchCategoryOrderByFieldName = {
CREATED_AT : 'created_at',
ENTRIES_COUNT : 'entries_count',
MEMBERS_COUNT : 'members_count',
NAME : 'name',
UPDATED_AT : 'updated_at',
};

module.exports.ESearchCategoryUserFieldName = {
USER_ID : 'user_id',
};

module.exports.ESearchCuePointAggregateByFieldName = {
TAGS : 'tags',
TYPE : 'type',
};

module.exports.ESearchCuePointFieldName = {
ANSWERS : 'answers',
END_TIME : 'end_time',
EXPLANATION : 'explanation',
HINT : 'hint',
ID : 'id',
NAME : 'name',
QUESTION : 'question',
START_TIME : 'start_time',
SUB_TYPE : 'sub_type',
TAGS : 'tags',
TEXT : 'text',
TYPE : 'type',
};

module.exports.ESearchEntryAggregateByFieldName = {
ACCESS_CONTROL_PROFILE : 'access_control_profile_id',
ENTRY_TYPE : 'entry_type',
MEDIA_TYPE : 'media_type',
TAGS : 'tags',
};

module.exports.ESearchEntryFieldName = {
ACCESS_CONTROL_ID : 'access_control_id',
ADMIN_TAGS : 'admin_tags',
CAPTIONS_CONTENT : 'captions_content',
CONVERSION_PROFILE_ID : 'conversion_profile_id',
CREATED_AT : 'created_at',
CREATOR_ID : 'creator_kuser_id',
CREDIT : 'credit',
DESCRIPTION : 'description',
END_DATE : 'end_date',
ENTITLED_USER_EDIT : 'entitled_kusers_edit',
ENTITLED_USER_PUBLISH : 'entitled_kusers_publish',
ENTITLED_USER_VIEW : 'entitled_kusers_view',
ENTRY_TYPE : 'entry_type',
EXTERNAL_SOURCE_TYPE : 'external_source_type',
ID : 'id',
IS_LIVE : 'is_live',
IS_QUIZ : 'is_quiz',
USER_ID : 'kuser_id',
LAST_PLAYED_AT : 'last_played_at',
LENGTH_IN_MSECS : 'length_in_msecs',
MEDIA_TYPE : 'media_type',
MODERATION_STATUS : 'moderation_status',
NAME : 'name',
PARENT_ENTRY_ID : 'parent_id',
PARTNER_SORT_VALUE : 'partner_sort_value',
PLAYS : 'plays',
PUSH_PUBLISH : 'push_publish',
RANK : 'rank',
RECORDED_ENTRY_ID : 'recorded_entry_id',
REDIRECT_ENTRY_ID : 'redirect_entry_id',
REFERENCE_ID : 'reference_id',
ROOT_ID : 'root_id',
SITE_URL : 'site_url',
SOURCE_TYPE : 'source_type',
START_DATE : 'start_date',
TAGS : 'tags',
TEMPLATE_ENTRY_ID : 'template_entry_id',
UPDATED_AT : 'updated_at',
USER_NAMES : 'user_names',
VOTES : 'votes',
};

module.exports.ESearchEntryOrderByFieldName = {
CREATED_AT : 'created_at',
END_DATE : 'end_date',
LAST_PLAYED_AT : 'last_played_at',
NAME : 'name',
PLAYS : 'plays',
PLAYS_LAST_1_DAY : 'plays_last_1_day',
PLAYS_LAST_30_DAYS : 'plays_last_30_days',
PLAYS_LAST_7_DAYS : 'plays_last_7_days',
RANK : 'rank',
START_DATE : 'start_date',
UPDATED_AT : 'updated_at',
VIEWS : 'views',
VIEWS_LAST_1_DAY : 'views_last_1_day',
VIEWS_LAST_30_DAYS : 'views_last_30_days',
VIEWS_LAST_7_DAYS : 'views_last_7_days',
VOTES : 'votes',
};

module.exports.ESearchGroupFieldName = {
COMPANY : 'company',
COUNTRY : 'country',
CREATED_AT : 'created_at',
EMAIL : 'email',
EXTERNAL_ID : 'external_id',
FIRST_NAME : 'first_name',
GROUP_IDS : 'group_ids',
IS_ADMIN : 'is_admin',
IS_HASHED : 'is_hashed',
LAST_NAME : 'last_name',
LOGIN_ENABLED : 'login_enabled',
PERMISSION_NAMES : 'permission_names',
ROLE_IDS : 'role_ids',
SCREEN_NAME : 'screen_name',
TAGS : 'tags',
TITLE : 'title',
UPDATED_AT : 'updated_at',
USER_ID : 'user_id',
};

module.exports.ESearchGroupOrderByFieldName = {
CREATED_AT : 'created_at',
MEMBERS_COUNT : 'members_count',
USER_ID : 'puser_id',
SCREEN_NAME : 'screen_name',
UPDATED_AT : 'updated_at',
};

module.exports.ESearchLanguage = {
ARABIC : 'Arabic',
BASQUE : 'Basque',
BRAZILIAN : 'Brazilian',
BULGARIAN : 'Bulgarian',
CATALAN : 'Catalan',
CHINESE : 'Chinese',
CZECH : 'Czech',
DANISH : 'Danish',
DUTCH : 'Dutch',
ENGLISH : 'English',
FINNISH : 'Finnish',
FRENCH : 'French',
GALICIAN : 'Galician',
GERMAN : 'German',
GREEK : 'Greek',
HINDI : 'Hindi',
HUNGRIAN : 'Hungarian',
INDONESIAN : 'Indonesian',
ITALIAN : 'Italian',
JAPANESE : 'Japanese',
KOREAN : 'Korean',
LATVIAN : 'Latvian',
LITHUANIAN : 'Lithuanian',
NORWEGIAN : 'Norwegian',
PERSIAN : 'Persian',
PORTUGUESE : 'Prtuguese',
ROMANIAN : 'Romanian',
RUSSIAN : 'Russian',
SORANI : 'Sorani',
SPANISH : 'Spanish',
SWEDISH : 'Swedish',
THAI : 'Thai',
TURKISH : 'Turkish',
};

module.exports.ESearchMetadataAggregateByFieldName = {
};

module.exports.ESearchSortOrder = {
ORDER_BY_ASC : 'asc',
ORDER_BY_DESC : 'desc',
};

module.exports.ESearchUserFieldName = {
COMPANY : 'company',
COUNTRY : 'country',
CREATED_AT : 'created_at',
EMAIL : 'email',
EXTERNAL_ID : 'external_id',
FIRST_NAME : 'first_name',
GROUP_IDS : 'group_ids',
IS_ADMIN : 'is_admin',
IS_HASHED : 'is_hashed',
LAST_NAME : 'last_name',
LOGIN_ENABLED : 'login_enabled',
PERMISSION_NAMES : 'permission_names',
ROLE_IDS : 'role_ids',
SCREEN_NAME : 'screen_name',
TAGS : 'tags',
TITLE : 'title',
UPDATED_AT : 'updated_at',
USER_ID : 'user_id',
TYPE : 'user_type',
};

module.exports.ESearchUserOrderByFieldName = {
CREATED_AT : 'created_at',
USER_ID : 'puser_id',
SCREEN_NAME : 'screen_name',
UPDATED_AT : 'updated_at',
};

module.exports.EdgeServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EmailNotificationFormat = {
HTML : '1',
TEXT : '2',
};

module.exports.EmailNotificationRecipientProviderType = {
STATIC_LIST : '1',
CATEGORY : '2',
USER : '3',
GROUP : '4',
};

module.exports.EmailNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EntryApplication = {
KMC : '0',
KMS : '1',
KAF : '2',
PITCH : '3',
KMS_GO : '4',
WEBCAST_APP : '5',
PERSONAL_CAPTURE : '6',
KALTURA_MEETING : '7',
};

module.exports.EntryDistributionOrderBy = {
CREATED_AT_ASC : '+createdAt',
SUBMITTED_AT_ASC : '+submittedAt',
SUNRISE_ASC : '+sunrise',
SUNSET_ASC : '+sunset',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
SUBMITTED_AT_DESC : '-submittedAt',
SUNRISE_DESC : '-sunrise',
SUNSET_DESC : '-sunset',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EntryIdentifierField = {
ID : 'id',
REFERENCE_ID : 'referenceId',
};

module.exports.EntryReplacementStatus = {
NONE : '0',
APPROVED_BUT_NOT_READY : '1',
READY_BUT_NOT_APPROVED : '2',
NOT_READY_AND_NOT_APPROVED : '3',
FAILED : '4',
};

module.exports.EntryScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
SUMMARY_ASC : '+summary',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
SUMMARY_DESC : '-summary',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EntryServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EntryServerNodeType = {
LIVE_PRIMARY : '0',
LIVE_BACKUP : '1',
LIVE_CLIPPING_TASK : '2',
};

module.exports.EntryStatus = {
ERROR_IMPORTING : '-2',
ERROR_CONVERTING : '-1',
IMPORT : '0',
INFECTED : 'virusScan.Infected',
SCAN_FAILURE : 'virusScan.ScanFailure',
PRECONVERT : '1',
READY : '2',
DELETED : '3',
PENDING : '4',
MODERATE : '5',
BLOCKED : '6',
NO_CONTENT : '7',
};

module.exports.EntryType = {
AUTOMATIC : '-1',
CONFERENCE_ENTRY_SERVER : 'conference.CONFERENCE_ENTRY_SERVER',
EXTERNAL_MEDIA : 'externalMedia.externalMedia',
SIP_ENTRY_SERVER : 'sip.SIP_ENTRY_SERVER',
MEDIA_CLIP : '1',
MIX : '2',
PLAYLIST : '5',
DATA : '6',
LIVE_STREAM : '7',
LIVE_CHANNEL : '8',
DOCUMENT : '10',
};

module.exports.EntryVendorTaskOrderBy = {
CREATED_AT_ASC : '+createdAt',
EXPECTED_FINISH_TIME_ASC : '+expectedFinishTime',
FINISH_TIME_ASC : '+finishTime',
ID_ASC : '+id',
PRICE_ASC : '+price',
QUEUE_TIME_ASC : '+queueTime',
STATUS_ASC : '+status',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
EXPECTED_FINISH_TIME_DESC : '-expectedFinishTime',
FINISH_TIME_DESC : '-finishTime',
ID_DESC : '-id',
PRICE_DESC : '-price',
QUEUE_TIME_DESC : '-queueTime',
STATUS_DESC : '-status',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EsearchGroupUserFieldName = {
GROUP_IDS : 'group_ids',
};

module.exports.EventCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EventNotificationEventObjectType = {
AD_CUE_POINT : 'adCuePointEventNotifications.AdCuePoint',
ANNOTATION : 'annotationEventNotifications.Annotation',
ATTACHMENT_ASSET : 'attachmentAssetEventNotifications.AttachmentAsset',
CAPTION_ASSET : 'captionAssetEventNotifications.CaptionAsset',
CODE_CUE_POINT : 'codeCuePointEventNotifications.CodeCuePoint',
DISTRIBUTION_PROFILE : 'contentDistributionEventNotifications.DistributionProfile',
ENTRY_DISTRIBUTION : 'contentDistributionEventNotifications.EntryDistribution',
CUE_POINT : 'cuePointEventNotifications.CuePoint',
DROP_FOLDER : 'dropFolderEventNotifications.DropFolder',
DROP_FOLDER_FILE : 'dropFolderEventNotifications.DropFolderFile',
METADATA : 'metadataEventNotifications.Metadata',
TRANSCRIPT_ASSET : 'transcriptAssetEventNotifications.TranscriptAsset',
ENTRY : '1',
CATEGORY : '2',
ASSET : '3',
FLAVORASSET : '4',
THUMBASSET : '5',
KUSER : '8',
ACCESSCONTROL : '9',
BATCHJOB : '10',
BULKUPLOADRESULT : '11',
CATEGORYKUSER : '12',
CONVERSIONPROFILE2 : '14',
FLAVORPARAMS : '15',
FLAVORPARAMSCONVERSIONPROFILE : '16',
FLAVORPARAMSOUTPUT : '17',
GENERICSYNDICATIONFEED : '18',
KUSERTOUSERROLE : '19',
PARTNER : '20',
PERMISSION : '21',
PERMISSIONITEM : '22',
PERMISSIONTOPERMISSIONITEM : '23',
SCHEDULER : '24',
SCHEDULERCONFIG : '25',
SCHEDULERSTATUS : '26',
SCHEDULERWORKER : '27',
STORAGEPROFILE : '28',
SYNDICATIONFEED : '29',
THUMBPARAMS : '31',
THUMBPARAMSOUTPUT : '32',
UPLOADTOKEN : '33',
USERLOGINDATA : '34',
USERROLE : '35',
WIDGET : '36',
CATEGORYENTRY : '37',
LIVE_STREAM : '38',
SERVER_NODE : '39',
ENTRY_SERVER_NODE : '40',
REACH_PROFILE : '41',
ENTRY_VENDOR_TASK : '42',
};

module.exports.EventNotificationEventType = {
INTEGRATION_JOB_CLOSED : 'integrationEventNotifications.INTEGRATION_JOB_CLOSED',
BATCH_JOB_STATUS : '1',
OBJECT_ADDED : '2',
OBJECT_CHANGED : '3',
OBJECT_COPIED : '4',
OBJECT_CREATED : '5',
OBJECT_DATA_CHANGED : '6',
OBJECT_DELETED : '7',
OBJECT_ERASED : '8',
OBJECT_READY_FOR_REPLACMENT : '9',
OBJECT_SAVED : '10',
OBJECT_UPDATED : '11',
OBJECT_REPLACED : '12',
OBJECT_READY_FOR_INDEX : '13',
};

module.exports.EventNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.EventNotificationTemplateType = {
BPM_ABORT : 'businessProcessNotification.BusinessProcessAbort',
BPM_SIGNAL : 'businessProcessNotification.BusinessProcessSignal',
BPM_START : 'businessProcessNotification.BusinessProcessStart',
EMAIL : 'emailNotification.Email',
HTTP : 'httpNotification.Http',
PUSH : 'pushNotification.Push',
};

module.exports.EventType = {
BROADCAST_START : '1',
BROADCAST_END : '2',
};

module.exports.ExternalMediaEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.ExternalMediaEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.ExternalMediaEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.ExternalMediaSourceType = {
INTERCALL : 'InterCall',
YOUTUBE : 'YouTube',
};

module.exports.FacebookDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FacebookDistributionProviderOrderBy = {
};

module.exports.FileAssetObjectType = {
UI_CONF : '2',
ENTRY : '3',
};

module.exports.FileAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FileAssetStatus = {
PENDING : '0',
UPLOADING : '1',
READY : '2',
DELETED : '3',
ERROR : '4',
};

module.exports.FileSyncObjectType = {
DISTRIBUTION_PROFILE : 'contentDistribution.DistributionProfile',
ENTRY_DISTRIBUTION : 'contentDistribution.EntryDistribution',
GENERIC_DISTRIBUTION_ACTION : 'contentDistribution.GenericDistributionAction',
EMAIL_NOTIFICATION_TEMPLATE : 'emailNotification.EmailNotificationTemplate',
HTTP_NOTIFICATION_TEMPLATE : 'httpNotification.HttpNotificationTemplate',
ENTRY : '1',
UICONF : '2',
BATCHJOB : '3',
ASSET : '4',
FLAVOR_ASSET : '4',
METADATA : '5',
METADATA_PROFILE : '6',
SYNDICATION_FEED : '7',
CONVERSION_PROFILE : '8',
FILE_ASSET : '9',
};

module.exports.FileSyncOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_SIZE_ASC : '+fileSize',
READY_AT_ASC : '+readyAt',
SYNC_TIME_ASC : '+syncTime',
UPDATED_AT_ASC : '+updatedAt',
VERSION_ASC : '+version',
CREATED_AT_DESC : '-createdAt',
FILE_SIZE_DESC : '-fileSize',
READY_AT_DESC : '-readyAt',
SYNC_TIME_DESC : '-syncTime',
UPDATED_AT_DESC : '-updatedAt',
VERSION_DESC : '-version',
};

module.exports.FlavorAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FlavorParamsOrderBy = {
};

module.exports.FlavorParamsOutputOrderBy = {
};

module.exports.FreewheelDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FreewheelDistributionProviderOrderBy = {
};

module.exports.FreewheelGenericDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FreewheelGenericDistributionProviderOrderBy = {
};

module.exports.FtpDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FtpDistributionProviderOrderBy = {
};

module.exports.FtpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.FtpScheduledDistributionProviderOrderBy = {
};

module.exports.GenericDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GenericDistributionProviderActionOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GenericDistributionProviderOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GenericSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GenericXsltSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GeoCoderType = {
KALTURA : '1',
MAX_MIND : '2',
DIGITAL_ELEMENT : '3',
};

module.exports.GoogleSyndicationFeedAdultValues = {
NO : 'No',
YES : 'Yes',
};

module.exports.GoogleVideoSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.GroupUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.HttpNotificationCertificateType = {
DER : 'DER',
ENG : 'ENG',
PEM : 'PEM',
};

module.exports.HttpNotificationSslKeyType = {
DER : 'DER',
ENG : 'ENG',
PEM : 'PEM',
};

module.exports.HttpNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.HuluDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.HuluDistributionProviderOrderBy = {
};

module.exports.ITunesSyndicationFeedAdultValues = {
CLEAN : 'clean',
NO : 'no',
YES : 'yes',
};

module.exports.ITunesSyndicationFeedCategories = {
ARTS : 'Arts',
ARTS_DESIGN : 'Arts/Design',
ARTS_FASHION_BEAUTY : 'Arts/Fashion &amp; Beauty',
ARTS_FOOD : 'Arts/Food',
ARTS_LITERATURE : 'Arts/Literature',
ARTS_PERFORMING_ARTS : 'Arts/Performing Arts',
ARTS_VISUAL_ARTS : 'Arts/Visual Arts',
BUSINESS : 'Business',
BUSINESS_BUSINESS_NEWS : 'Business/Business News',
BUSINESS_CAREERS : 'Business/Careers',
BUSINESS_INVESTING : 'Business/Investing',
BUSINESS_MANAGEMENT_MARKETING : 'Business/Management &amp; Marketing',
BUSINESS_SHOPPING : 'Business/Shopping',
COMEDY : 'Comedy',
EDUCATION : 'Education',
EDUCATION_TECHNOLOGY : 'Education/Education Technology',
EDUCATION_HIGHER_EDUCATION : 'Education/Higher Education',
EDUCATION_K_12 : 'Education/K-12',
EDUCATION_LANGUAGE_COURSES : 'Education/Language Courses',
EDUCATION_TRAINING : 'Education/Training',
GAMES_HOBBIES : 'Games &amp; Hobbies',
GAMES_HOBBIES_AUTOMOTIVE : 'Games &amp; Hobbies/Automotive',
GAMES_HOBBIES_AVIATION : 'Games &amp; Hobbies/Aviation',
GAMES_HOBBIES_HOBBIES : 'Games &amp; Hobbies/Hobbies',
GAMES_HOBBIES_OTHER_GAMES : 'Games &amp; Hobbies/Other Games',
GAMES_HOBBIES_VIDEO_GAMES : 'Games &amp; Hobbies/Video Games',
GOVERNMENT_ORGANIZATIONS : 'Government &amp; Organizations',
GOVERNMENT_ORGANIZATIONS_LOCAL : 'Government &amp; Organizations/Local',
GOVERNMENT_ORGANIZATIONS_NATIONAL : 'Government &amp; Organizations/National',
GOVERNMENT_ORGANIZATIONS_NON_PROFIT : 'Government &amp; Organizations/Non-Profit',
GOVERNMENT_ORGANIZATIONS_REGIONAL : 'Government &amp; Organizations/Regional',
HEALTH : 'Health',
HEALTH_ALTERNATIVE_HEALTH : 'Health/Alternative Health',
HEALTH_FITNESS_NUTRITION : 'Health/Fitness &amp; Nutrition',
HEALTH_SELF_HELP : 'Health/Self-Help',
HEALTH_SEXUALITY : 'Health/Sexuality',
KIDS_FAMILY : 'Kids &amp; Family',
MUSIC : 'Music',
NEWS_POLITICS : 'News &amp; Politics',
RELIGION_SPIRITUALITY : 'Religion &amp; Spirituality',
RELIGION_SPIRITUALITY_BUDDHISM : 'Religion &amp; Spirituality/Buddhism',
RELIGION_SPIRITUALITY_CHRISTIANITY : 'Religion &amp; Spirituality/Christianity',
RELIGION_SPIRITUALITY_HINDUISM : 'Religion &amp; Spirituality/Hinduism',
RELIGION_SPIRITUALITY_ISLAM : 'Religion &amp; Spirituality/Islam',
RELIGION_SPIRITUALITY_JUDAISM : 'Religion &amp; Spirituality/Judaism',
RELIGION_SPIRITUALITY_OTHER : 'Religion &amp; Spirituality/Other',
RELIGION_SPIRITUALITY_SPIRITUALITY : 'Religion &amp; Spirituality/Spirituality',
SCIENCE_MEDICINE : 'Science &amp; Medicine',
SCIENCE_MEDICINE_MEDICINE : 'Science &amp; Medicine/Medicine',
SCIENCE_MEDICINE_NATURAL_SCIENCES : 'Science &amp; Medicine/Natural Sciences',
SCIENCE_MEDICINE_SOCIAL_SCIENCES : 'Science &amp; Medicine/Social Sciences',
SOCIETY_CULTURE : 'Society &amp; Culture',
SOCIETY_CULTURE_HISTORY : 'Society &amp; Culture/History',
SOCIETY_CULTURE_PERSONAL_JOURNALS : 'Society &amp; Culture/Personal Journals',
SOCIETY_CULTURE_PHILOSOPHY : 'Society &amp; Culture/Philosophy',
SOCIETY_CULTURE_PLACES_TRAVEL : 'Society &amp; Culture/Places &amp; Travel',
SPORTS_RECREATION : 'Sports &amp; Recreation',
SPORTS_RECREATION_AMATEUR : 'Sports &amp; Recreation/Amateur',
SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL : 'Sports &amp; Recreation/College &amp; High School',
SPORTS_RECREATION_OUTDOOR : 'Sports &amp; Recreation/Outdoor',
SPORTS_RECREATION_PROFESSIONAL : 'Sports &amp; Recreation/Professional',
TV_FILM : 'TV &amp; Film',
TECHNOLOGY : 'Technology',
TECHNOLOGY_GADGETS : 'Technology/Gadgets',
TECHNOLOGY_PODCASTING : 'Technology/Podcasting',
TECHNOLOGY_SOFTWARE_HOW_TO : 'Technology/Software How-To',
TECHNOLOGY_TECH_NEWS : 'Technology/Tech News',
};

module.exports.ITunesSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.IdeticDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.IdeticDistributionProviderOrderBy = {
};

module.exports.ImageFlavorParamsOrderBy = {
};

module.exports.ImageFlavorParamsOutputOrderBy = {
};

module.exports.IntegrationProviderType = {
CIELO24 : 'cielo24.Cielo24',
VOICEBASE : 'voicebase.Voicebase',
};

module.exports.IntegrationTriggerType = {
BPM_EVENT_NOTIFICATION : 'bpmEventNotificationIntegration.BpmEventNotification',
MANUAL : '1',
};

module.exports.KontikiStorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.Language = {
ABQ : 'Abaza',
AB : 'Abkhazian',
ABE : 'Abnaki Western',
ABU : 'Abure',
ACN : 'Achang',
ACE : 'Achinese',
ACT : 'Achterhooks',
ACV : 'Achumawi',
ADJ : 'Adioukrou',
ADY : 'Adyghe; Adygei',
ADT : 'Adynyamathanha',
AAL : 'Afade',
AA : 'Afar',
AF : 'Afrikaans',
AGQ : 'Aghem',
AGX : 'Aghul',
AGU : 'Aguacateco',
AGR : 'Aguaruna',
AIN : 'Ainu (Japan)',
AKK : 'Akkadian',
AKL : 'Aklanon',
AKU : 'Akum',
AKZ : 'Alabama',
SQ : 'Albanian',
ALN : 'Albanian (Gheg)',
ALS : 'Albanian (Tosk)',
ALE : 'Aleut',
ALG : 'Algonquian languages',
ALQ : 'Algonquin',
ALT : 'Altai (Southern)',
AM : 'Amharic',
RME : 'Angloromani',
APJ : 'Apache (Jicarilla)',
APW : 'Apache (Western)',
AR : 'Arabic',
ARB : 'Arabic (standard)',
B_T : 'Arabic Tunisian Spoken',
ARC : 'Aramaic',
SAM : 'Aramaic Samaritan',
ARP : 'Arapaho',
ARN : 'Araucanian',
ARI : 'Arikara',
HY : 'Armenian',
RUP : 'Aromanian',
AS_ : 'Assamese',
ASB : 'Assiniboine',
AII : 'Assyrian Neo-Aramaic',
AST : 'Asturian',
ATH : 'Athapascan languages',
ATJ : 'Atikamekw',
AWA : 'Awadhi',
AY : 'Aymara',
AZ : 'Azerbaijani',
BCR : 'Babine',
BFQ : 'Badaga',
BDJ : 'Bai',
BAN : 'Balinese',
BCC : 'Balochi Southern',
BFT : 'Balti',
BAL : 'Baluchi',
BAS : 'Basa (Cameroon)',
BA : 'Bashkir',
EU : 'Basque',
BAR : 'Bavarian',
BEA : 'Beaver',
BEJ : 'Beja',
BEM : 'Bemba (Zambia)',
BN : 'Bengali (Bangla)',
BEW : 'Betawi',
KAP : 'Bezhta',
BHB : 'Bhili',
BHO : 'Bhojpuri',
DZ : 'Bhutani',
BH : 'Bihari',
BIK : 'Bikol',
BIN : 'Bini',
BPY : 'Bishnupriya Manipuri',
BI : 'Bislama',
BR : 'Breton',
BUG : 'Buginese',
BG : 'Bulgarian',
BUA : 'Buriat',
MY : 'Burmese',
BE : 'Byelorussian (Belarusian)',
CAD : 'Caddo',
KM : 'Cambodian',
YUE : 'Cantonese',
CRX : 'Carrier',
CAF : 'Carrier Southern',
CA : 'Catalan',
CHC : 'Catawba',
CAY : 'Cayuga',
CEB : 'Cebuano',
CHG : 'Chagatai',
CLD : 'Chaldean Neo-Aramaic',
CHR : 'Cherokee',
CHY : 'Cheyenne',
CIC : 'Chickasaw',
CLC : 'Chilcotin',
ZH : 'Chinese',
CHN : 'Chinook jargon',
CHP : 'Chipewyan',
CIW : 'Chippewa',
CHO : 'Choctaw',
CAA : 'Chor',
CKT : 'Chukot',
CIM : 'Cimbrian',
CLM : 'Clallam Klallam',
COJ : 'Cochimi',
COC : 'Cocopa',
KSH : 'Colognian',
COM : 'Comanche',
SWB : 'Comorian',
COO : 'Comox',
COP : 'Coptic',
CO : 'Corsican',
CR : 'Cree',
MUS : 'Creek',
CRH : 'Crimean Tatar',
HR : 'Croatian',
CUP : 'Cupeo',
CS : 'Czech',
DAK : 'Dakota',
DA : 'Danish',
DAR : 'Dargwa',
PRD : 'Dari (Persian)',
GBZ : 'Dari Zoroastrian',
DHV : 'Dehu',
DEL : 'Delaware',
DIN : 'Dinka',
DOI : 'Dogri (generic)',
DGR : 'Dogrib',
DLG : 'Dolgan',
DOH : 'Dong',
DUA : 'Duala',
DNG : 'Dungan',
NL : 'Dutch',
DYU : 'Dyula',
EEE : 'E',
EGL : 'Emilian',
EN : 'English',
EN_US : 'English (American)',
EN_GB : 'English (British)',
ENM : 'English Middle (1100-1500)',
MYV : 'Erzya',
EO : 'Esperanto',
ET : 'Estonian',
EVE : 'Even',
EVN : 'Evenki',
FO : 'Faeroese',
FAX : 'Fala',
FAN : 'Fang (Equatorial Guinea)',
FA : 'Farsi',
FJ : 'Fiji',
FIL : 'Filipino',
FI : 'Finnish',
FIT : 'Finnish (Tornedalen)',
FON : 'Fon',
FRP : 'Franco-Prove',
FRK : 'Frankish',
FR : 'French',
FR_CA : 'French (Canada)',
FY : 'Frisian',
FRR : 'Frisian Northern',
FUR : 'Friulian',
FVR : 'Fur',
GAA : 'Ga',
GV : 'Gaelic (Manx)',
GD : 'Gaelic (Scottish)',
GAG : 'Gagauz',
GL : 'Galician',
GAN : 'Gan',
GEZ : 'Geez',
KA : 'Georgian',
DE : 'German',
GEH : 'German Hutterite',
PDC : 'German Pennsylvania',
GIL : 'Gilbertese',
NIV : 'Gilyak Nivkh',
GIT : 'Gitxsan',
EL : 'Greek',
GRC : 'Greek Ancient (to 1453)',
KL : 'Greenlandic',
GN : 'Guarani',
GU : 'Gujarati',
GWI : 'Gwichin',
HAI : 'Haida',
HNN : 'Hainanese',
HAS : 'Haisla',
HAK : 'Hakka',
HUR : 'Halkomelem',
HAA : 'Han',
HNI : 'Hani',
HA : 'Hausa',
HAW : 'Hawaiian',
IW : 'Hebrew',
HE : 'Hebrew',
HEI : 'Heiltsuk',
HID : 'Hidatsa',
HIL : 'Hiligaynon',
HI : 'Hindi',
HMN : 'Hmong',
HKK : 'Hokkien',
HOP : 'Hopi',
CZH : 'Huizhou Chinese',
HU : 'Hungarian',
IS : 'Icelandic',
KPO : 'Ikposo',
ILO : 'Iloko',
SMN : 'Inari Sami',
IN : 'Indonesian',
ID : 'Indonesian',
IZH : 'Ingrian',
INH : 'Ingush',
IA : 'Interlingua',
IE : 'Interlingue',
IKT : 'Inuinnaqtun',
IU : 'Inuktitut',
IK : 'Inupiak',
GA : 'Irish',
IRO : 'Iroquoian languages',
IT : 'Italian',
ITL : 'Itelmen',
JA : 'Japanese',
JV : 'Javanese',
CJY : 'Jinyu Chinese',
KAJ : 'Jju',
JCT : 'Judeo-Crimean Tatar',
JGE : 'Judeo-Georgian',
JUT : 'Jutish',
KBD : 'Kabardian',
KEA : 'Kabuverdianu',
KAB : 'Kabyle',
KFR : 'Kachchi',
KJV : 'Kaikavian literary language (Kajkavian)',
XAL : 'Kalmyk Oirat',
KN : 'Kannada',
KSK : 'Kansa',
KRC : 'Karachay-Balkar',
KIM : 'Karagas',
KDR : 'Karaim',
KAA : 'Karakalpak',
KRL : 'Karelian',
KS : 'Kashmiri',
CSB : 'Kashubian',
KKZ : 'Kaska',
KAW : 'Kawi',
KK : 'Kazakh',
KJH : 'Khakas',
KLJ : 'Khalaj Turkic',
KCA : 'Khanty',
KHA : 'Khasi',
KXM : 'Khmer Northern',
KIC : 'Kickapoo',
RW : 'Kinyarwanda (Ruanda)',
KIO : 'Kiowa',
KY : 'Kirghiz',
RN : 'Kirundi (Rundi)',
TLH : 'Klingon tlhIngan-Hol',
KFA : 'Kodava',
KOI : 'Komi-Permyak',
KOK : 'Konkani (generic)',
KNN : 'Konkani (specific)',
GOM : 'Konkani Goan',
KO : 'Korean',
KPY : 'Koryak',
KOS : 'Kosraean',
AVK : 'Kotava',
KPE : 'Kpelle',
DIH : 'Kumiai',
KUM : 'Kumyk',
KU : 'Kurdish',
KUT : 'Kutenai',
KWK : 'Kwakiutl',
GDM : 'Laal',
LLD : 'Ladin',
LAD : 'Ladino',
LAH : 'Lahnda',
LHU : 'Lahu',
LBE : 'Lak',
LKI : 'Laki',
LKT : 'Lakota',
LO : 'Laothian',
LA : 'Latin',
LV : 'Latvian (Lettish)',
LZZ : 'Laz',
LEZ : 'Lezghian',
LIJ : 'Ligurian',
LIL : 'Lillooet',
LIF : 'Limbu',
LI : 'Limburgish ( Limburger)',
LN : 'Lingala',
LT : 'Lithuanian',
JBO : 'Lojban',
LOM : 'Loma (Liberia)',
LMO : 'Lombard',
NDS : 'Low German Low Saxon',
LOZ : 'Lozi',
LUA : 'Luba-Lulua',
LUQ : 'Lucumi',
LUD : 'Ludian',
SMJ : 'Lule Sami',
LUN : 'Lunda',
LUO : 'Luo (Kenya and Tanzania)',
LUT : 'Lushootseed',
LB : 'Luxembourgish (Letzeburgesch)',
MK : 'Macedonian',
MAD : 'Madurese',
MAG : 'Magahi',
MAI : 'Maithili',
MG : 'Malagasy',
MS : 'Malay',
ML : 'Malayalam',
PQM : 'Malecite-Passamaquoddy',
MT : 'Maltese',
MNC : 'Manchu',
MID : 'Mandaic',
MHQ : 'Mandan',
CMN : 'Mandarin Chinese',
MNS : 'Mansi',
MI : 'Maori',
MRW : 'Maranao',
MR : 'Marathi',
CHM : 'Mari (Russia)',
MWR : 'Marwari',
MAS : 'Masai',
MFY : 'Mayo',
MNI : 'Meitei',
MEN : 'Mende (Sierra Leone)',
MEZ : 'Menominee',
CRG : 'Michif',
MIC : 'Micmac',
MNP : 'Min Bei Chinese',
CDO : 'Min Dong Chinese',
MIN : 'Minangkabau',
XMF : 'Mingrelian',
MWL : 'Mirandese',
MOH : 'Mohawk',
MDF : 'Moksha',
MO : 'Moldavian',
MNW : 'Mon',
MN : 'Mongolian',
MOE : 'Montagnais',
MFE : 'Morisyen',
MOS : 'Mossi',
MXI : 'Mozarabic',
MU : 'Multilingual',
MTQ : 'Muong',
NAQ : 'Nama (Namibia)',
GLD : 'Nanai',
NSK : 'Naskapi',
NA : 'Nauru',
NAP : 'Neapolitan',
NE : 'Nepali',
NEW_ : 'Newari Nepal Bhasa',
NIO : 'Nganasan',
NCG : 'Nisgaa',
NIU : 'Niuean',
ZXX : 'No linguistic content',
NOG : 'Nogai',
NON : 'Norse Old',
NSO : 'Northern Sotho Pedi Sepedi',
NO : 'Norwegian',
NOV : 'Novial',
NYM : 'Nyamwezi',
NYO : 'Nyoro',
NYS : 'Nyungah',
OC : 'Occitan',
OJC : 'Ojibwa Central',
OJG : 'Ojibwa Eastern',
OJB : 'Ojibwa Northwestern',
OJS : 'Ojibwa Severn',
OJW : 'Ojibwa Western',
OJ : 'Ojibwe, Ojibwa',
OKA : 'Okanagan',
RYU : 'Okinawan Central',
ANG : 'Old English',
ONE : 'Oneida',
ONO : 'Onondaga',
OR_ : 'Oriya',
OM : 'Oromo (Afan, Galla)',
OTW : 'Ottawa',
PPI : 'Paipai',
PAU : 'Palauan',
PAM : 'Pampanga',
PAG : 'Pangasinan',
PAP : 'Papiamento',
PS : 'Pashto (Pushto)',
PRP : 'Persian',
PRS : 'Persian (Dari)',
PFL : 'Pfaelzisch',
PCD : 'Picard',
PMS : 'Piedmontese',
MYP : 'Pirah',
PIH : 'Pitcairn-Norfolk',
PDT : 'Plautdietsch',
PL : 'Polish',
PNT : 'Pontic',
PT : 'Portuguese',
PT_BR : 'Portuguese (Brazil)',
POT : 'Potawatomi',
PRG : 'Prussian',
FUC : 'Pulaar',
PA : 'Punjabi',
QXQ : 'Qashqai',
ALC : 'Qawasqar',
QU : 'Quechua',
QUC : 'Quich Central',
RAP : 'Rapanui',
RAR : 'Rarotongan',
QTZ : 'Reserved for local use.',
RM : 'Rhaeto-Romance',
RGN : 'Romagnol',
RMF : 'Romani Kalo Finnish',
RMO : 'Romani Sinte',
RO : 'Romanian',
RUO : 'Romanian Istro',
RUQ : 'Romanian Megleno',
ROM : 'Romany',
RCF : 'Runion Creole French',
RU : 'Russian',
RUE : 'Rusyn',
ACF : 'Saint Lucian Creole French',
SAH : 'Sakha',
SLR : 'Salar',
STR : 'Salish Straits',
SAL : 'Salishan languages',
SJD : 'Sami Kildin',
SMI : 'Sami languages',
SM : 'Samoan',
SG : 'Sangro',
SA : 'Sanskrit',
SAT : 'Santali',
SRM : 'Saramaccan',
SDC : 'Sardinian Sassarese',
STQ : 'Saterland Frisian',
SXU : 'Saxon Upper',
SCO : 'Scots',
SEC : 'Sechelt',
TRV : 'Seediq',
SEK : 'Sekani',
SEL : 'Selkup',
SEE : 'Seneca',
SR : 'Serbian',
SH : 'Serbo-Croatian',
SEI : 'Seri',
ST : 'Sesotho',
TN : 'Setswana',
SJW : 'Shawnee',
SN : 'Shona',
CJS : 'Shor',
SHH : 'Shoshoni',
SHS : 'Shuswap',
SCN : 'Sicilian',
SID : 'Sidamo',
BLA : 'Siksika',
SZL : 'Silesian',
SD : 'Sindhi',
SI : 'Sinhalese',
SS : 'Siswati',
SMS : 'Skolt Sami',
SCS : 'Slavey North',
XSL : 'Slavey South',
SK : 'Slovak',
SL : 'Slovenian',
SO : 'Somali',
SNK : 'Soninke',
DSB : 'Sorbian Lower',
HSB : 'Sorbian Upper',
SMA : 'Southern Sami',
TCE : 'Southern Tutchone',
ES : 'Spanish',
ES_XL : 'Spanish (Latin America)',
SRN : 'Sranan',
STO : 'Stoney',
XSV : 'Sudovian',
SUX : 'Sumerian',
SU : 'Sundanese',
SVA : 'Svan',
SWG : 'Swabian',
SW : 'Swahili (Kiswahili)',
SV : 'Swedish',
SWL : 'Swedish Sign Language',
GSW : 'Swiss German Alemannic Alsatian',
SYR : 'Syriac',
TAB : 'Tabassaran',
SHY : 'Tachawit',
SHI : 'Tachelhit',
TL : 'Tagalog',
TBW : 'Tagbanwa',
TGX : 'Tagish',
THT : 'Tahltan',
TDD : 'Tai Na',
ZH_TW : 'Taiwanese Mandarin',
TG : 'Tajik',
TLY : 'Talysh',
TTQ : 'Tamajaq Tawallammat',
TAQ : 'Tamasheq',
TZM : 'Tamazight Central Atlas',
TA : 'Tamil',
TAR : 'Tarahumara Central',
TTT : 'Tat Muslim',
TT : 'Tatar',
TE : 'Telugu',
TEO : 'Teo Chew',
TET : 'Tetum',
TH : 'Thai',
NOD : 'Thai (Northern)',
TTS : 'Thai Northeastern',
THP : 'Thompson',
BO : 'Tibetan',
TIG : 'Tigre',
TI : 'Tigrinya',
TLI : 'Tlingit',
TCX : 'Toda',
OOD : 'Tohono Oodham',
TPI : 'Tok Pisin',
TO : 'Tonga',
TOG : 'Tonga (Nyasa)',
DDO : 'Tsez',
TSI : 'Tsimshian',
TS : 'Tsonga',
TCY : 'Tulu',
TUM : 'Tumbuka',
MZB : 'Tumzabt',
TPN : 'Tupinamb',
TUV : 'Turkana',
TR : 'Turkish',
OTA : 'Turkish Ottoman',
TK : 'Turkmen',
TUS : 'Tuscarora',
TVL : 'Tuvalu',
TYV : 'Tuvinian',
TW : 'Twi',
UBY : 'Ubykh',
UDI : 'Udi',
UDM : 'Udmurt',
UG : 'Uighur',
UK : 'Ukrainian',
UN : 'Undefined',
UR : 'Urdu',
UUM : 'Urum',
UZ : 'Uzbek',
VEC : 'Venetian',
VEP : 'Veps',
VI : 'Vietnamese',
VO : 'Volapuk',
VOR : 'Voro',
VOT : 'Votic',
VRO : 'Vro',
AUC : 'Waorani',
WAR : 'Waray (Philippines)',
CY : 'Welsh',
PES : 'Western Farsi',
AMW : 'Western Neo-Aramaic',
WIY : 'Wiyot',
WO : 'Wolof',
WUU : 'Wu Chinese',
WYM : 'Wymysorys',
XH : 'Xhosa',
AME : 'Yanesha',
JI : 'Yiddish',
YI : 'Yiddish',
YO : 'Yoruba',
ZAI : 'Zapotec Isthmus',
DJE : 'Zarma',
ZU : 'Zulu',
};

module.exports.LanguageCode = {
AA : 'aa',
AB : 'ab',
AF : 'af',
ALG : 'alg',
AM : 'am',
AR : 'ar',
AS_ : 'as',
ATH : 'ath',
AY : 'ay',
AZ : 'az',
BA : 'ba',
BE : 'be',
BG : 'bg',
BH : 'bh',
BI : 'bi',
BLA : 'bla',
BN : 'bn',
BO : 'bo',
BR : 'br',
CA : 'ca',
CO : 'co',
CR : 'cr',
CRG : 'crg',
CS : 'cs',
CY : 'cy',
DA : 'da',
DE : 'de',
DZ : 'dz',
EL : 'el',
EN : 'en',
EN_GB : 'en_gb',
EN_US : 'en_us',
EO : 'eo',
ES : 'es',
ES_XL : 'es_xl',
ET : 'et',
EU : 'eu',
FA : 'fa',
FI : 'fi',
FJ : 'fj',
FO : 'fo',
FR : 'fr',
FR_CA : 'fr_ca',
FY : 'fy',
GA : 'ga',
GD : 'gd',
GL : 'gl',
GN : 'gn',
GU : 'gu',
GV : 'gv',
HA : 'ha',
HE : 'he',
HI : 'hi',
HR : 'hr',
HU : 'hu',
HY : 'hy',
IA : 'ia',
ID : 'id',
IE : 'ie',
IK : 'ik',
IKT : 'ikt',
IN : 'in',
IRO : 'iro',
IS : 'is',
IT : 'it',
IU : 'iu',
IW : 'iw',
JA : 'ja',
JI : 'ji',
JV : 'jv',
KA : 'ka',
KK : 'kk',
KL : 'kl',
KM : 'km',
KN : 'kn',
KO : 'ko',
KS : 'ks',
KU : 'ku',
KY : 'ky',
LA : 'la',
LB : 'lb',
LI : 'li',
LN : 'ln',
LO : 'lo',
LT : 'lt',
LV : 'lv',
MG : 'mg',
MI : 'mi',
MIC : 'mic',
MK : 'mk',
ML : 'ml',
MN : 'mn',
MO : 'mo',
MOE : 'moe',
MR : 'mr',
MS : 'ms',
MT : 'mt',
MU : 'mu',
MY : 'my',
NA : 'na',
NE : 'ne',
NL : 'nl',
NO : 'no',
OC : 'oc',
OJ : 'oj',
OJS : 'ojs',
OJW : 'ojw',
OKA : 'oka',
OM : 'om',
OR_ : 'or',
PA : 'pa',
PL : 'pl',
PS : 'ps',
PT : 'pt',
PT_BR : 'pt_br',
QU : 'qu',
RM : 'rm',
RN : 'rn',
RO : 'ro',
RU : 'ru',
RW : 'rw',
SA : 'sa',
SAL : 'sal',
SD : 'sd',
SG : 'sg',
SH : 'sh',
SI : 'si',
SK : 'sk',
SL : 'sl',
SM : 'sm',
SMI : 'smi',
SN : 'sn',
SO : 'so',
SQ : 'sq',
SR : 'sr',
SS : 'ss',
ST : 'st',
SU : 'su',
SV : 'sv',
SW : 'sw',
TA : 'ta',
TCE : 'tce',
TE : 'te',
TG : 'tg',
TH : 'th',
TI : 'ti',
TK : 'tk',
TL : 'tl',
TN : 'tn',
TO : 'to',
TR : 'tr',
TS : 'ts',
TT : 'tt',
TW : 'tw',
UG : 'ug',
UK : 'uk',
UN : 'un',
UR : 'ur',
UZ : 'uz',
VI : 'vi',
VO : 'vo',
WO : 'wo',
XH : 'xh',
YI : 'yi',
YO : 'yo',
ZH : 'zh',
ZH_TW : 'zh_tw',
ZU : 'zu',
ZXX : 'zxx',
};

module.exports.LikeOrderBy = {
};

module.exports.LiveAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.LiveChannelCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.LiveChannelMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.LiveChannelOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.LiveChannelSegmentOrderBy = {
CREATED_AT_ASC : '+createdAt',
START_TIME_ASC : '+startTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
START_TIME_DESC : '-startTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.LiveChannelSegmentStatus = {
ACTIVE : '2',
DELETED : '3',
};

module.exports.LiveChannelSegmentTriggerType = {
CHANNEL_RELATIVE : '1',
ABSOLUTE_TIME : '2',
SEGMENT_START_RELATIVE : '3',
SEGMENT_END_RELATIVE : '4',
};

module.exports.LiveChannelSegmentType = {
VIDEO_AND_AUDIO : '1',
};

module.exports.LiveEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.LiveEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.LiveEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.LiveEntryScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.LiveParamsOrderBy = {
};

module.exports.LiveReportOrderBy = {
NAME_ASC : '+name',
AUDIENCE_DESC : '-audience',
EVENT_TIME_DESC : '-eventTime',
PLAYS_DESC : '-plays',
};

module.exports.LiveReportType = {
ENTRY_GEO_TIME_LINE : 'ENTRY_GEO_TIME_LINE',
ENTRY_SYNDICATION_TOTAL : 'ENTRY_SYNDICATION_TOTAL',
ENTRY_TIME_LINE : 'ENTRY_TIME_LINE',
ENTRY_TOTAL : 'ENTRY_TOTAL',
PARTNER_TOTAL : 'PARTNER_TOTAL',
};

module.exports.LiveStreamAdminEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.LiveStreamAdminEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.LiveStreamAdminEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.LiveStreamEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.LiveStreamEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.LiveStreamEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.LiveStreamScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
SUMMARY_ASC : '+summary',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
SUMMARY_DESC : '-summary',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.LocationScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.MailType = {
MAIL_TYPE_KALTURA_NEWSLETTER : '10',
MAIL_TYPE_ADDED_TO_FAVORITES : '11',
MAIL_TYPE_ADDED_TO_CLIP_FAVORITES : '12',
MAIL_TYPE_NEW_COMMENT_IN_PROFILE : '13',
MAIL_TYPE_CLIP_ADDED_YOUR_KALTURA : '20',
MAIL_TYPE_VIDEO_ADDED : '21',
MAIL_TYPE_ROUGHCUT_CREATED : '22',
MAIL_TYPE_ADDED_KALTURA_TO_YOUR_FAVORITES : '23',
MAIL_TYPE_NEW_COMMENT_IN_KALTURA : '24',
MAIL_TYPE_CLIP_ADDED : '30',
MAIL_TYPE_VIDEO_CREATED : '31',
MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES : '32',
MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_CONTRIBUTED : '33',
MAIL_TYPE_CLIP_CONTRIBUTED : '40',
MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED : '41',
MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES_SUBSCRIBED : '42',
MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_SUBSCRIBED : '43',
MAIL_TYPE_REGISTER_CONFIRM : '50',
MAIL_TYPE_PASSWORD_RESET : '51',
MAIL_TYPE_LOGIN_MAIL_RESET : '52',
MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE : '54',
MAIL_TYPE_VIDEO_READY : '60',
MAIL_TYPE_VIDEO_IS_READY : '62',
MAIL_TYPE_BULK_DOWNLOAD_READY : '63',
MAIL_TYPE_BULKUPLOAD_FINISHED : '64',
MAIL_TYPE_BULKUPLOAD_FAILED : '65',
MAIL_TYPE_BULKUPLOAD_ABORTED : '66',
MAIL_TYPE_NOTIFY_ERR : '70',
MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM : '80',
MAIL_TYPE_VIDEO_SERVICE_NOTICE : '81',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED : '82',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED : '83',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED : '84',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER : '85',
MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM : '86',
MAIL_TYPE_EXTENDED_FREE_TRIAL_ENDS_WARNING : '87',
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD : '110',
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS : '111',
MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD : '112',
MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED : '113',
MAIL_TYPE_LIVE_REPORT_EXPORT_SUCCESS : '130',
MAIL_TYPE_LIVE_REPORT_EXPORT_FAILURE : '131',
MAIL_TYPE_LIVE_REPORT_EXPORT_ABORT : '132',
MAIL_TYPE_USERS_CSV : '133',
MAIL_TYPE_OBJECTS_CSV : '135',
MAIL_TYPE_REPORT_EXPORT_SUCCESS : '136',
MAIL_TYPE_REPORT_EXPORT_FAILURE : '137',
MAIL_TYPE_REPORT_EXPORT_ABORT : '138',
MAIL_TYPE_SIP_FAILURE : '139',
};

module.exports.MatchConditionType = {
MATCH_ANY : '1',
MATCH_ALL : '2',
};

module.exports.MediaEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.MediaEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.MediaEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.MediaFlavorParamsOrderBy = {
};

module.exports.MediaFlavorParamsOutputOrderBy = {
};

module.exports.MediaInfoOrderBy = {
};

module.exports.MediaParserType = {
MEDIAINFO : '0',
FFMPEG : '1',
};

module.exports.MediaServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.MetadataObjectType = {
AD_CUE_POINT : 'adCuePointMetadata.AdCuePoint',
ANNOTATION : 'annotationMetadata.Annotation',
CODE_CUE_POINT : 'codeCuePointMetadata.CodeCuePoint',
ANSWER_CUE_POINT : 'quiz.AnswerCuePoint',
QUESTION_CUE_POINT : 'quiz.QuestionCuePoint',
THUMB_CUE_POINT : 'thumbCuePointMetadata.thumbCuePoint',
ENTRY : '1',
CATEGORY : '2',
USER : '3',
PARTNER : '4',
DYNAMIC_OBJECT : '5',
USER_ENTRY : '6',
};

module.exports.MetadataOrderBy = {
CREATED_AT_ASC : '+createdAt',
METADATA_PROFILE_VERSION_ASC : '+metadataProfileVersion',
UPDATED_AT_ASC : '+updatedAt',
VERSION_ASC : '+version',
CREATED_AT_DESC : '-createdAt',
METADATA_PROFILE_VERSION_DESC : '-metadataProfileVersion',
UPDATED_AT_DESC : '-updatedAt',
VERSION_DESC : '-version',
};

module.exports.MetadataProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.MetroPcsDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.MetroPcsDistributionProviderOrderBy = {
};

module.exports.MixEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.MixEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.MixEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.ModerationFlagStatus = {
PENDING : '1',
MODERATED : '2',
};

module.exports.ModerationObjectType = {
ENTRY : '2',
USER : '3',
};

module.exports.MsnDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.MsnDistributionProviderOrderBy = {
};

module.exports.ObjectFilterEngineType = {
ENTRY : '1',
ENTRY_VENDOR_TASK : '2',
};

module.exports.ObjectTaskType = {
DISTRIBUTE : 'scheduledTaskContentDistribution.Distribute',
DISPATCH_EVENT_NOTIFICATION : 'scheduledTaskEventNotification.DispatchEventNotification',
EXECUTE_METADATA_XSLT : 'scheduledTaskMetadata.ExecuteMetadataXslt',
DELETE_ENTRY : '1',
MODIFY_CATEGORIES : '2',
DELETE_ENTRY_FLAVORS : '3',
CONVERT_ENTRY_FLAVORS : '4',
DELETE_LOCAL_CONTENT : '5',
STORAGE_EXPORT : '6',
MODIFY_ENTRY : '7',
MAIL_NOTIFICATION : '8',
};

module.exports.PartnerOrderBy = {
ADMIN_EMAIL_ASC : '+adminEmail',
ADMIN_NAME_ASC : '+adminName',
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
STATUS_ASC : '+status',
WEBSITE_ASC : '+website',
ADMIN_EMAIL_DESC : '-adminEmail',
ADMIN_NAME_DESC : '-adminName',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
STATUS_DESC : '-status',
WEBSITE_DESC : '-website',
};

module.exports.PdfFlavorParamsOrderBy = {
};

module.exports.PdfFlavorParamsOutputOrderBy = {
};

module.exports.PermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.PermissionItemType = {
API_ACTION_ITEM : 'kApiActionPermissionItem',
API_PARAMETER_ITEM : 'kApiParameterPermissionItem',
};

module.exports.PermissionOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.PlayReadyAnalogVideoOPId = {
EXPLICIT_ANALOG_TV : '2098DE8D-7DDD-4BAB-96C6-32EBB6FABEA3',
BEST_EFFORT_EXPLICIT_ANALOG_TV : '225CD36F-F132-49EF-BA8C-C91EA28E4369',
IMAGE_CONSTRAINT_VIDEO : '811C5110-46C8-4C6E-8163-C0482A15D47E',
AGC_AND_COLOR_STRIPE : 'C3FD11C6-F8B7-4D20-B008-1DB17D61F2DA',
IMAGE_CONSTRAINT_MONITOR : 'D783A191-E083-4BAF-B2DA-E69F910B3772',
};

module.exports.PlayReadyCopyEnablerType = {
CSS : '3CAF2814-A7AB-467C-B4DF-54ACC56C66DC',
PRINTER : '3CF2E054-F4D5-46cd-85A6-FCD152AD5FBE',
DEVICE : '6848955D-516B-4EB0-90E8-8F6D5A77B85F',
CLIPBOARD : '6E76C588-C3A9-47ea-A875-546D5209FF38',
SDC : '79F78A0D-0B69-401e-8A90-8BEF30BCE192',
SDC_PREVIEW : '81BD9AD4-A720-4ea1-B510-5D4E6FFB6A4D',
AACS : 'C3CF56E0-7FF2-4491-809F-53E21D3ABF07',
HELIX : 'CCB0B4E3-8B46-409e-A998-82556E3F5AF4',
CPRM : 'CDD801AD-A577-48DB-950E-46D5F1592FAE',
PC : 'CE480EDE-516B-40B3-90E1-D6CFC47630C5',
SDC_LIMITED : 'E6785609-64CC-4bfa-B82D-6B619733B746',
ORANGE_BOOK_CD : 'EC930B7D-1F2D-4682-A38B-8AB977721D0D',
};

module.exports.PlayReadyDigitalAudioOPId = {
SCMS : '6D5CFA59-C250-4426-930E-FAC72C8FCFA6',
};

module.exports.PlayReadyPlayEnablerType = {
HELIX : '002F9772-38A0-43E5-9F79-0F6361DCC62A',
HDCP_WIVU : '1B4542E3-B5CF-4C99-B3BA-829AF46C92F8',
AIRPLAY : '5ABF0F0D-DC29-4B82-9982-FD8E57525BFC',
UNKNOWN : '786627D8-C2A6-44BE-8F88-08AE255B01A',
HDCP_MIRACAST : 'A340C256-0941-4D4C-AD1D-0B6735C0CB24',
UNKNOWN_520 : 'B621D91F-EDCC-4035-8D4B-DC71760D43E9',
DTCP : 'D685030B-0F4F-43A6-BBAD-356F1EA0049A',
};

module.exports.PlayReadyPolicyOrderBy = {
};

module.exports.PlayReadyProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

module.exports.PlayableEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

module.exports.PlayableEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.PlayableEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

module.exports.PlaybackProtocol = {
APPLE_HTTP : 'applehttp',
APPLE_HTTP_TO_MC : 'applehttp_to_mc',
AUTO : 'auto',
DOWNLOAD : 'download',
AKAMAI_HD : 'hdnetwork',
AKAMAI_HDS : 'hdnetworkmanifest',
HDS : 'hds',
HLS : 'hls',
HTTP : 'http',
MPEG_DASH : 'mpegdash',
MULTICAST_SL : 'multicast_silverlight',
RTMP : 'rtmp',
RTSP : 'rtsp',
SILVER_LIGHT : 'sl',
URL : 'url',
};

module.exports.PlaylistCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

module.exports.PlaylistMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

module.exports.PlaylistOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

module.exports.PodcastDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.PodcastDistributionProviderOrderBy = {
};

module.exports.PushNotificationCommandType = {
CLEAR_QUEUE : 'CLEAR_QUEUE',
};

module.exports.PushNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.QuestionCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.QuickPlayDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.QuickPlayDistributionProviderOrderBy = {
};

module.exports.QuizUserEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.RatingCountOrderBy = {
};

module.exports.ReachProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ReachVendorEngineType = {
};

module.exports.RecordScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
SUMMARY_ASC : '+summary',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
SUMMARY_DESC : '-summary',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.RemoteDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ReportInterval = {
DAYS : 'days',
HOURS : 'hours',
MINUTES : 'minutes',
MONTHS : 'months',
TEN_MINUTES : 'ten_minutes',
TEN_SECONDS : 'ten_seconds',
YEARS : 'years',
};

module.exports.ReportOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.ReportType = {
QUIZ : 'quiz.QUIZ',
QUIZ_AGGREGATE_BY_QUESTION : 'quiz.QUIZ_AGGREGATE_BY_QUESTION',
QUIZ_USER_AGGREGATE_BY_QUESTION : 'quiz.QUIZ_USER_AGGREGATE_BY_QUESTION',
QUIZ_USER_PERCENTAGE : 'quiz.QUIZ_USER_PERCENTAGE',
TOP_CONTENT : '1',
CONTENT_DROPOFF : '2',
CONTENT_INTERACTIONS : '3',
MAP_OVERLAY : '4',
TOP_CONTRIBUTORS : '5',
TOP_SYNDICATION : '6',
CONTENT_CONTRIBUTIONS : '7',
USER_ENGAGEMENT : '11',
SPECIFIC_USER_ENGAGEMENT : '12',
USER_TOP_CONTENT : '13',
USER_CONTENT_DROPOFF : '14',
USER_CONTENT_INTERACTIONS : '15',
APPLICATIONS : '16',
USER_USAGE : '17',
SPECIFIC_USER_USAGE : '18',
VAR_USAGE : '19',
TOP_CREATORS : '20',
PLATFORMS : '21',
OPERATING_SYSTEM : '22',
BROWSERS : '23',
LIVE : '24',
TOP_PLAYBACK_CONTEXT : '25',
VPAAS_USAGE : '26',
ENTRY_USAGE : '27',
REACH_USAGE : '28',
TOP_CUSTOM_VAR1 : '29',
MAP_OVERLAY_CITY : '30',
OPERATING_SYSTEM_FAMILIES : '32',
BROWSERS_FAMILIES : '33',
USER_ENGAGEMENT_TIMELINE : '34',
UNIQUE_USERS_PLAY : '35',
MAP_OVERLAY_COUNTRY : '36',
MAP_OVERLAY_REGION : '37',
TOP_CONTENT_CREATOR : '38',
TOP_CONTENT_CONTRIBUTORS : '39',
APP_DOMAIN_UNIQUE_ACTIVE_USERS : '40',
TOP_SOURCES : '41',
VPAAS_USAGE_MULTI : '42',
PERCENTILES : '43',
CONTENT_REPORT_REASONS : '44',
PLAYER_RELATED_INTERACTIONS : '45',
PLAYBACK_RATE : '46',
TOP_USER_CONTENT : '47',
USER_HIGHLIGHTS : '48',
USER_INTERACTIVE_VIDEO : '49',
INTERACTIVE_VIDEO_TOP_NODES : '50',
LATEST_PLAYED_ENTRIES : '51',
CATEGORY_HIGHLIGHTS : '52',
SUB_CATEGORIES : '53',
INTERACTIVE_VIDEO_NODE_TOP_HOTSPOTS : '54',
INTERCATIVE_VIDEO_NODE_SWITCH_TOP_HOTSPOTS : '55',
INTERACTIVE_VIDEO_HOTSPOT_CLICKED_PERCENTILES : '56',
INTERACTIVE_VIDEO_NODE_SWITCH_HOTSPOT_CLICKED_PERCENTILES : '57',
TOP_CUSTOM_VAR2 : '58',
TOP_CUSTOM_VAR3 : '59',
SELF_SERVE_USAGE : '60',
FLAVOR_PARAMS_TRANSCODING_USAGE : '61',
PLAYER_HIGHLIGHTS : '62',
PARTNER_USAGE_HIGHLIGHTS : '63',
CDN_BANDWIDTH_USAGE : '64',
REACH_CATALOG_USAGE : '65',
REACH_PROFILE_USAGE : '66',
SELF_SERVE_BANDWIDTH : '67',
PARTNER_USAGE : '201',
MAP_OVERLAY_COUNTRY_REALTIME : '10001',
MAP_OVERLAY_REGION_REALTIME : '10002',
MAP_OVERLAY_CITY_REALTIME : '10003',
PLATFORMS_REALTIME : '10004',
USERS_OVERVIEW_REALTIME : '10005',
QOS_OVERVIEW_REALTIME : '10006',
DISCOVERY_REALTIME : '10007',
ENTRY_LEVEL_USERS_DISCOVERY_REALTIME : '10008',
ENTRY_LEVEL_USERS_STATUS_REALTIME : '10009',
PLATFORMS_DISCOVERY_REALTIME : '10010',
PLAYBACK_TYPE_REALTIME : '10011',
CONTENT_REALTIME : '10012',
DISCOVERY_VIEW_REALTIME : '10013',
TOP_ENDED_BROADCAST_ENTRIES : '10014',
TOP_LIVE_NOW_ENTRIES : '10015',
CONTENT_DROPOFF_VPAAS : '20001',
TOP_SYNDICATION_VPAAS : '20002',
USER_TOP_CONTENT_VPAAS : '20003',
USER_USAGE_VPAAS : '20004',
PLATFORMS_VPAAS : '20005',
OPERATING_SYSTEM_VPAAS : '20006',
BROWSERS_VPAAS : '20007',
OPERATING_SYSTEM_FAMILIES_VPAAS : '20008',
BROWSERS_FAMILIES_VPAAS : '20009',
USER_ENGAGEMENT_TIMELINE_VPAAS : '20010',
UNIQUE_USERS_PLAY_VPAAS : '20011',
MAP_OVERLAY_COUNTRY_VPAAS : '20012',
MAP_OVERLAY_REGION_VPAAS : '20013',
MAP_OVERLAY_CITY_VPAAS : '20014',
TOP_CONTENT_CREATOR_VPAAS : '20015',
TOP_CONTENT_CONTRIBUTORS_VPAAS : '20016',
TOP_SOURCES_VPAAS : '20017',
CONTENT_REPORT_REASONS_VPAAS : '20018',
PLAYER_RELATED_INTERACTIONS_VPAAS : '20019',
PLAYBACK_RATE_VPAAS : '20020',
PARTNER_USAGE_VPAAS : '20021',
TOP_PLAYBACK_CONTEXT_VPAAS : '20022',
SELF_SERVE_USAGE_VPAAS : '20023',
QOE_OVERVIEW : '30001',
QOE_EXPERIENCE : '30002',
QOE_EXPERIENCE_PLATFORMS : '30003',
QOE_EXPERIENCE_COUNTRY : '30004',
QOE_EXPERIENCE_REGION : '30005',
QOE_EXPERIENCE_CITY : '30006',
QOE_EXPERIENCE_BROWSERS_FAMILIES : '30007',
QOE_EXPERIENCE_BROWSERS : '30008',
QOE_EXPERIENCE_OPERATING_SYSTEM_FAMILIES : '30009',
QOE_EXPERIENCE_OPERATING_SYSTEM : '30010',
QOE_EXPERIENCE_PLAYER_VERSION : '30011',
QOE_EXPERIENCE_ENTRY : '30012',
QOE_EXPERIENCE_ISP : '30013',
QOE_ENGAGEMENT : '30014',
QOE_ENGAGEMENT_PLATFORMS : '30015',
QOE_ENGAGEMENT_COUNTRY : '30016',
QOE_ENGAGEMENT_REGION : '30017',
QOE_ENGAGEMENT_CITY : '30018',
QOE_ENGAGEMENT_BROWSERS_FAMILIES : '30019',
QOE_ENGAGEMENT_BROWSERS : '30020',
QOE_ENGAGEMENT_OPERATING_SYSTEM_FAMILIES : '30021',
QOE_ENGAGEMENT_OPERATING_SYSTEM : '30022',
QOE_ENGAGEMENT_PLAYER_VERSION : '30023',
QOE_ENGAGEMENT_ENTRY : '30024',
QOE_ENGAGEMENT_ISP : '30025',
QOE_STREAM_QUALITY : '30026',
QOE_STREAM_QUALITY_PLATFORMS : '30027',
QOE_STREAM_QUALITY_COUNTRY : '30028',
QOE_STREAM_QUALITY_REGION : '30029',
QOE_STREAM_QUALITY_CITY : '30030',
QOE_STREAM_QUALITY_BROWSERS_FAMILIES : '30031',
QOE_STREAM_QUALITY_BROWSERS : '30032',
QOE_STREAM_QUALITY_OPERATING_SYSTEM_FAMILIES : '30033',
QOE_STREAM_QUALITY_OPERATING_SYSTEM : '30034',
QOE_STREAM_QUALITY_PLAYER_VERSION : '30035',
QOE_STREAM_QUALITY_ENTRY : '30036',
QOE_STREAM_QUALITY_ISP : '30037',
QOE_ERROR_TRACKING : '30038',
QOE_ERROR_TRACKING_CODES : '30039',
QOE_ERROR_TRACKING_PLATFORMS : '30040',
QOE_ERROR_TRACKING_BROWSERS_FAMILIES : '30041',
QOE_ERROR_TRACKING_BROWSERS : '30042',
QOE_ERROR_TRACKING_OPERATING_SYSTEM_FAMILIES : '30043',
QOE_ERROR_TRACKING_OPERATING_SYSTEM : '30044',
QOE_ERROR_TRACKING_PLAYER_VERSION : '30045',
QOE_ERROR_TRACKING_ENTRY : '30046',
QOE_VOD_SESSION_FLOW : '30047',
QOE_LIVE_SESSION_FLOW : '30048',
QOE_EXPERIENCE_CUSTOM_VAR1 : '30049',
QOE_EXPERIENCE_CUSTOM_VAR2 : '30050',
QOE_EXPERIENCE_CUSTOM_VAR3 : '30051',
QOE_ENGAGEMENT_CUSTOM_VAR1 : '30052',
QOE_ENGAGEMENT_CUSTOM_VAR2 : '30053',
QOE_ENGAGEMENT_CUSTOM_VAR3 : '30054',
QOE_STREAM_QUALITY_CUSTOM_VAR1 : '30055',
QOE_STREAM_QUALITY_CUSTOM_VAR2 : '30056',
QOE_STREAM_QUALITY_CUSTOM_VAR3 : '30057',
QOE_ERROR_TRACKING_CUSTOM_VAR1 : '30058',
QOE_ERROR_TRACKING_CUSTOM_VAR2 : '30059',
QOE_ERROR_TRACKING_CUSTOM_VAR3 : '30060',
QOE_EXPERIENCE_APPLICATION_VERSION : '30061',
QOE_ENGAGEMENT_APPLICATION_VERSION : '30062',
QOE_STREAM_QUALITY_APPLICATION_VERSION : '30063',
QOE_ERROR_TRACKING_APPLICATION_VERSION : '30064',
HIGHLIGHTS_WEBCAST : '40001',
ENGAGEMENT_WEBCAST : '40002',
QUALITY_WEBCAST : '40003',
MAP_OVERLAY_COUNTRY_WEBCAST : '40004',
MAP_OVERLAY_REGION_WEBCAST : '40005',
MAP_OVERLAY_CITY_WEBCAST : '40006',
PLATFORMS_WEBCAST : '40007',
TOP_DOMAINS_WEBCAST : '40008',
TOP_USERS_WEBCAST : '40009',
ENGAGEMENT_BREAKDOWN_WEBCAST : '40010',
ENGAGMENT_TIMELINE_WEBCAST : '40011',
ENGAGEMENT_TOOLS_WEBCAST : '40012',
REACTIONS_BREAKDOWN_WEBCAST : '40013',
VE_HIGHLIGHTS : '50000',
VE_REGISTERED_PLATFORMS : '50001',
VE_REGISTERED_INDUSTRY : '50002',
VE_REGISTERED_ROLES : '50003',
VE_REGISTERED_COUNTRIES : '50004',
VE_REGISTERED_WORLD_REGIONS : '50005',
};

module.exports.ResetPassLinkType = {
KMC : '1',
KMS : '2',
KME : '3',
};

module.exports.ResponseProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.RuleActionType = {
DRM_POLICY : 'drm.DRM_POLICY',
ADD_ENTRY_VENDOR_TASK : 'reach.ADD_ENTRY_VENDOR_TASK',
BLOCK : '1',
PREVIEW : '2',
LIMIT_FLAVORS : '3',
ADD_TO_STORAGE : '4',
LIMIT_DELIVERY_PROFILES : '5',
SERVE_FROM_REMOTE_SERVER : '6',
REQUEST_HOST_REGEX : '7',
LIMIT_THUMBNAIL_CAPTURE : '8',
};

module.exports.ScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
SUMMARY_ASC : '+summary',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
SUMMARY_DESC : '-summary',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ScheduleEventRecurrenceDay = {
FRIDAY : 'FR',
MONDAY : 'MO',
SATURDAY : 'SA',
SUNDAY : 'SU',
THURSDAY : 'TH',
TUESDAY : 'TU',
WEDNESDAY : 'WE',
};

module.exports.ScheduleEventRecurrenceFrequency = {
DAILY : 'days',
HOURLY : 'hours',
MINUTELY : 'minutes',
MONTHLY : 'months',
SECONDLY : 'seconds',
WEEKLY : 'weeks',
YEARLY : 'years',
};

module.exports.ScheduleEventResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ScheduledTaskProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
LAST_EXECUTION_STARTED_AT_ASC : '+lastExecutionStartedAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
LAST_EXECUTION_STARTED_AT_DESC : '-lastExecutionStartedAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.SchemaType = {
BULK_UPLOAD_RESULT_XML : 'bulkUploadXml.bulkUploadResultXML',
BULK_UPLOAD_XML : 'bulkUploadXml.bulkUploadXML',
INGEST_API : 'cuePoint.ingestAPI',
SERVE_API : 'cuePoint.serveAPI',
DROP_FOLDER_XML : 'dropFolderXmlBulkUpload.dropFolderXml',
SYNDICATION : 'syndication',
};

module.exports.ScpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.SearchConditionComparison = {
EQUAL : '1',
GREATER_THAN : '2',
GREATER_THAN_OR_EQUAL : '3',
LESS_THAN : '4',
LESS_THAN_OR_EQUAL : '5',
NOT_EQUAL : '6',
};

module.exports.ServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ServerNodeType = {
CONFERENCE_SERVER : 'conference.CONFERENCE_SERVER',
LIVE_CLUSTER_MEDIA_SERVER : 'liveCluster.LIVE_CLUSTER_MEDIA_SERVER',
SIP_SERVER : 'sip.SIP_SERVER',
WOWZA_MEDIA_SERVER : 'wowza.WOWZA_MEDIA_SERVER',
EDGE : '1',
};

module.exports.SftpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ShortLinkOrderBy = {
CREATED_AT_ASC : '+createdAt',
EXPIRES_AT_ASC : '+expiresAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
EXPIRES_AT_DESC : '-expiresAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.SipServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.SourceType = {
LIMELIGHT_LIVE : 'limeLight.LIVE_STREAM',
VELOCIX_LIVE : 'velocix.VELOCIX_LIVE',
FILE : '1',
WEBCAM : '2',
URL : '5',
SEARCH_PROVIDER : '6',
AKAMAI_LIVE : '29',
MANUAL_LIVE_STREAM : '30',
AKAMAI_UNIVERSAL_LIVE : '31',
LIVE_STREAM : '32',
LIVE_CHANNEL : '33',
RECORDED_LIVE : '34',
CLIP : '35',
KALTURA_RECORDED_LIVE : '36',
LECTURE_CAPTURE : '37',
LIVE_STREAM_ONTEXTDATA_CAPTIONS : '42',
};

module.exports.SshDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.StorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.StorageProfileProtocol = {
KONTIKI : 'kontiki.KONTIKI',
KALTURA_DC : '0',
FTP : '1',
SCP : '2',
SFTP : '3',
S3 : '6',
LOCAL : '7',
};

module.exports.SwfFlavorParamsOrderBy = {
};

module.exports.SwfFlavorParamsOutputOrderBy = {
};

module.exports.SyndicationDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.SyndicationFeedEntriesOrderBy = {
CREATED_AT_DESC : '-createdAt',
RECENT : 'recent',
};

module.exports.TaggedObjectType = {
ENTRY : '1',
CATEGORY : '2',
};

module.exports.ThumbAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ThumbCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
INT_ID_ASC : '+intId',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
INT_ID_DESC : '-intId',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.ThumbParamsOrderBy = {
};

module.exports.ThumbParamsOutputOrderBy = {
};

module.exports.TimedThumbAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.TranscriptAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.TranscriptProviderType = {
CIELO24 : 'cielo24.Cielo24',
VOICEBASE : 'voicebase.Voicebase',
};

module.exports.TubeMogulSyndicationFeedCategories = {
ANIMALS_AND_PETS : 'Animals &amp; Pets',
ARTS_AND_ANIMATION : 'Arts &amp; Animation',
AUTOS : 'Autos',
COMEDY : 'Comedy',
COMMERCIALS_PROMOTIONAL : 'Commercials/Promotional',
ENTERTAINMENT : 'Entertainment',
FAMILY_AND_KIDS : 'Family &amp; Kids',
HOW_TO_INSTRUCTIONAL_DIY : 'How To/Instructional/DIY',
MUSIC : 'Music',
NEWS_AND_BLOGS : 'News &amp; Blogs',
SCIENCE_AND_TECHNOLOGY : 'Science &amp; Technology',
SPORTS : 'Sports',
TRAVEL_AND_PLACES : 'Travel &amp; Places',
VIDEO_GAMES : 'Video Games',
VLOGS_PEOPLE : 'Vlogs &amp; People',
};

module.exports.TubeMogulSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UiConfAdminOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UiConfOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UnicornDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UnicornDistributionProviderOrderBy = {
};

module.exports.UploadTokenOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.UserEntryExtendedStatus = {
SYNC_STATUS_ERROR : 'quiz.SYNC_STATUS_ERROR',
SYNC_STATUS_SUCCESS : 'quiz.SYNC_STATUS_SUCCESS',
PLAYBACK_COMPLETE : 'viewHistory.PLAYBACK_COMPLETE',
PLAYBACK_STARTED : 'viewHistory.PLAYBACK_STARTED',
VIEWED : 'viewHistory.VIEWED',
};

module.exports.UserEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UserEntryStatus = {
QUIZ_SUBMITTED : 'quiz.3',
ACTIVE : '1',
DELETED : '2',
};

module.exports.UserEntryType = {
QUIZ : 'quiz.QUIZ',
REGISTRATION : 'registration.REGISTRATION',
VIEW_HISTORY : 'viewHistory.VIEW_HISTORY',
WATCH_LATER : 'watchLater.WATCH_LATER',
};

module.exports.UserLoginDataOrderBy = {
};

module.exports.UserOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.UserRoleOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.VendorCaptionsCatalogItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.VendorCatalogItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.VendorCatalogItemPriceFunction = {
PRICE_PER_MINUTE : 'kReachUtils::calcPricePerMinute',
PRICE_PER_SECOND : 'kReachUtils::calcPricePerSecond',
};

module.exports.VendorCreditRecurrenceFrequency = {
DAILY : 'day',
MONTHLY : 'month',
WEEKLY : 'week',
YEARLY : 'year',
};

module.exports.VendorTranslationCatalogItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.VideoCodec = {
NONE : '',
APCH : 'apch',
APCN : 'apcn',
APCO : 'apco',
APCS : 'apcs',
AV1 : 'av1',
COPY : 'copy',
DNXHD : 'dnxhd',
DV : 'dv',
FLV : 'flv',
H263 : 'h263',
H264 : 'h264',
H264B : 'h264b',
H264H : 'h264h',
H264M : 'h264m',
H265 : 'h265',
MPEG2 : 'mpeg2',
MPEG4 : 'mpeg4',
THEORA : 'theora',
VP6 : 'vp6',
VP8 : 'vp8',
VP9 : 'vp9',
WMV2 : 'wmv2',
WMV3 : 'wmv3',
WVC1A : 'wvc1a',
};

module.exports.VirusScanEngineType = {
CLAMAV_SCAN_ENGINE : 'clamAVScanEngine.ClamAV',
SYMANTEC_SCAN_DIRECT_ENGINE : 'symantecScanEngine.SymantecScanDirectEngine',
SYMANTEC_SCAN_ENGINE : 'symantecScanEngine.SymantecScanEngine',
SYMANTEC_SCAN_JAVA_ENGINE : 'symantecScanEngine.SymantecScanJavaEngine',
};

module.exports.VirusScanProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.WebexDropFolderFileOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_NAME_ASC : '+fileName',
FILE_SIZE_ASC : '+fileSize',
FILE_SIZE_LAST_SET_AT_ASC : '+fileSizeLastSetAt',
ID_ASC : '+id',
PARSED_FLAVOR_ASC : '+parsedFlavor',
PARSED_SLUG_ASC : '+parsedSlug',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
FILE_NAME_DESC : '-fileName',
FILE_SIZE_DESC : '-fileSize',
FILE_SIZE_LAST_SET_AT_DESC : '-fileSizeLastSetAt',
ID_DESC : '-id',
PARSED_FLAVOR_DESC : '-parsedFlavor',
PARSED_SLUG_DESC : '-parsedSlug',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.WebexDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.WidevineFlavorAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.WidevineFlavorParamsOrderBy = {
};

module.exports.WidevineFlavorParamsOutputOrderBy = {
};

module.exports.WidevineProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

module.exports.WidgetOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

module.exports.WowzaMediaServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.YahooDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.YahooDistributionProviderOrderBy = {
};

module.exports.YahooSyndicationFeedAdultValues = {
ADULT : 'adult',
NON_ADULT : 'nonadult',
};

module.exports.YahooSyndicationFeedCategories = {
ACTION : 'Action',
ANIMALS : 'Animals',
ART_AND_ANIMATION : 'Art &amp; Animation',
COMMERCIALS : 'Commercials',
ENTERTAINMENT_AND_TV : 'Entertainment &amp; TV',
FAMILY : 'Family',
FOOD : 'Food',
FUNNY_VIDEOS : 'Funny Videos',
GAMES : 'Games',
HEALTH_AND_BEAUTY : 'Health &amp; Beauty',
HOW_TO : 'How-To',
MOVIES_AND_SHORTS : 'Movies &amp; Shorts',
MUSIC : 'Music',
NEWS_AND_POLITICS : 'News &amp; Politics',
PEOPLE_AND_VLOGS : 'People &amp; Vlogs',
PRODUCTS_AND_TECH : 'Products &amp; Tech.',
SCIENCE_AND_ENVIRONMENT : 'Science &amp; Environment',
SPORTS : 'Sports',
TRANSPORTATION : 'Transportation',
TRAVEL : 'Travel',
};

module.exports.YahooSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.YouTubeDistributionFeedSpecVersion = {
VERSION_1 : '1',
VERSION_2 : '2',
VERSION_3 : '3',
};

module.exports.YouTubeDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.YouTubeDistributionProviderOrderBy = {
};

module.exports.YoutubeApiDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

module.exports.YoutubeApiDistributionProviderOrderBy = {
};
