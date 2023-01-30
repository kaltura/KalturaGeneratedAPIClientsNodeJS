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
const kaltura = require('./KalturaClientBase');

/**
 *Class definition for the Kaltura service: accessControlProfile.
 * The available service actions:
 * @action add Add new access control profile.
 * @action delete Delete access control profile by id.
 * @action get Get access control profile by id.
 * @action list List access control profiles by filter and pager.
 * @action update Update access control profile by id.
 */
class accessControlProfile{
	
	/**
	 * Add new access control profile.
	 * @param accessControlProfile AccessControlProfile 
	 * @return KalturaAccessControlProfile
	 */
	static add(accessControlProfile){
		let kparams = {};
		kparams.accessControlProfile = accessControlProfile;
		return new kaltura.RequestBuilder('accesscontrolprofile', 'add', kparams);
	};
	
	/**
	 * Delete access control profile by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('accesscontrolprofile', 'delete', kparams);
	};
	
	/**
	 * Get access control profile by id.
	 * @param id int 
	 * @return KalturaAccessControlProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('accesscontrolprofile', 'get', kparams);
	};
	
	/**
	 * List access control profiles by filter and pager.
	 * @param filter AccessControlProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAccessControlProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('accesscontrolprofile', 'list', kparams);
	};
	
	/**
	 * Update access control profile by id.
	 * @param id int 
	 * @param accessControlProfile AccessControlProfile 
	 * @return KalturaAccessControlProfile
	 */
	static update(id, accessControlProfile){
		let kparams = {};
		kparams.id = id;
		kparams.accessControlProfile = accessControlProfile;
		return new kaltura.RequestBuilder('accesscontrolprofile', 'update', kparams);
	};
}
module.exports.accessControlProfile = accessControlProfile;


/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action add Add new Access Control Profile.
 * @action delete Delete Access Control Profile by id.
 * @action get Get Access Control Profile by id.
 * @action list List Access Control Profiles by filter and pager.
 * @action update Update Access Control Profile by id.
 */
class accessControl{
	
	/**
	 * Add new Access Control Profile.
	 * @param accessControl AccessControl 
	 * @return KalturaAccessControl
	 */
	static add(accessControl){
		let kparams = {};
		kparams.accessControl = accessControl;
		return new kaltura.RequestBuilder('accesscontrol', 'add', kparams);
	};
	
	/**
	 * Delete Access Control Profile by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('accesscontrol', 'delete', kparams);
	};
	
	/**
	 * Get Access Control Profile by id.
	 * @param id int 
	 * @return KalturaAccessControl
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('accesscontrol', 'get', kparams);
	};
	
	/**
	 * List Access Control Profiles by filter and pager.
	 * @param filter AccessControlFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAccessControlListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('accesscontrol', 'list', kparams);
	};
	
	/**
	 * Update Access Control Profile by id.
	 * @param id int 
	 * @param accessControl AccessControl 
	 * @return KalturaAccessControl
	 */
	static update(id, accessControl){
		let kparams = {};
		kparams.id = id;
		kparams.accessControl = accessControl;
		return new kaltura.RequestBuilder('accesscontrol', 'update', kparams);
	};
}
module.exports.accessControl = accessControl;


/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action login Get an admin session using admin email and password (Used for login to the KMC application).
 * @action resetPassword Reset admin user password and send it to the users email address.
 * @action setInitialPassword Set initial users password.
 * @action updatePassword Update admin user password and email.
 */
class adminUser{
	
	/**
	 * Get an admin session using admin email and password (Used for login to the KMC application).
	 * @param email string 
	 * @param password string 
	 * @param partnerId int  (optional, default: null)
	 * @return string
	 */
	static login(email, password, partnerId = null){
		let kparams = {};
		kparams.email = email;
		kparams.password = password;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('adminuser', 'login', kparams);
	};
	
	/**
	 * Reset admin user password and send it to the users email address.
	 * @param email string 
	 */
	static resetPassword(email){
		let kparams = {};
		kparams.email = email;
		return new kaltura.RequestBuilder('adminuser', 'resetPassword', kparams);
	};
	
	/**
	 * Set initial users password.
	 * @param hashKey string 
	 * @param newPassword string new password to set
	 * @return KalturaAuthentication
	 */
	static setInitialPassword(hashKey, newPassword){
		let kparams = {};
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new kaltura.RequestBuilder('adminuser', 'setInitialPassword', kparams);
	};
	
	/**
	 * Update admin user password and email.
	 * @param email string 
	 * @param password string 
	 * @param newEmail string Optional, provide only when you want to update the email (optional)
	 * @param newPassword string  (optional)
	 * @param otp string the user's one-time password (optional, default: null)
	 * @return KalturaAdminUser
	 */
	static updatePassword(email, password, newEmail = '', newPassword = '', otp = null){
		let kparams = {};
		kparams.email = email;
		kparams.password = password;
		kparams.newEmail = newEmail;
		kparams.newPassword = newPassword;
		kparams.otp = otp;
		return new kaltura.RequestBuilder('adminuser', 'updatePassword', kparams);
	};
}
module.exports.adminUser = adminUser;


/**
 *Class definition for the Kaltura service: analytics.
 * The available service actions:
 * @action query report query action allows to get a analytics data for specific query dimensions, metrics and filters.
 */
class analytics{
	
	/**
	 * report query action allows to get a analytics data for specific query dimensions, metrics and filters.
	 * @param filter AnalyticsFilter the analytics query filter
	 * @param pager FilterPager the analytics query result pager (optional, default: null)
	 * @return KalturaReportResponse
	 */
	static query(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('analytics', 'query', kparams);
	};
}
module.exports.analytics = analytics;


/**
 *Class definition for the Kaltura service: appToken.
 * The available service actions:
 * @action add Add new application authentication token.
 * @action delete Delete application authentication token by ID.
 * @action get Get application authentication token by ID.
 * @action list List application authentication tokens by filter and pager.
 * @action startSession Starts a new KS (kaltura Session) based on an application authentication token ID.
 * @action update Update application authentication token by ID.
 */
class appToken{
	
	/**
	 * Add new application authentication token.
	 * @param appToken AppToken 
	 * @return KalturaAppToken
	 */
	static add(appToken){
		let kparams = {};
		kparams.appToken = appToken;
		return new kaltura.RequestBuilder('apptoken', 'add', kparams);
	};
	
	/**
	 * Delete application authentication token by ID.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'delete', kparams);
	};
	
	/**
	 * Get application authentication token by ID.
	 * @param id string 
	 * @return KalturaAppToken
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'get', kparams);
	};
	
	/**
	 * List application authentication tokens by filter and pager.
	 * @param filter AppTokenFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAppTokenListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('apptoken', 'list', kparams);
	};
	
	/**
	 * Starts a new KS (kaltura Session) based on an application authentication token ID.
	 * @param id string application token ID
	 * @param tokenHash string a hash [MD5, SHA1, SHA256 and SHA512 are supported] of the current KS concatenated with the application token
	 * @param userId string session user ID, will be ignored if a different user ID already defined on the application token (optional, default: null)
	 * @param type int session type, will be ignored if a different session type is already defined on the application token (optional, enum: KalturaSessionType, default: null)
	 * @param expiry int session expiry (in seconds), could be overridden by shorter expiry of the application token (optional, default: null)
	 * @param sessionPrivileges string session privileges, will be ignored if a similar privilege is already defined on the application token or the privilege is server reserved (optional, default: null)
	 * @return KalturaSessionInfo
	 */
	static startSession(id, tokenHash, userId = null, type = null, expiry = null, sessionPrivileges = null){
		let kparams = {};
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.sessionPrivileges = sessionPrivileges;
		return new kaltura.RequestBuilder('apptoken', 'startSession', kparams);
	};
	
	/**
	 * Update application authentication token by ID.
	 * @param id string 
	 * @param appToken AppToken 
	 * @return KalturaAppToken
	 */
	static update(id, appToken){
		let kparams = {};
		kparams.id = id;
		kparams.appToken = appToken;
		return new kaltura.RequestBuilder('apptoken', 'update', kparams);
	};
}
module.exports.appToken = appToken;


/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action add Generic add entry, should be used when the uploaded entry type is not known.
 * @action addContent Attach content resource to entry in status NO_MEDIA.
 * @action addFromUploadedFile Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action anonymousRank Anonymously rank an entry, no validation is done on duplicate rankings.
 * @action approve Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action clone Clone an entry with optional attributes to apply to the clone.
 * @action count Count base entries by filter.
 * @action delete Delete an entry.
 * @action export .
 * @action exportToCsv add batch job that sends an email with a link to download an updated CSV that contains list of entries.
 * @action flag Flag inappropriate entry for moderation.
 * @action get Get base entry by ID.
 * @action getByIds Get an array of KalturaBaseEntry objects by a comma-separated list of ids.
 * @action getContextData This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
 * @action getPlaybackContext This action delivers all data relevant for player.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action index Index an entry by id.
 * @action list List base entries by filter with paging support.
 * @action listByReferenceId List base entries by filter according to reference id.
 * @action listFlags List all pending flags for the entry.
 * @action reject Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
 * @action update Update base entry. Only the properties that were set will be updated.
 * @action updateContent Update the content resource associated with the entry.
 * @action updateThumbnailFromSourceEntry Update entry thumbnail from a different entry by a specified time offset (in seconds).
 * @action updateThumbnailFromUrl Update entry thumbnail using URL.
 * @action updateThumbnailJpeg Update entry thumbnail using a raw jpeg file.
 * @action upload Upload a file to Kaltura, that can be used to create an entry.
 */
class baseEntry{
	
	/**
	 * Generic add entry, should be used when the uploaded entry type is not known.
	 * @param entry BaseEntry 
	 * @param type string  (optional, enum: KalturaEntryType, default: null)
	 * @return KalturaBaseEntry
	 */
	static add(entry, type = null){
		let kparams = {};
		kparams.entry = entry;
		kparams.type = type;
		return new kaltura.RequestBuilder('baseentry', 'add', kparams);
	};
	
	/**
	 * Attach content resource to entry in status NO_MEDIA.
	 * @param entryId string 
	 * @param resource Resource 
	 * @return KalturaBaseEntry
	 */
	static addContent(entryId, resource){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new kaltura.RequestBuilder('baseentry', 'addContent', kparams);
	};
	
	/**
	 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
	 * @param entry BaseEntry 
	 * @param uploadTokenId string 
	 * @param type string  (optional, enum: KalturaEntryType, default: null)
	 * @return KalturaBaseEntry
	 */
	static addFromUploadedFile(entry, uploadTokenId, type = null){
		let kparams = {};
		kparams.entry = entry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.type = type;
		return new kaltura.RequestBuilder('baseentry', 'addFromUploadedFile', kparams);
	};
	
	/**
	 * Anonymously rank an entry, no validation is done on duplicate rankings.
	 * @param entryId string 
	 * @param rank int 
	 */
	static anonymousRank(entryId, rank){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new kaltura.RequestBuilder('baseentry', 'anonymousRank', kparams);
	};
	
	/**
	 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
	 * @param entryId string 
	 */
	static approve(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('baseentry', 'approve', kparams);
	};
	
	/**
	 * Clone an entry with optional attributes to apply to the clone.
	 * @param entryId string Id of entry to clone
	 * @param cloneOptions array  (optional, default: null)
	 * @return KalturaBaseEntry
	 */
	static cloneAction(entryId, cloneOptions = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.cloneOptions = cloneOptions;
		return new kaltura.RequestBuilder('baseentry', 'clone', kparams);
	};
	
	/**
	 * Count base entries by filter.
	 * @param filter BaseEntryFilter Entry filter (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('baseentry', 'count', kparams);
	};
	
	/**
	 * Delete an entry.
	 * @param entryId string Entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('baseentry', 'delete', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param storageProfileId int 
	 * @return KalturaBaseEntry
	 */
	static exportAction(entryId, storageProfileId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.storageProfileId = storageProfileId;
		return new kaltura.RequestBuilder('baseentry', 'export', kparams);
	};
	
	/**
	 * add batch job that sends an email with a link to download an updated CSV that contains list of entries.
	 * @param filter BaseEntryFilter A filter used to exclude specific entries (optional, default: null)
	 * @param metadataProfileId int  (optional, default: null)
	 * @param additionalFields array  (optional, default: null)
	 * @param mappedFields array mapping between field headline and its mapped value (optional, default: null)
	 * @param options ExportToCsvOptions  (optional, default: null)
	 * @return string
	 */
	static exportToCsv(filter = null, metadataProfileId = null, additionalFields = null, mappedFields = null, options = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.metadataProfileId = metadataProfileId;
		kparams.additionalFields = additionalFields;
		kparams.mappedFields = mappedFields;
		kparams.options = options;
		return new kaltura.RequestBuilder('baseentry', 'exportToCsv', kparams);
	};
	
	/**
	 * Flag inappropriate entry for moderation.
	 * @param moderationFlag ModerationFlag 
	 */
	static flag(moderationFlag){
		let kparams = {};
		kparams.moderationFlag = moderationFlag;
		return new kaltura.RequestBuilder('baseentry', 'flag', kparams);
	};
	
	/**
	 * Get base entry by ID.
	 * @param entryId string Entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaBaseEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('baseentry', 'get', kparams);
	};
	
	/**
	 * Get an array of KalturaBaseEntry objects by a comma-separated list of ids.
	 * @param entryIds string Comma separated string of entry ids
	 * @return array
	 */
	static getByIds(entryIds){
		let kparams = {};
		kparams.entryIds = entryIds;
		return new kaltura.RequestBuilder('baseentry', 'getByIds', kparams);
	};
	
	/**
	 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
	 * @param entryId string 
	 * @param contextDataParams EntryContextDataParams 
	 * @return KalturaEntryContextDataResult
	 */
	static getContextData(entryId, contextDataParams){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.contextDataParams = contextDataParams;
		return new kaltura.RequestBuilder('baseentry', 'getContextData', kparams);
	};
	
	/**
	 * This action delivers all data relevant for player.
	 * @param entryId string 
	 * @param contextDataParams PlaybackContextOptions 
	 * @return KalturaPlaybackContext
	 */
	static getPlaybackContext(entryId, contextDataParams){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.contextDataParams = contextDataParams;
		return new kaltura.RequestBuilder('baseentry', 'getPlaybackContext', kparams);
	};
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param entryId string 
	 * @return KalturaRemotePathListResponse
	 */
	static getRemotePaths(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('baseentry', 'getRemotePaths', kparams);
	};
	
	/**
	 * Index an entry by id.
	 * @param id string 
	 * @param shouldUpdate bool  (optional, default: true)
	 * @return int
	 */
	static index(id, shouldUpdate = true){
		let kparams = {};
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('baseentry', 'index', kparams);
	};
	
	/**
	 * List base entries by filter with paging support.
	 * @param filter BaseEntryFilter Entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaBaseEntryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('baseentry', 'list', kparams);
	};
	
	/**
	 * List base entries by filter according to reference id.
	 * @param refId string Entry Reference ID
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaBaseEntryListResponse
	 */
	static listByReferenceId(refId, pager = null){
		let kparams = {};
		kparams.refId = refId;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('baseentry', 'listByReferenceId', kparams);
	};
	
	/**
	 * List all pending flags for the entry.
	 * @param entryId string 
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaModerationFlagListResponse
	 */
	static listFlags(entryId, pager = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('baseentry', 'listFlags', kparams);
	};
	
	/**
	 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
	 * @param entryId string 
	 */
	static reject(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('baseentry', 'reject', kparams);
	};
	
	/**
	 * Update base entry. Only the properties that were set will be updated.
	 * @param entryId string Entry id to update
	 * @param baseEntry BaseEntry Base entry metadata to update
	 * @return KalturaBaseEntry
	 */
	static update(entryId, baseEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.baseEntry = baseEntry;
		return new kaltura.RequestBuilder('baseentry', 'update', kparams);
	};
	
	/**
	 * Update the content resource associated with the entry.
	 * @param entryId string Entry id to update
	 * @param resource Resource Resource to be used to replace entry content
	 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null)
	 * @param advancedOptions EntryReplacementOptions Additional update content options (optional, default: null)
	 * @return KalturaBaseEntry
	 */
	static updateContent(entryId, resource, conversionProfileId = null, advancedOptions = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		kparams.advancedOptions = advancedOptions;
		return new kaltura.RequestBuilder('baseentry', 'updateContent', kparams);
	};
	
	/**
	 * Update entry thumbnail from a different entry by a specified time offset (in seconds).
	 * @param entryId string Media entry id
	 * @param sourceEntryId string Media entry id
	 * @param timeOffset int Time offset (in seconds)
	 * @return KalturaBaseEntry
	 */
	static updateThumbnailFromSourceEntry(entryId, sourceEntryId, timeOffset){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		return new kaltura.RequestBuilder('baseentry', 'updateThumbnailFromSourceEntry', kparams);
	};
	
	/**
	 * Update entry thumbnail using URL.
	 * @param entryId string Media entry id
	 * @param url string file url
	 * @return KalturaBaseEntry
	 */
	static updateThumbnailFromUrl(entryId, url){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.url = url;
		return new kaltura.RequestBuilder('baseentry', 'updateThumbnailFromUrl', kparams);
	};
	
	/**
	 * Update entry thumbnail using a raw jpeg file.
	 * @param entryId string Media entry id
	 * @param fileData file Jpeg file data
	 * @return KalturaBaseEntry
	 */
	static updateThumbnailJpeg(entryId, fileData){
		let kparams = {};
		kparams.entryId = entryId;
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('baseentry', 'updateThumbnailJpeg', kparams, kfiles);
	};
	
	/**
	 * Upload a file to Kaltura, that can be used to create an entry.
	 * @param fileData file The file data
	 * @return string
	 */
	static upload(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('baseentry', 'upload', kparams, kfiles);
	};
}
module.exports.baseEntry = baseEntry;


/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action abort Aborts the bulk upload and all its child jobs.
 * @action add Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 */
class bulkUpload{
	
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param id int job id
	 * @return KalturaBulkUpload
	 */
	static abort(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('bulkupload', 'abort', kparams);
	};
	
	/**
	 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
	 * @param conversionProfileId int Conversion profile id to use for converting the current bulk (-1 to use partner's default)
	 * @param csvFileData file bulk upload file
	 * @param bulkUploadType string  (optional, enum: KalturaBulkUploadType, default: null)
	 * @param uploadedBy string  (optional, default: null)
	 * @param fileName string Friendly name of the file, used to be recognized later in the logs (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static add(conversionProfileId, csvFileData, bulkUploadType = null, uploadedBy = null, fileName = null){
		let kparams = {};
		kparams.conversionProfileId = conversionProfileId;
		let kfiles = {};
		kfiles.csvFileData = csvFileData;
		kparams.bulkUploadType = bulkUploadType;
		kparams.uploadedBy = uploadedBy;
		kparams.fileName = fileName;
		return new kaltura.RequestBuilder('bulkupload', 'add', kparams, kfiles);
	};
	
	/**
	 * Get bulk upload batch job by id.
	 * @param id int 
	 * @return KalturaBulkUpload
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('bulkupload', 'get', kparams);
	};
	
	/**
	 * List bulk upload batch jobs.
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaBulkUploadListResponse
	 */
	static listAction(pager = null){
		let kparams = {};
		kparams.pager = pager;
		return new kaltura.RequestBuilder('bulkupload', 'list', kparams);
	};
}
module.exports.bulkUpload = bulkUpload;


/**
 *Class definition for the Kaltura service: categoryEntry.
 * The available service actions:
 * @action activate activate CategoryEntry when it is pending moderation.
 * @action add Add new CategoryEntry.
 * @action addFromBulkUpload .
 * @action delete Delete CategoryEntry.
 * @action index Index CategoryEntry by Id.
 * @action list List all categoryEntry.
 * @action reject activate CategoryEntry when it is pending moderation.
 * @action syncPrivacyContext update privacy context from the category.
 * @action updateStatusFromBulk .
 */
class categoryEntry{
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param entryId string 
	 * @param categoryId int 
	 */
	static activate(entryId, categoryId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new kaltura.RequestBuilder('categoryentry', 'activate', kparams);
	};
	
	/**
	 * Add new CategoryEntry.
	 * @param categoryEntry CategoryEntry 
	 * @return KalturaCategoryEntry
	 */
	static add(categoryEntry){
		let kparams = {};
		kparams.categoryEntry = categoryEntry;
		return new kaltura.RequestBuilder('categoryentry', 'add', kparams);
	};
	
	/**
	 * .
	 * @param bulkUploadData BulkServiceData 
	 * @param bulkUploadCategoryEntryData BulkUploadCategoryEntryData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(bulkUploadData, bulkUploadCategoryEntryData = null){
		let kparams = {};
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new kaltura.RequestBuilder('categoryentry', 'addFromBulkUpload', kparams);
	};
	
	/**
	 * Delete CategoryEntry.
	 * @param entryId string 
	 * @param categoryId int 
	 */
	static deleteAction(entryId, categoryId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new kaltura.RequestBuilder('categoryentry', 'delete', kparams);
	};
	
	/**
	 * Index CategoryEntry by Id.
	 * @param entryId string 
	 * @param categoryId int 
	 * @param shouldUpdate bool  (optional, default: true)
	 * @return int
	 */
	static index(entryId, categoryId, shouldUpdate = true){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('categoryentry', 'index', kparams);
	};
	
	/**
	 * List all categoryEntry.
	 * @param filter CategoryEntryFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCategoryEntryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('categoryentry', 'list', kparams);
	};
	
	/**
	 * activate CategoryEntry when it is pending moderation.
	 * @param entryId string 
	 * @param categoryId int 
	 */
	static reject(entryId, categoryId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new kaltura.RequestBuilder('categoryentry', 'reject', kparams);
	};
	
	/**
	 * update privacy context from the category.
	 * @param entryId string 
	 * @param categoryId int 
	 */
	static syncPrivacyContext(entryId, categoryId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.categoryId = categoryId;
		return new kaltura.RequestBuilder('categoryentry', 'syncPrivacyContext', kparams);
	};
	
	/**
	 * .
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadCategoryEntryData BulkUploadCategoryEntryData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static updateStatusFromBulk(fileData, bulkUploadData = null, bulkUploadCategoryEntryData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadCategoryEntryData = bulkUploadCategoryEntryData;
		return new kaltura.RequestBuilder('categoryentry', 'updateStatusFromBulk', kparams, kfiles);
	};
}
module.exports.categoryEntry = categoryEntry;


/**
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action add Add new Category.
 * @action addFromBulkUpload .
 * @action clone Clone Category.
 * @action delete Delete a Category.
 * @action exportToCsv Creates a batch job that sends an email with a link to download a CSV containing a list of categories.
 * @action get Get Category by id.
 * @action index Index Category by id.
 * @action list List all categories.
 * @action move Move categories that belong to the same parent category to a target category - enabled only for ks with disable entitlement.
 * @action unlockCategories Unlock categories.
 * @action update Update Category.
 */
class category{
	
	/**
	 * Add new Category.
	 * @param category Category 
	 * @return KalturaCategory
	 */
	static add(category){
		let kparams = {};
		kparams.category = category;
		return new kaltura.RequestBuilder('category', 'add', kparams);
	};
	
	/**
	 * .
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadCategoryData BulkUploadCategoryData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null, bulkUploadCategoryData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadCategoryData = bulkUploadCategoryData;
		return new kaltura.RequestBuilder('category', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Clone Category.
	 * @param categoryId int 
	 * @param fromPartnerId int 
	 * @param parentCategoryId int  (optional, default: null)
	 * @return KalturaCategory
	 */
	static cloneAction(categoryId, fromPartnerId, parentCategoryId = null){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.fromPartnerId = fromPartnerId;
		kparams.parentCategoryId = parentCategoryId;
		return new kaltura.RequestBuilder('category', 'clone', kparams);
	};
	
	/**
	 * Delete a Category.
	 * @param id int 
	 * @param moveEntriesToParentCategory int  (optional, enum: KalturaNullableBoolean, default: 1)
	 */
	static deleteAction(id, moveEntriesToParentCategory = 1){
		let kparams = {};
		kparams.id = id;
		kparams.moveEntriesToParentCategory = moveEntriesToParentCategory;
		return new kaltura.RequestBuilder('category', 'delete', kparams);
	};
	
	/**
	 * Creates a batch job that sends an email with a link to download a CSV containing a list of categories.
	 * @param filter CategoryFilter A filter used to exclude specific categories (optional, default: null)
	 * @param metadataProfileId int  (optional, default: null)
	 * @param additionalFields array  (optional, default: null)
	 * @param mappedFields array mapping between field headline and its mapped value (optional, default: null)
	 * @param options ExportToCsvOptions  (optional, default: null)
	 * @return string
	 */
	static exportToCsv(filter = null, metadataProfileId = null, additionalFields = null, mappedFields = null, options = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.metadataProfileId = metadataProfileId;
		kparams.additionalFields = additionalFields;
		kparams.mappedFields = mappedFields;
		kparams.options = options;
		return new kaltura.RequestBuilder('category', 'exportToCsv', kparams);
	};
	
	/**
	 * Get Category by id.
	 * @param id int 
	 * @return KalturaCategory
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('category', 'get', kparams);
	};
	
	/**
	 * Index Category by id.
	 * @param id int 
	 * @param shouldUpdate bool  (optional, default: true)
	 * @return int
	 */
	static index(id, shouldUpdate = true){
		let kparams = {};
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('category', 'index', kparams);
	};
	
	/**
	 * List all categories.
	 * @param filter CategoryFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCategoryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('category', 'list', kparams);
	};
	
	/**
	 * Move categories that belong to the same parent category to a target category - enabled only for ks with disable entitlement.
	 * @param categoryIds string 
	 * @param targetCategoryParentId int 
	 * @return bool
	 */
	static move(categoryIds, targetCategoryParentId){
		let kparams = {};
		kparams.categoryIds = categoryIds;
		kparams.targetCategoryParentId = targetCategoryParentId;
		return new kaltura.RequestBuilder('category', 'move', kparams);
	};
	
	/**
	 * Unlock categories.
	 */
	static unlockCategories(){
		let kparams = {};
		return new kaltura.RequestBuilder('category', 'unlockCategories', kparams);
	};
	
	/**
	 * Update Category.
	 * @param id int 
	 * @param category Category 
	 * @return KalturaCategory
	 */
	static update(id, category){
		let kparams = {};
		kparams.id = id;
		kparams.category = category;
		return new kaltura.RequestBuilder('category', 'update', kparams);
	};
}
module.exports.category = category;


/**
 *Class definition for the Kaltura service: categoryUser.
 * The available service actions:
 * @action activate activate CategoryUser.
 * @action add Add new CategoryUser.
 * @action addFromBulkUpload .
 * @action copyFromCategory Copy all member from parent category.
 * @action deactivate reject CategoryUser.
 * @action delete Delete a CategoryUser.
 * @action get Get CategoryUser by id.
 * @action index Index CategoryUser by userid and category id.
 * @action list List all categories.
 * @action update Update CategoryUser by id.
 */
class categoryUser{
	
	/**
	 * activate CategoryUser.
	 * @param categoryId int 
	 * @param userId string 
	 * @return KalturaCategoryUser
	 */
	static activate(categoryId, userId){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('categoryuser', 'activate', kparams);
	};
	
	/**
	 * Add new CategoryUser.
	 * @param categoryUser CategoryUser 
	 * @return KalturaCategoryUser
	 */
	static add(categoryUser){
		let kparams = {};
		kparams.categoryUser = categoryUser;
		return new kaltura.RequestBuilder('categoryuser', 'add', kparams);
	};
	
	/**
	 * .
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadCategoryUserData BulkUploadCategoryUserData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null, bulkUploadCategoryUserData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadCategoryUserData = bulkUploadCategoryUserData;
		return new kaltura.RequestBuilder('categoryuser', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Copy all member from parent category.
	 * @param categoryId int 
	 */
	static copyFromCategory(categoryId){
		let kparams = {};
		kparams.categoryId = categoryId;
		return new kaltura.RequestBuilder('categoryuser', 'copyFromCategory', kparams);
	};
	
	/**
	 * reject CategoryUser.
	 * @param categoryId int 
	 * @param userId string 
	 * @return KalturaCategoryUser
	 */
	static deactivate(categoryId, userId){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('categoryuser', 'deactivate', kparams);
	};
	
	/**
	 * Delete a CategoryUser.
	 * @param categoryId int 
	 * @param userId string 
	 */
	static deleteAction(categoryId, userId){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('categoryuser', 'delete', kparams);
	};
	
	/**
	 * Get CategoryUser by id.
	 * @param categoryId int 
	 * @param userId string 
	 * @return KalturaCategoryUser
	 */
	static get(categoryId, userId){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('categoryuser', 'get', kparams);
	};
	
	/**
	 * Index CategoryUser by userid and category id.
	 * @param userId string 
	 * @param categoryId int 
	 * @param shouldUpdate bool  (optional, default: true)
	 * @return int
	 */
	static index(userId, categoryId, shouldUpdate = true){
		let kparams = {};
		kparams.userId = userId;
		kparams.categoryId = categoryId;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('categoryuser', 'index', kparams);
	};
	
	/**
	 * List all categories.
	 * @param filter CategoryUserFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCategoryUserListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('categoryuser', 'list', kparams);
	};
	
	/**
	 * Update CategoryUser by id.
	 * @param categoryId int 
	 * @param userId string 
	 * @param categoryUser CategoryUser 
	 * @param override bool - to override manual changes (optional, default: false)
	 * @return KalturaCategoryUser
	 */
	static update(categoryId, userId, categoryUser, override = false){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.userId = userId;
		kparams.categoryUser = categoryUser;
		kparams.override = override;
		return new kaltura.RequestBuilder('categoryuser', 'update', kparams);
	};
}
module.exports.categoryUser = categoryUser;


/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 * The available service actions:
 * @action list Lists asset parmas of conversion profile by ID.
 * @action update Update asset parmas of conversion profile by ID.
 */
class conversionProfileAssetParams{
	
	/**
	 * Lists asset parmas of conversion profile by ID.
	 * @param filter ConversionProfileAssetParamsFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaConversionProfileAssetParamsListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('conversionprofileassetparams', 'list', kparams);
	};
	
	/**
	 * Update asset parmas of conversion profile by ID.
	 * @param conversionProfileId int 
	 * @param assetParamsId int 
	 * @param conversionProfileAssetParams ConversionProfileAssetParams 
	 * @return KalturaConversionProfileAssetParams
	 */
	static update(conversionProfileId, assetParamsId, conversionProfileAssetParams){
		let kparams = {};
		kparams.conversionProfileId = conversionProfileId;
		kparams.assetParamsId = assetParamsId;
		kparams.conversionProfileAssetParams = conversionProfileAssetParams;
		return new kaltura.RequestBuilder('conversionprofileassetparams', 'update', kparams);
	};
}
module.exports.conversionProfileAssetParams = conversionProfileAssetParams;


/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action add Add new Conversion Profile.
 * @action delete Delete Conversion Profile by ID.
 * @action get Get Conversion Profile by ID.
 * @action getDefault Get the partner's default conversion profile.
 * @action list List Conversion Profiles by filter with paging support.
 * @action setAsDefault Set Conversion Profile to be the partner default.
 * @action update Update Conversion Profile by ID.
 */
class conversionProfile{
	
	/**
	 * Add new Conversion Profile.
	 * @param conversionProfile ConversionProfile 
	 * @return KalturaConversionProfile
	 */
	static add(conversionProfile){
		let kparams = {};
		kparams.conversionProfile = conversionProfile;
		return new kaltura.RequestBuilder('conversionprofile', 'add', kparams);
	};
	
	/**
	 * Delete Conversion Profile by ID.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('conversionprofile', 'delete', kparams);
	};
	
	/**
	 * Get Conversion Profile by ID.
	 * @param id int 
	 * @return KalturaConversionProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('conversionprofile', 'get', kparams);
	};
	
	/**
	 * Get the partner's default conversion profile.
	 * @param type string  (optional, enum: KalturaConversionProfileType, default: null)
	 * @return KalturaConversionProfile
	 */
	static getDefault(type = null){
		let kparams = {};
		kparams.type = type;
		return new kaltura.RequestBuilder('conversionprofile', 'getDefault', kparams);
	};
	
	/**
	 * List Conversion Profiles by filter with paging support.
	 * @param filter ConversionProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaConversionProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('conversionprofile', 'list', kparams);
	};
	
	/**
	 * Set Conversion Profile to be the partner default.
	 * @param id int 
	 * @return KalturaConversionProfile
	 */
	static setAsDefault(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('conversionprofile', 'setAsDefault', kparams);
	};
	
	/**
	 * Update Conversion Profile by ID.
	 * @param id int 
	 * @param conversionProfile ConversionProfile 
	 * @return KalturaConversionProfile
	 */
	static update(id, conversionProfile){
		let kparams = {};
		kparams.id = id;
		kparams.conversionProfile = conversionProfile;
		return new kaltura.RequestBuilder('conversionprofile', 'update', kparams);
	};
}
module.exports.conversionProfile = conversionProfile;


/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action add Adds a new data entry.
 * @action addContent Update the dataContent of data entry using a resource.
 * @action delete Delete a data entry.
 * @action get Get data entry by ID.
 * @action list List data entries by filter with paging support.
 * @action update Update data entry. Only the properties that were set will be updated.
 */
class data{
	
	/**
	 * Adds a new data entry.
	 * @param dataEntry DataEntry Data entry
	 * @return KalturaDataEntry
	 */
	static add(dataEntry){
		let kparams = {};
		kparams.dataEntry = dataEntry;
		return new kaltura.RequestBuilder('data', 'add', kparams);
	};
	
	/**
	 * Update the dataContent of data entry using a resource.
	 * @param entryId string 
	 * @param resource GenericDataCenterContentResource 
	 * @return string
	 */
	static addContent(entryId, resource){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new kaltura.RequestBuilder('data', 'addContent', kparams);
	};
	
	/**
	 * Delete a data entry.
	 * @param entryId string Data entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('data', 'delete', kparams);
	};
	
	/**
	 * Get data entry by ID.
	 * @param entryId string Data entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaDataEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('data', 'get', kparams);
	};
	
	/**
	 * List data entries by filter with paging support.
	 * @param filter DataEntryFilter Document entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaDataListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('data', 'list', kparams);
	};
	
	/**
	 * Update data entry. Only the properties that were set will be updated.
	 * @param entryId string Data entry id to update
	 * @param documentEntry DataEntry Data entry metadata to update
	 * @return KalturaDataEntry
	 */
	static update(entryId, documentEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new kaltura.RequestBuilder('data', 'update', kparams);
	};
}
module.exports.data = data;


/**
 *Class definition for the Kaltura service: deliveryProfile.
 * The available service actions:
 * @action add Add new delivery.
 * @action clone Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
 * @action get Get delivery by id.
 * @action list Retrieve a list of available delivery depends on the filter given.
 * @action update Update existing delivery profile.
 */
class deliveryProfile{
	
	/**
	 * Add new delivery.
	 * @param delivery DeliveryProfile 
	 * @return KalturaDeliveryProfile
	 */
	static add(delivery){
		let kparams = {};
		kparams.delivery = delivery;
		return new kaltura.RequestBuilder('deliveryprofile', 'add', kparams);
	};
	
	/**
	 * Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
	 * @param deliveryId int 
	 * @return KalturaDeliveryProfile
	 */
	static cloneAction(deliveryId){
		let kparams = {};
		kparams.deliveryId = deliveryId;
		return new kaltura.RequestBuilder('deliveryprofile', 'clone', kparams);
	};
	
	/**
	 * Get delivery by id.
	 * @param id string 
	 * @return KalturaDeliveryProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('deliveryprofile', 'get', kparams);
	};
	
	/**
	 * Retrieve a list of available delivery depends on the filter given.
	 * @param filter DeliveryProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDeliveryProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('deliveryprofile', 'list', kparams);
	};
	
	/**
	 * Update existing delivery profile.
	 * @param id string 
	 * @param delivery DeliveryProfile 
	 * @return KalturaDeliveryProfile
	 */
	static update(id, delivery){
		let kparams = {};
		kparams.id = id;
		kparams.delivery = delivery;
		return new kaltura.RequestBuilder('deliveryprofile', 'update', kparams);
	};
}
module.exports.deliveryProfile = deliveryProfile;


/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action add EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action addMediaEntry add KalturaMediaEntry from email ingestion.
 * @action delete Delete an existing EmailIngestionProfile.
 * @action get Retrieve a EmailIngestionProfile by id.
 * @action getByEmailAddress Retrieve a EmailIngestionProfile by email address.
 * @action update Update an existing EmailIngestionProfile.
 */
class EmailIngestionProfile{
	
	/**
	 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
	 * @param EmailIP EmailIngestionProfile Mandatory input parameter of type KalturaEmailIngestionProfile
	 * @return KalturaEmailIngestionProfile
	 */
	static add(EmailIP){
		let kparams = {};
		kparams.EmailIP = EmailIP;
		return new kaltura.RequestBuilder('emailingestionprofile', 'add', kparams);
	};
	
	/**
	 * add KalturaMediaEntry from email ingestion.
	 * @param mediaEntry MediaEntry Media entry metadata
	 * @param uploadTokenId string Upload token id
	 * @param emailProfId int 
	 * @param fromAddress string 
	 * @param emailMsgId string 
	 * @return KalturaMediaEntry
	 */
	static addMediaEntry(mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		kparams.emailProfId = emailProfId;
		kparams.fromAddress = fromAddress;
		kparams.emailMsgId = emailMsgId;
		return new kaltura.RequestBuilder('emailingestionprofile', 'addMediaEntry', kparams);
	};
	
	/**
	 * Delete an existing EmailIngestionProfile.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('emailingestionprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve a EmailIngestionProfile by id.
	 * @param id int 
	 * @return KalturaEmailIngestionProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('emailingestionprofile', 'get', kparams);
	};
	
	/**
	 * Retrieve a EmailIngestionProfile by email address.
	 * @param emailAddress string 
	 * @return KalturaEmailIngestionProfile
	 */
	static getByEmailAddress(emailAddress){
		let kparams = {};
		kparams.emailAddress = emailAddress;
		return new kaltura.RequestBuilder('emailingestionprofile', 'getByEmailAddress', kparams);
	};
	
	/**
	 * Update an existing EmailIngestionProfile.
	 * @param id int 
	 * @param EmailIP EmailIngestionProfile 
	 * @return KalturaEmailIngestionProfile
	 */
	static update(id, EmailIP){
		let kparams = {};
		kparams.id = id;
		kparams.EmailIP = EmailIP;
		return new kaltura.RequestBuilder('emailingestionprofile', 'update', kparams);
	};
}
module.exports.EmailIngestionProfile = EmailIngestionProfile;


/**
 *Class definition for the Kaltura service: entryServerNode.
 * The available service actions:
 * @action get .
 * @action list .
 * @action update .
 * @action updateStatus .
 * @action validateRegisteredEntryServerNode Validates server node still registered on entry.
 */
class entryServerNode{
	
	/**
	 * .
	 * @param id string 
	 * @return KalturaEntryServerNode
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('entryservernode', 'get', kparams);
	};
	
	/**
	 * .
	 * @param filter EntryServerNodeFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEntryServerNodeListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('entryservernode', 'list', kparams);
	};
	
	/**
	 * .
	 * @param id int 
	 * @param entryServerNode EntryServerNode 
	 * @return KalturaEntryServerNode
	 */
	static update(id, entryServerNode){
		let kparams = {};
		kparams.id = id;
		kparams.entryServerNode = entryServerNode;
		return new kaltura.RequestBuilder('entryservernode', 'update', kparams);
	};
	
	/**
	 * .
	 * @param id string 
	 * @param status int  (enum: KalturaEntryServerNodeStatus)
	 * @return KalturaEntryServerNode
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('entryservernode', 'updateStatus', kparams);
	};
	
	/**
	 * Validates server node still registered on entry.
	 * @param id int entry server node id
	 */
	static validateRegisteredEntryServerNode(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('entryservernode', 'validateRegisteredEntryServerNode', kparams);
	};
}
module.exports.entryServerNode = entryServerNode;


/**
 *Class definition for the Kaltura service: exportcsv.
 * The available service actions:
 * @action serveCsv Will serve a requested CSV.
 */
class exportcsv{
	
	/**
	 * Will serve a requested CSV.
	 * @param id string - the requested file id
	 * @return string
	 */
	static serveCsv(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('exportcsv', 'serveCsv', kparams);
	};
}
module.exports.exportcsv = exportcsv;


/**
 *Class definition for the Kaltura service: fileAsset.
 * The available service actions:
 * @action add Add new file asset.
 * @action delete Delete file asset by id.
 * @action get Get file asset by id.
 * @action list List file assets by filter and pager.
 * @action setContent Set content of file asset.
 * @action update Update file asset by id.
 */
class fileAsset{
	
	/**
	 * Add new file asset.
	 * @param fileAsset FileAsset 
	 * @return KalturaFileAsset
	 */
	static add(fileAsset){
		let kparams = {};
		kparams.fileAsset = fileAsset;
		return new kaltura.RequestBuilder('fileasset', 'add', kparams);
	};
	
	/**
	 * Delete file asset by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('fileasset', 'delete', kparams);
	};
	
	/**
	 * Get file asset by id.
	 * @param id int 
	 * @return KalturaFileAsset
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('fileasset', 'get', kparams);
	};
	
	/**
	 * List file assets by filter and pager.
	 * @param filter FileAssetFilter 
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaFileAssetListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('fileasset', 'list', kparams);
	};
	
	/**
	 * Set content of file asset.
	 * @param id int 
	 * @param contentResource ContentResource 
	 * @return KalturaFileAsset
	 */
	static setContent(id, contentResource){
		let kparams = {};
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new kaltura.RequestBuilder('fileasset', 'setContent', kparams);
	};
	
	/**
	 * Update file asset by id.
	 * @param id int 
	 * @param fileAsset FileAsset 
	 * @return KalturaFileAsset
	 */
	static update(id, fileAsset){
		let kparams = {};
		kparams.id = id;
		kparams.fileAsset = fileAsset;
		return new kaltura.RequestBuilder('fileasset', 'update', kparams);
	};
}
module.exports.fileAsset = fileAsset;


/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action add Add flavor asset.
 * @action convert Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @action delete Delete Flavor Asset by ID.
 * @action deleteLocalContent delete all local file syncs for this asset.
 * @action export manually export an asset.
 * @action get Get Flavor Asset by ID.
 * @action getByEntryId Get Flavor Assets for Entry.
 * @action getDownloadUrl Get download URL for the Flavor Asset.
 * @action getFlavorAssetsWithParams Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getUrl Get download URL for the asset.
 * @action getWebPlayableByEntryId Get web playable Flavor Assets for Entry.
 * @action list List Flavor Assets by filter and pager.
 * @action reconvert Reconvert Flavor Asset by ID.
 * @action serveAdStitchCmd serve cmd line to transcode the ad.
 * @action setAsSource Set a given flavor as the original flavor.
 * @action setContent Update content of flavor asset.
 * @action update Update flavor asset.
 */
class flavorAsset{
	
	/**
	 * Add flavor asset.
	 * @param entryId string 
	 * @param flavorAsset FlavorAsset 
	 * @return KalturaFlavorAsset
	 */
	static add(entryId, flavorAsset){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.flavorAsset = flavorAsset;
		return new kaltura.RequestBuilder('flavorasset', 'add', kparams);
	};
	
	/**
	 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
	 * @param entryId string 
	 * @param flavorParamsId int 
	 * @param priority int  (optional)
	 */
	static convert(entryId, flavorParamsId, priority = 0){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.flavorParamsId = flavorParamsId;
		kparams.priority = priority;
		return new kaltura.RequestBuilder('flavorasset', 'convert', kparams);
	};
	
	/**
	 * Delete Flavor Asset by ID.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorasset', 'delete', kparams);
	};
	
	/**
	 * delete all local file syncs for this asset.
	 * @param assetId string 
	 */
	static deleteLocalContent(assetId){
		let kparams = {};
		kparams.assetId = assetId;
		return new kaltura.RequestBuilder('flavorasset', 'deleteLocalContent', kparams);
	};
	
	/**
	 * manually export an asset.
	 * @param assetId string 
	 * @param storageProfileId int 
	 * @return KalturaFlavorAsset
	 */
	static exportAction(assetId, storageProfileId){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new kaltura.RequestBuilder('flavorasset', 'export', kparams);
	};
	
	/**
	 * Get Flavor Asset by ID.
	 * @param id string 
	 * @return KalturaFlavorAsset
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorasset', 'get', kparams);
	};
	
	/**
	 * Get Flavor Assets for Entry.
	 * @param entryId string 
	 * @return array
	 */
	static getByEntryId(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('flavorasset', 'getByEntryId', kparams);
	};
	
	/**
	 * Get download URL for the Flavor Asset.
	 * @param id string 
	 * @param useCdn bool  (optional, default: false)
	 * @return string
	 */
	static getDownloadUrl(id, useCdn = false){
		let kparams = {};
		kparams.id = id;
		kparams.useCdn = useCdn;
		return new kaltura.RequestBuilder('flavorasset', 'getDownloadUrl', kparams);
	};
	
	/**
	 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
	 * @param entryId string 
	 * @return array
	 */
	static getFlavorAssetsWithParams(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('flavorasset', 'getFlavorAssetsWithParams', kparams);
	};
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param id string 
	 * @return KalturaRemotePathListResponse
	 */
	static getRemotePaths(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorasset', 'getRemotePaths', kparams);
	};
	
	/**
	 * Get download URL for the asset.
	 * @param id string 
	 * @param storageId int  (optional, default: null)
	 * @param forceProxy bool  (optional, default: false)
	 * @param options FlavorAssetUrlOptions  (optional, default: null)
	 * @return string
	 */
	static getUrl(id, storageId = null, forceProxy = false, options = null){
		let kparams = {};
		kparams.id = id;
		kparams.storageId = storageId;
		kparams.forceProxy = forceProxy;
		kparams.options = options;
		return new kaltura.RequestBuilder('flavorasset', 'getUrl', kparams);
	};
	
	/**
	 * Get web playable Flavor Assets for Entry.
	 * @param entryId string 
	 * @return array
	 */
	static getWebPlayableByEntryId(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('flavorasset', 'getWebPlayableByEntryId', kparams);
	};
	
	/**
	 * List Flavor Assets by filter and pager.
	 * @param filter AssetFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaFlavorAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('flavorasset', 'list', kparams);
	};
	
	/**
	 * Reconvert Flavor Asset by ID.
	 * @param id string Flavor Asset ID
	 */
	static reconvert(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorasset', 'reconvert', kparams);
	};
	
	/**
	 * serve cmd line to transcode the ad.
	 * @param assetId string 
	 * @param ffprobeJson string  (optional, default: null)
	 * @param duration string  (optional, default: null)
	 * @return string
	 */
	static serveAdStitchCmd(assetId, ffprobeJson = null, duration = null){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.ffprobeJson = ffprobeJson;
		kparams.duration = duration;
		return new kaltura.RequestBuilder('flavorasset', 'serveAdStitchCmd', kparams);
	};
	
	/**
	 * Set a given flavor as the original flavor.
	 * @param assetId string 
	 */
	static setAsSource(assetId){
		let kparams = {};
		kparams.assetId = assetId;
		return new kaltura.RequestBuilder('flavorasset', 'setAsSource', kparams);
	};
	
	/**
	 * Update content of flavor asset.
	 * @param id string 
	 * @param contentResource ContentResource 
	 * @return KalturaFlavorAsset
	 */
	static setContent(id, contentResource){
		let kparams = {};
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new kaltura.RequestBuilder('flavorasset', 'setContent', kparams);
	};
	
	/**
	 * Update flavor asset.
	 * @param id string 
	 * @param flavorAsset FlavorAsset 
	 * @return KalturaFlavorAsset
	 */
	static update(id, flavorAsset){
		let kparams = {};
		kparams.id = id;
		kparams.flavorAsset = flavorAsset;
		return new kaltura.RequestBuilder('flavorasset', 'update', kparams);
	};
}
module.exports.flavorAsset = flavorAsset;


/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 * The available service actions:
 * @action get Get flavor params output object by ID.
 * @action list List flavor params output objects by filter and pager.
 */
class flavorParamsOutput{
	
	/**
	 * Get flavor params output object by ID.
	 * @param id int 
	 * @return KalturaFlavorParamsOutput
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorparamsoutput', 'get', kparams);
	};
	
	/**
	 * List flavor params output objects by filter and pager.
	 * @param filter FlavorParamsOutputFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaFlavorParamsOutputListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('flavorparamsoutput', 'list', kparams);
	};
}
module.exports.flavorParamsOutput = flavorParamsOutput;


/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action add Add new Flavor Params.
 * @action delete Delete Flavor Params by ID.
 * @action get Get Flavor Params by ID.
 * @action getByConversionProfileId Get Flavor Params by Conversion Profile ID.
 * @action list List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @action update Update Flavor Params by ID.
 */
class flavorParams{
	
	/**
	 * Add new Flavor Params.
	 * @param flavorParams FlavorParams 
	 * @return KalturaFlavorParams
	 */
	static add(flavorParams){
		let kparams = {};
		kparams.flavorParams = flavorParams;
		return new kaltura.RequestBuilder('flavorparams', 'add', kparams);
	};
	
	/**
	 * Delete Flavor Params by ID.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorparams', 'delete', kparams);
	};
	
	/**
	 * Get Flavor Params by ID.
	 * @param id int 
	 * @return KalturaFlavorParams
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('flavorparams', 'get', kparams);
	};
	
	/**
	 * Get Flavor Params by Conversion Profile ID.
	 * @param conversionProfileId int 
	 * @return array
	 */
	static getByConversionProfileId(conversionProfileId){
		let kparams = {};
		kparams.conversionProfileId = conversionProfileId;
		return new kaltura.RequestBuilder('flavorparams', 'getByConversionProfileId', kparams);
	};
	
	/**
	 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
	 * @param filter FlavorParamsFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaFlavorParamsListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('flavorparams', 'list', kparams);
	};
	
	/**
	 * Update Flavor Params by ID.
	 * @param id int 
	 * @param flavorParams FlavorParams 
	 * @return KalturaFlavorParams
	 */
	static update(id, flavorParams){
		let kparams = {};
		kparams.id = id;
		kparams.flavorParams = flavorParams;
		return new kaltura.RequestBuilder('flavorparams', 'update', kparams);
	};
}
module.exports.flavorParams = flavorParams;


/**
 *Class definition for the Kaltura service: groupUser.
 * The available service actions:
 * @action add Add new GroupUser.
 * @action delete delete by userId and groupId.
 * @action list List all GroupUsers.
 * @action sync sync by userId and groupIds.
 * @action update update GroupUser.
 */
class groupUser{
	
	/**
	 * Add new GroupUser.
	 * @param groupUser GroupUser 
	 * @return KalturaGroupUser
	 */
	static add(groupUser){
		let kparams = {};
		kparams.groupUser = groupUser;
		return new kaltura.RequestBuilder('groupuser', 'add', kparams);
	};
	
	/**
	 * delete by userId and groupId.
	 * @param userId string 
	 * @param groupId string 
	 */
	static deleteAction(userId, groupId){
		let kparams = {};
		kparams.userId = userId;
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('groupuser', 'delete', kparams);
	};
	
	/**
	 * List all GroupUsers.
	 * @param filter GroupUserFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaGroupUserListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('groupuser', 'list', kparams);
	};
	
	/**
	 * sync by userId and groupIds.
	 * @param userId string 
	 * @param groupIds string  (optional, default: null)
	 * @param removeFromExistingGroups bool  (optional, default: true)
	 * @param createNewGroups bool  (optional, default: true)
	 * @return KalturaBulkUpload
	 */
	static sync(userId, groupIds = null, removeFromExistingGroups = true, createNewGroups = true){
		let kparams = {};
		kparams.userId = userId;
		kparams.groupIds = groupIds;
		kparams.removeFromExistingGroups = removeFromExistingGroups;
		kparams.createNewGroups = createNewGroups;
		return new kaltura.RequestBuilder('groupuser', 'sync', kparams);
	};
	
	/**
	 * update GroupUser.
	 * @param groupUserId string 
	 * @param groupUser GroupUser Id
	 * @return KalturaGroupUser
	 */
	static update(groupUserId, groupUser){
		let kparams = {};
		kparams.groupUserId = groupUserId;
		kparams.groupUser = groupUser;
		return new kaltura.RequestBuilder('groupuser', 'update', kparams);
	};
}
module.exports.groupUser = groupUser;


/**
 *Class definition for the Kaltura service: liveChannelSegment.
 * The available service actions:
 * @action add Add new live channel segment.
 * @action delete Delete live channel segment by id.
 * @action get Get live channel segment by id.
 * @action list List live channel segments by filter and pager.
 * @action update Update live channel segment by id.
 */
class liveChannelSegment{
	
	/**
	 * Add new live channel segment.
	 * @param liveChannelSegment LiveChannelSegment 
	 * @return KalturaLiveChannelSegment
	 */
	static add(liveChannelSegment){
		let kparams = {};
		kparams.liveChannelSegment = liveChannelSegment;
		return new kaltura.RequestBuilder('livechannelsegment', 'add', kparams);
	};
	
	/**
	 * Delete live channel segment by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livechannelsegment', 'delete', kparams);
	};
	
	/**
	 * Get live channel segment by id.
	 * @param id int 
	 * @return KalturaLiveChannelSegment
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livechannelsegment', 'get', kparams);
	};
	
	/**
	 * List live channel segments by filter and pager.
	 * @param filter LiveChannelSegmentFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaLiveChannelSegmentListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('livechannelsegment', 'list', kparams);
	};
	
	/**
	 * Update live channel segment by id.
	 * @param id int 
	 * @param liveChannelSegment LiveChannelSegment 
	 * @return KalturaLiveChannelSegment
	 */
	static update(id, liveChannelSegment){
		let kparams = {};
		kparams.id = id;
		kparams.liveChannelSegment = liveChannelSegment;
		return new kaltura.RequestBuilder('livechannelsegment', 'update', kparams);
	};
}
module.exports.liveChannelSegment = liveChannelSegment;


/**
 *Class definition for the Kaltura service: liveChannel.
 * The available service actions:
 * @action add Adds new live channel.
 * @action appendRecording Append recorded video to live entry.
 * @action createRecordedEntry Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on.
 * @action delete Delete a live channel.
 * @action get Get live channel by ID.
 * @action isLive Delivering the status of a live channel (on-air/offline).
 * @action list List live channels by filter with paging support.
 * @action registerMediaServer Register media server to live entry.
 * @action setRecordedContent Set recorded video to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action update Update live channel. Only the properties that were set will be updated.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 */
class liveChannel{
	
	/**
	 * Adds new live channel.
	 * @param liveChannel LiveChannel Live channel metadata
	 * @return KalturaLiveChannel
	 */
	static add(liveChannel){
		let kparams = {};
		kparams.liveChannel = liveChannel;
		return new kaltura.RequestBuilder('livechannel', 'add', kparams);
	};
	
	/**
	 * Append recorded video to live entry.
	 * @param entryId string Live entry id
	 * @param assetId string Live asset id
	 * @param mediaServerIndex string  (enum: KalturaEntryServerNodeType)
	 * @param resource DataCenterContentResource 
	 * @param duration float in seconds
	 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 * @return KalturaLiveEntry
	 */
	static appendRecording(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk = false){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new kaltura.RequestBuilder('livechannel', 'appendRecording', kparams);
	};
	
	/**
	 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on.
	 * @param entryId string Live entry id
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (enum: KalturaEntryServerNodeStatus)
	 * @return KalturaLiveEntry
	 */
	static createRecordedEntry(entryId, mediaServerIndex, liveEntryStatus){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.liveEntryStatus = liveEntryStatus;
		return new kaltura.RequestBuilder('livechannel', 'createRecordedEntry', kparams);
	};
	
	/**
	 * Delete a live channel.
	 * @param id string Live channel id to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livechannel', 'delete', kparams);
	};
	
	/**
	 * Get live channel by ID.
	 * @param id string Live channel id
	 * @return KalturaLiveChannel
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livechannel', 'get', kparams);
	};
	
	/**
	 * Delivering the status of a live channel (on-air/offline).
	 * @param id string ID of the live channel
	 * @return bool
	 */
	static isLive(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livechannel', 'isLive', kparams);
	};
	
	/**
	 * List live channels by filter with paging support.
	 * @param filter LiveChannelFilter live channel filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaLiveChannelListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('livechannel', 'list', kparams);
	};
	
	/**
	 * Register media server to live entry.
	 * @param entryId string Live entry id
	 * @param hostname string Media server host name
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @param applicationName string the application to which entry is being broadcast (optional, default: null)
	 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @param shouldCreateRecordedEntry bool  (optional, default: true)
	 * @return KalturaLiveEntry
	 */
	static registerMediaServer(entryId, hostname, mediaServerIndex, applicationName = null, liveEntryStatus = 1, shouldCreateRecordedEntry = true){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		kparams.shouldCreateRecordedEntry = shouldCreateRecordedEntry;
		return new kaltura.RequestBuilder('livechannel', 'registerMediaServer', kparams);
	};
	
	/**
	 * Set recorded video to live entry.
	 * @param entryId string Live entry id
	 * @param mediaServerIndex string  (enum: KalturaEntryServerNodeType)
	 * @param resource DataCenterContentResource 
	 * @param duration float in seconds
	 * @param recordedEntryId string Recorded entry Id (optional, default: null)
	 * @param flavorParamsId int Recorded entry Id (optional, default: null)
	 * @return KalturaLiveEntry
	 */
	static setRecordedContent(entryId, mediaServerIndex, resource, duration, recordedEntryId = null, flavorParamsId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.recordedEntryId = recordedEntryId;
		kparams.flavorParamsId = flavorParamsId;
		return new kaltura.RequestBuilder('livechannel', 'setRecordedContent', kparams);
	};
	
	/**
	 * Unregister media server from live entry.
	 * @param entryId string Live entry id
	 * @param hostname string Media server host name
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @return KalturaLiveEntry
	 */
	static unregisterMediaServer(entryId, hostname, mediaServerIndex){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new kaltura.RequestBuilder('livechannel', 'unregisterMediaServer', kparams);
	};
	
	/**
	 * Update live channel. Only the properties that were set will be updated.
	 * @param id string Live channel id to update
	 * @param liveChannel LiveChannel Live channel metadata to update
	 * @return KalturaLiveChannel
	 */
	static update(id, liveChannel){
		let kparams = {};
		kparams.id = id;
		kparams.liveChannel = liveChannel;
		return new kaltura.RequestBuilder('livechannel', 'update', kparams);
	};
	
	/**
	 * Validates all registered media servers.
	 * @param entryId string Live entry id
	 */
	static validateRegisteredMediaServers(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('livechannel', 'validateRegisteredMediaServers', kparams);
	};
}
module.exports.liveChannel = liveChannel;


/**
 *Class definition for the Kaltura service: liveReports.
 * The available service actions:
 * @action exportToCsv .
 * @action getEvents .
 * @action getReport .
 * @action serveReport Will serve a requested report.
 */
class liveReports{
	
	/**
	 * .
	 * @param reportType int  (enum: KalturaLiveReportExportType)
	 * @param params LiveReportExportParams 
	 * @return KalturaLiveReportExportResponse
	 */
	static exportToCsv(reportType, params){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.params = params;
		return new kaltura.RequestBuilder('livereports', 'exportToCsv', kparams);
	};
	
	/**
	 * .
	 * @param reportType string  (enum: KalturaLiveReportType)
	 * @param filter LiveReportInputFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return array
	 */
	static getEvents(reportType, filter = null, pager = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('livereports', 'getEvents', kparams);
	};
	
	/**
	 * .
	 * @param reportType string  (enum: KalturaLiveReportType)
	 * @param filter LiveReportInputFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaLiveStatsListResponse
	 */
	static getReport(reportType, filter = null, pager = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('livereports', 'getReport', kparams);
	};
	
	/**
	 * Will serve a requested report.
	 * @param id string - the requested id
	 * @return string
	 */
	static serveReport(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livereports', 'serveReport', kparams);
	};
}
module.exports.liveReports = liveReports;


/**
 *Class definition for the Kaltura service: liveStats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * KalturaStatsEvent $event.
 */
class liveStats{
	
	/**
	 * Will write to the event log a single line representing the event
 * KalturaStatsEvent $event.
	 * @param event LiveStatsEvent 
	 * @return bool
	 */
	static collect(event){
		let kparams = {};
		kparams.event = event;
		return new kaltura.RequestBuilder('livestats', 'collect', kparams);
	};
}
module.exports.liveStats = liveStats;


/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action add Adds new live stream entry.
 * The entry will be queued for provision.
 * @action addLiveStreamPushPublishConfiguration Add new pushPublish configuration to entry.
 * @action allocateConferenceRoom Allocates a conference room or returns ones that has already been allocated.
 * @action appendRecording Append recorded video to live entry.
 * @action archive Archive a live entry which was recorded.
 * @action authenticate Authenticate live-stream entry against stream token and partner limitations.
 * @action createPeriodicSyncPoints Creates periodic metadata sync-point events on a live stream.
 * @action createRecordedEntry Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on.
 * @action delete Delete a live stream entry.
 * @action finishConf When the conf is finished this API should be called.
 * @action get Get live stream entry by ID.
 * @action getDetails Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action isLive Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action list List live stream entries by filter with paging support.
 * @action regenerateStreamToken Regenerate new secure token for liveStream.
 * @action registerConf Mark that the conference has actually started.
 * @action registerMediaServer Register media server to live entry.
 * @action removeLiveStreamPushPublishConfiguration Remove push publish configuration from entry.
 * @action setRecordedContent Set recorded video to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action update Update live stream entry. Only the properties that were set will be updated.
 * @action updateOfflineThumbnailFromUrl Update entry thumbnail using url.
 * @action updateOfflineThumbnailJpeg Update live stream entry thumbnail using a raw jpeg file.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 */
class liveStream{
	
	/**
	 * Adds new live stream entry.
 * The entry will be queued for provision.
	 * @param liveStreamEntry LiveStreamEntry Live stream entry metadata
	 * @param sourceType string Live stream source type (optional, enum: KalturaSourceType, default: null)
	 * @return KalturaLiveStreamEntry
	 */
	static add(liveStreamEntry, sourceType = null){
		let kparams = {};
		kparams.liveStreamEntry = liveStreamEntry;
		kparams.sourceType = sourceType;
		return new kaltura.RequestBuilder('livestream', 'add', kparams);
	};
	
	/**
	 * Add new pushPublish configuration to entry.
	 * @param entryId string 
	 * @param protocol string  (enum: KalturaPlaybackProtocol)
	 * @param url string  (optional, default: null)
	 * @param liveStreamConfiguration LiveStreamConfiguration  (optional, default: null)
	 * @return KalturaLiveStreamEntry
	 */
	static addLiveStreamPushPublishConfiguration(entryId, protocol, url = null, liveStreamConfiguration = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		kparams.url = url;
		kparams.liveStreamConfiguration = liveStreamConfiguration;
		return new kaltura.RequestBuilder('livestream', 'addLiveStreamPushPublishConfiguration', kparams);
	};
	
	/**
	 * Allocates a conference room or returns ones that has already been allocated.
	 * @param entryId string 
	 * @param env string  (optional)
	 * @return KalturaRoomDetails
	 */
	static allocateConferenceRoom(entryId, env = ''){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.env = env;
		return new kaltura.RequestBuilder('livestream', 'allocateConferenceRoom', kparams);
	};
	
	/**
	 * Append recorded video to live entry.
	 * @param entryId string Live entry id
	 * @param assetId string Live asset id
	 * @param mediaServerIndex string  (enum: KalturaEntryServerNodeType)
	 * @param resource DataCenterContentResource 
	 * @param duration float in seconds
	 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false)
	 * @return KalturaLiveEntry
	 */
	static appendRecording(entryId, assetId, mediaServerIndex, resource, duration, isLastChunk = false){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.assetId = assetId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.isLastChunk = isLastChunk;
		return new kaltura.RequestBuilder('livestream', 'appendRecording', kparams);
	};
	
	/**
	 * Archive a live entry which was recorded.
	 * @param liveEntryId string 
	 * @param vodEntryId string 
	 * @return bool
	 */
	static archive(liveEntryId, vodEntryId){
		let kparams = {};
		kparams.liveEntryId = liveEntryId;
		kparams.vodEntryId = vodEntryId;
		return new kaltura.RequestBuilder('livestream', 'archive', kparams);
	};
	
	/**
	 * Authenticate live-stream entry against stream token and partner limitations.
	 * @param entryId string Live stream entry id
	 * @param token string Live stream broadcasting token
	 * @param hostname string Media server host name (optional, default: null)
	 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType, default: null)
	 * @param applicationName string the application to which entry is being broadcast (optional, default: null)
	 * @return KalturaLiveStreamEntry
	 */
	static authenticate(entryId, token, hostname = null, mediaServerIndex = null, applicationName = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.token = token;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		return new kaltura.RequestBuilder('livestream', 'authenticate', kparams);
	};
	
	/**
	 * Creates periodic metadata sync-point events on a live stream.
	 * @param entryId string Kaltura live-stream entry id
	 * @param interval int Events interval in seconds
	 * @param duration int Duration in seconds
	 */
	static createPeriodicSyncPoints(entryId, interval, duration){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.interval = interval;
		kparams.duration = duration;
		return new kaltura.RequestBuilder('livestream', 'createPeriodicSyncPoints', kparams);
	};
	
	/**
	 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on.
	 * @param entryId string Live entry id
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (enum: KalturaEntryServerNodeStatus)
	 * @return KalturaLiveEntry
	 */
	static createRecordedEntry(entryId, mediaServerIndex, liveEntryStatus){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.liveEntryStatus = liveEntryStatus;
		return new kaltura.RequestBuilder('livestream', 'createRecordedEntry', kparams);
	};
	
	/**
	 * Delete a live stream entry.
	 * @param entryId string Live stream entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('livestream', 'delete', kparams);
	};
	
	/**
	 * When the conf is finished this API should be called.
	 * @param entryId string 
	 * @param serverNodeId int  (optional, default: null)
	 * @return bool
	 */
	static finishConf(entryId, serverNodeId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('livestream', 'finishConf', kparams);
	};
	
	/**
	 * Get live stream entry by ID.
	 * @param entryId string Live stream entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaLiveStreamEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('livestream', 'get', kparams);
	};
	
	/**
	 * Delivering the status of a live stream (on-air/offline) if it is possible.
	 * @param id string ID of the live stream entry
	 * @return KalturaLiveStreamDetails
	 */
	static getDetails(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('livestream', 'getDetails', kparams);
	};
	
	/**
	 * Delivering the status of a live stream (on-air/offline) if it is possible.
	 * @param id string ID of the live stream
	 * @param protocol string protocol of the stream to test (optional, enum: KalturaPlaybackProtocol, default: null)
	 * @return bool
	 */
	static isLive(id, protocol = null){
		let kparams = {};
		kparams.id = id;
		kparams.protocol = protocol;
		return new kaltura.RequestBuilder('livestream', 'isLive', kparams);
	};
	
	/**
	 * List live stream entries by filter with paging support.
	 * @param filter LiveStreamEntryFilter live stream entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaLiveStreamListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('livestream', 'list', kparams);
	};
	
	/**
	 * Regenerate new secure token for liveStream.
	 * @param entryId string Live stream entry id to regenerate secure token for
	 * @return KalturaLiveEntry
	 */
	static regenerateStreamToken(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('livestream', 'regenerateStreamToken', kparams);
	};
	
	/**
	 * Mark that the conference has actually started.
	 * @param entryId string 
	 * @return bool
	 */
	static registerConf(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('livestream', 'registerConf', kparams);
	};
	
	/**
	 * Register media server to live entry.
	 * @param entryId string Live entry id
	 * @param hostname string Media server host name
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @param applicationName string the application to which entry is being broadcast (optional, default: null)
	 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1)
	 * @param shouldCreateRecordedEntry bool  (optional, default: true)
	 * @return KalturaLiveEntry
	 */
	static registerMediaServer(entryId, hostname, mediaServerIndex, applicationName = null, liveEntryStatus = 1, shouldCreateRecordedEntry = true){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.applicationName = applicationName;
		kparams.liveEntryStatus = liveEntryStatus;
		kparams.shouldCreateRecordedEntry = shouldCreateRecordedEntry;
		return new kaltura.RequestBuilder('livestream', 'registerMediaServer', kparams);
	};
	
	/**
	 * Remove push publish configuration from entry.
	 * @param entryId string 
	 * @param protocol string  (enum: KalturaPlaybackProtocol)
	 * @return KalturaLiveStreamEntry
	 */
	static removeLiveStreamPushPublishConfiguration(entryId, protocol){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.protocol = protocol;
		return new kaltura.RequestBuilder('livestream', 'removeLiveStreamPushPublishConfiguration', kparams);
	};
	
	/**
	 * Set recorded video to live entry.
	 * @param entryId string Live entry id
	 * @param mediaServerIndex string  (enum: KalturaEntryServerNodeType)
	 * @param resource DataCenterContentResource 
	 * @param duration float in seconds
	 * @param recordedEntryId string Recorded entry Id (optional, default: null)
	 * @param flavorParamsId int Recorded entry Id (optional, default: null)
	 * @return KalturaLiveEntry
	 */
	static setRecordedContent(entryId, mediaServerIndex, resource, duration, recordedEntryId = null, flavorParamsId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mediaServerIndex = mediaServerIndex;
		kparams.resource = resource;
		kparams.duration = duration;
		kparams.recordedEntryId = recordedEntryId;
		kparams.flavorParamsId = flavorParamsId;
		return new kaltura.RequestBuilder('livestream', 'setRecordedContent', kparams);
	};
	
	/**
	 * Unregister media server from live entry.
	 * @param entryId string Live entry id
	 * @param hostname string Media server host name
	 * @param mediaServerIndex string Media server index primary / secondary (enum: KalturaEntryServerNodeType)
	 * @return KalturaLiveEntry
	 */
	static unregisterMediaServer(entryId, hostname, mediaServerIndex){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.hostname = hostname;
		kparams.mediaServerIndex = mediaServerIndex;
		return new kaltura.RequestBuilder('livestream', 'unregisterMediaServer', kparams);
	};
	
	/**
	 * Update live stream entry. Only the properties that were set will be updated.
	 * @param entryId string Live stream entry id to update
	 * @param liveStreamEntry LiveStreamEntry Live stream entry metadata to update
	 * @return KalturaLiveStreamEntry
	 */
	static update(entryId, liveStreamEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.liveStreamEntry = liveStreamEntry;
		return new kaltura.RequestBuilder('livestream', 'update', kparams);
	};
	
	/**
	 * Update entry thumbnail using url.
	 * @param entryId string live stream entry id
	 * @param url string file url
	 * @return KalturaLiveStreamEntry
	 */
	static updateOfflineThumbnailFromUrl(entryId, url){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.url = url;
		return new kaltura.RequestBuilder('livestream', 'updateOfflineThumbnailFromUrl', kparams);
	};
	
	/**
	 * Update live stream entry thumbnail using a raw jpeg file.
	 * @param entryId string live stream entry id
	 * @param fileData file Jpeg file data
	 * @return KalturaLiveStreamEntry
	 */
	static updateOfflineThumbnailJpeg(entryId, fileData){
		let kparams = {};
		kparams.entryId = entryId;
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('livestream', 'updateOfflineThumbnailJpeg', kparams, kfiles);
	};
	
	/**
	 * Validates all registered media servers.
	 * @param entryId string Live entry id
	 */
	static validateRegisteredMediaServers(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('livestream', 'validateRegisteredMediaServers', kparams);
	};
}
module.exports.liveStream = liveStream;


/**
 *Class definition for the Kaltura service: mediaInfo.
 * The available service actions:
 * @action list List media info objects by filter and pager.
 */
class mediaInfo{
	
	/**
	 * List media info objects by filter and pager.
	 * @param filter MediaInfoFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaMediaInfoListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('mediainfo', 'list', kparams);
	};
}
module.exports.mediaInfo = mediaInfo;


/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action add Add entry.
 * @action addContent Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
 * @action addFromBulk Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * This action should be exposed only to the batches.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action addFromRecordedWebcam Add new entry after the file was recorded on the server and the token id exists.
 * @action addFromSearchResult Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
 * @action addFromUploadedFile Add new entry after the specific media file was uploaded and the upload token id exists.
 * @action addFromUrl Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * @action anonymousRank Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @action approve Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action approveReplace Approves media replacement.
 * @action bulkUploadAdd Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @action cancelReplace Cancels media replacement.
 * @action convert Convert entry.
 * @action count Count media entries by filter.
 * @action delete Delete a media entry.
 * @action exportToCsv Creates a batch job that sends an email with a link to download a CSV containing a list of entries.
 * @action flag Flag inappropriate media entry for moderation.
 * @action get Get media entry by ID.
 * @action getMrss Get MRSS by entry id
 * XML will return as an escaped string.
 * @action list List media entries by filter with paging support.
 * @action listFlags List all pending flags for the media entry.
 * @action reject Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action requestConversion Request a new conversion job, this can be used to convert the media entry to a different format.
 * @action update Update media entry. Only the properties that were set will be updated.
 * @action updateContent Replace content associated with the media entry.
 * @action updateThumbnail Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailFromSourceEntry Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailFromUrl Update entry thumbnail using URL.
 * @action updateThumbnailJpeg Update media entry thumbnail using a raw jpeg file.
 * @action upload Upload a media file to Kaltura, then the file can be used to create a media entry.
 */
class media{
	
	/**
	 * Add entry.
	 * @param entry MediaEntry 
	 * @return KalturaMediaEntry
	 */
	static add(entry){
		let kparams = {};
		kparams.entry = entry;
		return new kaltura.RequestBuilder('media', 'add', kparams);
	};
	
	/**
	 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
	 * @param entryId string 
	 * @param resource Resource  (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static addContent(entryId, resource = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		return new kaltura.RequestBuilder('media', 'addContent', kparams);
	};
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * This action should be exposed only to the batches.
	 * @param mediaEntry MediaEntry Media entry metadata
	 * @param url string An HTTP or FTP URL
	 * @param bulkUploadId int The id of the bulk upload job
	 * @return KalturaMediaEntry
	 */
	static addFromBulk(mediaEntry, url, bulkUploadId){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		kparams.bulkUploadId = bulkUploadId;
		return new kaltura.RequestBuilder('media', 'addFromBulk', kparams);
	};
	
	/**
	 * Copy entry into new entry.
	 * @param sourceEntryId string Media entry id to copy from
	 * @param mediaEntry MediaEntry Media entry metadata (optional, default: null)
	 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static addFromEntry(sourceEntryId, mediaEntry = null, sourceFlavorParamsId = null){
		let kparams = {};
		kparams.sourceEntryId = sourceEntryId;
		kparams.mediaEntry = mediaEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new kaltura.RequestBuilder('media', 'addFromEntry', kparams);
	};
	
	/**
	 * Copy flavor asset into new entry.
	 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source
	 * @param mediaEntry MediaEntry Media entry metadata (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static addFromFlavorAsset(sourceFlavorAssetId, mediaEntry = null){
		let kparams = {};
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		kparams.mediaEntry = mediaEntry;
		return new kaltura.RequestBuilder('media', 'addFromFlavorAsset', kparams);
	};
	
	/**
	 * Add new entry after the file was recorded on the server and the token id exists.
	 * @param mediaEntry MediaEntry Media entry metadata
	 * @param webcamTokenId string Token id for the recorded webcam file
	 * @return KalturaMediaEntry
	 */
	static addFromRecordedWebcam(mediaEntry, webcamTokenId){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.webcamTokenId = webcamTokenId;
		return new kaltura.RequestBuilder('media', 'addFromRecordedWebcam', kparams);
	};
	
	/**
	 * Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
	 * @param mediaEntry MediaEntry Media entry metadata (optional, default: null)
	 * @param searchResult SearchResult Result object from search service (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static addFromSearchResult(mediaEntry = null, searchResult = null){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.searchResult = searchResult;
		return new kaltura.RequestBuilder('media', 'addFromSearchResult', kparams);
	};
	
	/**
	 * Add new entry after the specific media file was uploaded and the upload token id exists.
	 * @param mediaEntry MediaEntry Media entry metadata
	 * @param uploadTokenId string Upload token id
	 * @return KalturaMediaEntry
	 */
	static addFromUploadedFile(mediaEntry, uploadTokenId){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new kaltura.RequestBuilder('media', 'addFromUploadedFile', kparams);
	};
	
	/**
	 * Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
	 * @param mediaEntry MediaEntry Media entry metadata
	 * @param url string An HTTP or FTP URL
	 * @return KalturaMediaEntry
	 */
	static addFromUrl(mediaEntry, url){
		let kparams = {};
		kparams.mediaEntry = mediaEntry;
		kparams.url = url;
		return new kaltura.RequestBuilder('media', 'addFromUrl', kparams);
	};
	
	/**
	 * Anonymously rank a media entry, no validation is done on duplicate rankings.
	 * @param entryId string 
	 * @param rank int 
	 */
	static anonymousRank(entryId, rank){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new kaltura.RequestBuilder('media', 'anonymousRank', kparams);
	};
	
	/**
	 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
	 * @param entryId string 
	 */
	static approve(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('media', 'approve', kparams);
	};
	
	/**
	 * Approves media replacement.
	 * @param entryId string Media entry id to replace
	 * @return KalturaMediaEntry
	 */
	static approveReplace(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('media', 'approveReplace', kparams);
	};
	
	/**
	 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadEntryData BulkUploadEntryData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static bulkUploadAdd(fileData, bulkUploadData = null, bulkUploadEntryData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadEntryData = bulkUploadEntryData;
		return new kaltura.RequestBuilder('media', 'bulkUploadAdd', kparams, kfiles);
	};
	
	/**
	 * Cancels media replacement.
	 * @param entryId string Media entry id to cancel
	 * @return KalturaMediaEntry
	 */
	static cancelReplace(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('media', 'cancelReplace', kparams);
	};
	
	/**
	 * Convert entry.
	 * @param entryId string Media entry id
	 * @param conversionProfileId int  (optional, default: null)
	 * @param dynamicConversionAttributes array  (optional, default: null)
	 * @return bigint
	 */
	static convert(entryId, conversionProfileId = null, dynamicConversionAttributes = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new kaltura.RequestBuilder('media', 'convert', kparams);
	};
	
	/**
	 * Count media entries by filter.
	 * @param filter MediaEntryFilter Media entry filter (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('media', 'count', kparams);
	};
	
	/**
	 * Delete a media entry.
	 * @param entryId string Media entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('media', 'delete', kparams);
	};
	
	/**
	 * Creates a batch job that sends an email with a link to download a CSV containing a list of entries.
	 * @param data MediaEsearchExportToCsvJobData job data indicating filter to pass to the job
	 * @return string
	 */
	static exportToCsv(data){
		let kparams = {};
		kparams.data = data;
		return new kaltura.RequestBuilder('media', 'exportToCsv', kparams);
	};
	
	/**
	 * Flag inappropriate media entry for moderation.
	 * @param moderationFlag ModerationFlag 
	 */
	static flag(moderationFlag){
		let kparams = {};
		kparams.moderationFlag = moderationFlag;
		return new kaltura.RequestBuilder('media', 'flag', kparams);
	};
	
	/**
	 * Get media entry by ID.
	 * @param entryId string Media entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaMediaEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('media', 'get', kparams);
	};
	
	/**
	 * Get MRSS by entry id
 * XML will return as an escaped string.
	 * @param entryId string Entry id
	 * @param extendingItemsArray array  (optional, default: null)
	 * @param features string  (optional, default: null)
	 * @return string
	 */
	static getMrss(entryId, extendingItemsArray = null, features = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.extendingItemsArray = extendingItemsArray;
		kparams.features = features;
		return new kaltura.RequestBuilder('media', 'getMrss', kparams);
	};
	
	/**
	 * List media entries by filter with paging support.
	 * @param filter MediaEntryFilter Media entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaMediaListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('media', 'list', kparams);
	};
	
	/**
	 * List all pending flags for the media entry.
	 * @param entryId string 
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaModerationFlagListResponse
	 */
	static listFlags(entryId, pager = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('media', 'listFlags', kparams);
	};
	
	/**
	 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
	 * @param entryId string 
	 */
	static reject(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('media', 'reject', kparams);
	};
	
	/**
	 * Request a new conversion job, this can be used to convert the media entry to a different format.
	 * @param entryId string Media entry id
	 * @param fileFormat string Format to convert
	 * @return int
	 */
	static requestConversion(entryId, fileFormat){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.fileFormat = fileFormat;
		return new kaltura.RequestBuilder('media', 'requestConversion', kparams);
	};
	
	/**
	 * Update media entry. Only the properties that were set will be updated.
	 * @param entryId string Media entry id to update
	 * @param mediaEntry MediaEntry Media entry metadata to update
	 * @return KalturaMediaEntry
	 */
	static update(entryId, mediaEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mediaEntry = mediaEntry;
		return new kaltura.RequestBuilder('media', 'update', kparams);
	};
	
	/**
	 * Replace content associated with the media entry.
	 * @param entryId string Media entry id to update
	 * @param resource Resource Resource to be used to replace entry media content
	 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null)
	 * @param advancedOptions EntryReplacementOptions Additional update content options (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static updateContent(entryId, resource, conversionProfileId = null, advancedOptions = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		kparams.advancedOptions = advancedOptions;
		return new kaltura.RequestBuilder('media', 'updateContent', kparams);
	};
	
	/**
	 * Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
	 * @param entryId string Media entry id
	 * @param timeOffset int Time offset (in seconds)
	 * @param flavorParamsId int The flavor params id to be used (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static updateThumbnail(entryId, timeOffset, flavorParamsId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new kaltura.RequestBuilder('media', 'updateThumbnail', kparams);
	};
	
	/**
	 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
	 * @param entryId string Media entry id
	 * @param sourceEntryId string Media entry id
	 * @param timeOffset int Time offset (in seconds)
	 * @param flavorParamsId int The flavor params id to be used (optional, default: null)
	 * @return KalturaMediaEntry
	 */
	static updateThumbnailFromSourceEntry(entryId, sourceEntryId, timeOffset, flavorParamsId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.sourceEntryId = sourceEntryId;
		kparams.timeOffset = timeOffset;
		kparams.flavorParamsId = flavorParamsId;
		return new kaltura.RequestBuilder('media', 'updateThumbnailFromSourceEntry', kparams);
	};
	
	/**
	 * Update entry thumbnail using URL.
	 * @param entryId string Media entry id
	 * @param url string file url
	 * @return KalturaBaseEntry
	 */
	static updateThumbnailFromUrl(entryId, url){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.url = url;
		return new kaltura.RequestBuilder('media', 'updateThumbnailFromUrl', kparams);
	};
	
	/**
	 * Update media entry thumbnail using a raw jpeg file.
	 * @param entryId string Media entry id
	 * @param fileData file Jpeg file data
	 * @return KalturaMediaEntry
	 */
	static updateThumbnailJpeg(entryId, fileData){
		let kparams = {};
		kparams.entryId = entryId;
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('media', 'updateThumbnailJpeg', kparams, kfiles);
	};
	
	/**
	 * Upload a media file to Kaltura, then the file can be used to create a media entry.
	 * @param fileData file The file data
	 * @return string
	 */
	static upload(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('media', 'upload', kparams, kfiles);
	};
}
module.exports.media = media;


/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action add Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
 * @action anonymousRank Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @action appendMediaEntry Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version.
 * @action clone Clones an existing mix.
 * @action count Count mix entries by filter.
 * @action delete Delete a mix entry.
 * @action get Get mix entry by id.
 * @action getMixesByMediaId Get the mixes in which the media entry is included.
 * @action getReadyMediaEntries Get all ready media entries that exist in the given mix id.
 * @action list List entries by filter with paging support.
 * Return parameter is an array of mix entries.
 * @action update Update mix entry. Only the properties that were set will be updated.
 */
class mixing{
	
	/**
	 * Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
	 * @param mixEntry MixEntry Mix entry metadata
	 * @return KalturaMixEntry
	 */
	static add(mixEntry){
		let kparams = {};
		kparams.mixEntry = mixEntry;
		return new kaltura.RequestBuilder('mixing', 'add', kparams);
	};
	
	/**
	 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
	 * @param entryId string 
	 * @param rank int 
	 */
	static anonymousRank(entryId, rank){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new kaltura.RequestBuilder('mixing', 'anonymousRank', kparams);
	};
	
	/**
	 * Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version.
	 * @param mixEntryId string Mix entry to append to its timeline
	 * @param mediaEntryId string Media entry to append to the timeline
	 * @return KalturaMixEntry
	 */
	static appendMediaEntry(mixEntryId, mediaEntryId){
		let kparams = {};
		kparams.mixEntryId = mixEntryId;
		kparams.mediaEntryId = mediaEntryId;
		return new kaltura.RequestBuilder('mixing', 'appendMediaEntry', kparams);
	};
	
	/**
	 * Clones an existing mix.
	 * @param entryId string Mix entry id to clone
	 * @return KalturaMixEntry
	 */
	static cloneAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('mixing', 'clone', kparams);
	};
	
	/**
	 * Count mix entries by filter.
	 * @param filter MediaEntryFilter Media entry filter (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('mixing', 'count', kparams);
	};
	
	/**
	 * Delete a mix entry.
	 * @param entryId string Mix entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('mixing', 'delete', kparams);
	};
	
	/**
	 * Get mix entry by id.
	 * @param entryId string Mix entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaMixEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('mixing', 'get', kparams);
	};
	
	/**
	 * Get the mixes in which the media entry is included.
	 * @param mediaEntryId string 
	 * @return array
	 */
	static getMixesByMediaId(mediaEntryId){
		let kparams = {};
		kparams.mediaEntryId = mediaEntryId;
		return new kaltura.RequestBuilder('mixing', 'getMixesByMediaId', kparams);
	};
	
	/**
	 * Get all ready media entries that exist in the given mix id.
	 * @param mixId string 
	 * @param version int Desired version to get the data from (optional, default: -1)
	 * @return array
	 */
	static getReadyMediaEntries(mixId, version = -1){
		let kparams = {};
		kparams.mixId = mixId;
		kparams.version = version;
		return new kaltura.RequestBuilder('mixing', 'getReadyMediaEntries', kparams);
	};
	
	/**
	 * List entries by filter with paging support.
 * Return parameter is an array of mix entries.
	 * @param filter MixEntryFilter Mix entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaMixListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('mixing', 'list', kparams);
	};
	
	/**
	 * Update mix entry. Only the properties that were set will be updated.
	 * @param entryId string Mix entry id to update
	 * @param mixEntry MixEntry Mix entry metadata to update
	 * @return KalturaMixEntry
	 */
	static update(entryId, mixEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.mixEntry = mixEntry;
		return new kaltura.RequestBuilder('mixing', 'update', kparams);
	};
}
module.exports.mixing = mixing;


/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action getClientNotification Return the notifications for a specific entry id and type.
 */
class notification{
	
	/**
	 * Return the notifications for a specific entry id and type.
	 * @param entryId string 
	 * @param type int  (enum: KalturaNotificationType)
	 * @return KalturaClientNotification
	 */
	static getClientNotification(entryId, type){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.type = type;
		return new kaltura.RequestBuilder('notification', 'getClientNotification', kparams);
	};
}
module.exports.notification = notification;


/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action count Count partner's existing sub-publishers (count includes the partner itself).
 * @action get Retrieve partner object by Id.
 * @action getInfo Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId.
 * @action getPublicInfo Returns partner public info by Id.
 * @action getSecrets Retrieve partner secret and admin secret.
 * @action getStatistics Get usage statistics for a partner
 * Calculation is done according to partner's package.
 * @action getUsage Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a time frame
 * The resolution can be "days" or "months".
 * @action list List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the API call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
 * @action listFeatureStatus List partner's current processes' statuses.
 * @action listPartnersForUser Retrieve a list of partner objects which the current user is allowed to access.
 * @action register Create a new Partner object.
 * @action registrationValidation Create a new Partner object.
 * @action update Update details and settings of an existing partner.
 */
class partner{
	
	/**
	 * Count partner's existing sub-publishers (count includes the partner itself).
	 * @param filter PartnerFilter  (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('partner', 'count', kparams);
	};
	
	/**
	 * Retrieve partner object by Id.
	 * @param id int  (optional, default: null)
	 * @return KalturaPartner
	 */
	static get(id = null){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('partner', 'get', kparams);
	};
	
	/**
	 * Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId.
	 * @return KalturaPartner
	 */
	static getInfo(){
		let kparams = {};
		return new kaltura.RequestBuilder('partner', 'getInfo', kparams);
	};
	
	/**
	 * Returns partner public info by Id.
	 * @param id int  (optional, default: null)
	 * @return KalturaPartnerPublicInfo
	 */
	static getPublicInfo(id = null){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('partner', 'getPublicInfo', kparams);
	};
	
	/**
	 * Retrieve partner secret and admin secret.
	 * @param partnerId int 
	 * @param adminEmail string 
	 * @param cmsPassword string 
	 * @param otp string  (optional, default: null)
	 * @return KalturaPartner
	 */
	static getSecrets(partnerId, adminEmail, cmsPassword, otp = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.adminEmail = adminEmail;
		kparams.cmsPassword = cmsPassword;
		kparams.otp = otp;
		return new kaltura.RequestBuilder('partner', 'getSecrets', kparams);
	};
	
	/**
	 * Get usage statistics for a partner
 * Calculation is done according to partner's package.
	 * @return KalturaPartnerStatistics
	 */
	static getStatistics(){
		let kparams = {};
		return new kaltura.RequestBuilder('partner', 'getStatistics', kparams);
	};
	
	/**
	 * Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a time frame
 * The resolution can be "days" or "months".
	 * @param year int  (optional)
	 * @param month int  (optional, default: 1)
	 * @param resolution string  (optional, enum: KalturaReportInterval, default: null)
	 * @return KalturaPartnerUsage
	 */
	static getUsage(year = '', month = 1, resolution = null){
		let kparams = {};
		kparams.year = year;
		kparams.month = month;
		kparams.resolution = resolution;
		return new kaltura.RequestBuilder('partner', 'getUsage', kparams);
	};
	
	/**
	 * List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the API call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
	 * @param filter PartnerFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaPartnerListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('partner', 'list', kparams);
	};
	
	/**
	 * List partner's current processes' statuses.
	 * @return KalturaFeatureStatusListResponse
	 */
	static listFeatureStatus(){
		let kparams = {};
		return new kaltura.RequestBuilder('partner', 'listFeatureStatus', kparams);
	};
	
	/**
	 * Retrieve a list of partner objects which the current user is allowed to access.
	 * @param partnerFilter PartnerFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaPartnerListResponse
	 */
	static listPartnersForUser(partnerFilter = null, pager = null){
		let kparams = {};
		kparams.partnerFilter = partnerFilter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('partner', 'listPartnersForUser', kparams);
	};
	
	/**
	 * Create a new Partner object.
	 * @param partner Partner 
	 * @param cmsPassword string  (optional)
	 * @param templatePartnerId int  (optional, default: null)
	 * @param silent bool  (optional, default: false)
	 * @return KalturaPartner
	 */
	static register(partner, cmsPassword = '', templatePartnerId = null, silent = false){
		let kparams = {};
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new kaltura.RequestBuilder('partner', 'register', kparams);
	};
	
	/**
	 * Create a new Partner object.
	 * @param partner Partner 
	 * @param cmsPassword string  (optional)
	 * @param templatePartnerId int  (optional, default: null)
	 * @param silent bool  (optional, default: false)
	 * @return bool
	 */
	static registrationValidation(partner, cmsPassword = '', templatePartnerId = null, silent = false){
		let kparams = {};
		kparams.partner = partner;
		kparams.cmsPassword = cmsPassword;
		kparams.templatePartnerId = templatePartnerId;
		kparams.silent = silent;
		return new kaltura.RequestBuilder('partner', 'registrationValidation', kparams);
	};
	
	/**
	 * Update details and settings of an existing partner.
	 * @param partner Partner 
	 * @param allowEmpty bool  (optional, default: false)
	 * @return KalturaPartner
	 */
	static update(partner, allowEmpty = false){
		let kparams = {};
		kparams.partner = partner;
		kparams.allowEmpty = allowEmpty;
		return new kaltura.RequestBuilder('partner', 'update', kparams);
	};
}
module.exports.partner = partner;


/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action add Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators.
 * @action delete Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators.
 * @action get Retrieves a permission item object using its ID.
 * @action list Lists permission item objects that are associated with an account.
 * @action update Updates an existing permission item object.
 * This action is available only to Kaltura system administrators.
 */
class permissionItem{
	
	/**
	 * Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators.
	 * @param permissionItem PermissionItem The new permission item
	 * @return KalturaPermissionItem
	 */
	static add(permissionItem){
		let kparams = {};
		kparams.permissionItem = permissionItem;
		return new kaltura.RequestBuilder('permissionitem', 'add', kparams);
	};
	
	/**
	 * Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators.
	 * @param permissionItemId int The permission item's unique identifier
	 * @return KalturaPermissionItem
	 */
	static deleteAction(permissionItemId){
		let kparams = {};
		kparams.permissionItemId = permissionItemId;
		return new kaltura.RequestBuilder('permissionitem', 'delete', kparams);
	};
	
	/**
	 * Retrieves a permission item object using its ID.
	 * @param permissionItemId int The permission item's unique identifier
	 * @return KalturaPermissionItem
	 */
	static get(permissionItemId){
		let kparams = {};
		kparams.permissionItemId = permissionItemId;
		return new kaltura.RequestBuilder('permissionitem', 'get', kparams);
	};
	
	/**
	 * Lists permission item objects that are associated with an account.
	 * @param filter PermissionItemFilter A filter used to exclude specific types of permission items (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaPermissionItemListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('permissionitem', 'list', kparams);
	};
	
	/**
	 * Updates an existing permission item object.
 * This action is available only to Kaltura system administrators.
	 * @param permissionItemId int The permission item's unique identifier
	 * @param permissionItem PermissionItem Id The permission item's unique identifier
	 * @return KalturaPermissionItem
	 */
	static update(permissionItemId, permissionItem){
		let kparams = {};
		kparams.permissionItemId = permissionItemId;
		kparams.permissionItem = permissionItem;
		return new kaltura.RequestBuilder('permissionitem', 'update', kparams);
	};
}
module.exports.permissionItem = permissionItem;


/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action add Adds a new permission object to the account.
 * @action delete Deletes an existing permission object.
 * @action get Retrieves a permission object using its ID.
 * @action getCurrentPermissions Retrieves a list of permissions that apply to the current KS.
 * @action list Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * @action update Updates an existing permission object.
 */
class permission{
	
	/**
	 * Adds a new permission object to the account.
	 * @param permission Permission The new permission
	 * @return KalturaPermission
	 */
	static add(permission){
		let kparams = {};
		kparams.permission = permission;
		return new kaltura.RequestBuilder('permission', 'add', kparams);
	};
	
	/**
	 * Deletes an existing permission object.
	 * @param permissionName string The name assigned to the permission
	 * @return KalturaPermission
	 */
	static deleteAction(permissionName){
		let kparams = {};
		kparams.permissionName = permissionName;
		return new kaltura.RequestBuilder('permission', 'delete', kparams);
	};
	
	/**
	 * Retrieves a permission object using its ID.
	 * @param permissionName string The name assigned to the permission
	 * @return KalturaPermission
	 */
	static get(permissionName){
		let kparams = {};
		kparams.permissionName = permissionName;
		return new kaltura.RequestBuilder('permission', 'get', kparams);
	};
	
	/**
	 * Retrieves a list of permissions that apply to the current KS.
	 * @return string
	 */
	static getCurrentPermissions(){
		let kparams = {};
		return new kaltura.RequestBuilder('permission', 'getCurrentPermissions', kparams);
	};
	
	/**
	 * Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
	 * @param filter PermissionFilter A filter used to exclude specific types of permissions (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaPermissionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('permission', 'list', kparams);
	};
	
	/**
	 * Updates an existing permission object.
	 * @param permissionName string The name assigned to the permission
	 * @param permission Permission Name The name assigned to the permission
	 * @return KalturaPermission
	 */
	static update(permissionName, permission){
		let kparams = {};
		kparams.permissionName = permissionName;
		kparams.permission = permission;
		return new kaltura.RequestBuilder('permission', 'update', kparams);
	};
}
module.exports.permission = permission;


/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action add Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @action clone Clone an existing playlist.
 * @action delete Delete existing playlist.
 * @action execute Retrieve playlist for playing purpose.
 * @action executeFromContent Retrieve playlist for playing purpose, based on content.
 * @action executeFromFilters Retrieve playlist for playing purpose, based on media entry filters.
 * @action get Retrieve a playlist.
 * @action getStatsFromContent Retrieve playlist statistics.
 * @action list List available playlists.
 * @action update Update existing playlist
 * Note - you cannot change playlist type. Updated playlist must be of the same type.
 */
class playlist{
	
	/**
	 * Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
	 * @param playlist Playlist 
	 * @param updateStats bool indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false)
	 * @return KalturaPlaylist
	 */
	static add(playlist, updateStats = false){
		let kparams = {};
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new kaltura.RequestBuilder('playlist', 'add', kparams);
	};
	
	/**
	 * Clone an existing playlist.
	 * @param id string Id of the playlist to clone
	 * @param newPlaylist Playlist Parameters defined here will override the ones in the cloned playlist (optional, default: null)
	 * @return KalturaPlaylist
	 */
	static cloneAction(id, newPlaylist = null){
		let kparams = {};
		kparams.id = id;
		kparams.newPlaylist = newPlaylist;
		return new kaltura.RequestBuilder('playlist', 'clone', kparams);
	};
	
	/**
	 * Delete existing playlist.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('playlist', 'delete', kparams);
	};
	
	/**
	 * Retrieve playlist for playing purpose.
	 * @param id string 
	 * @param detailed string  (optional)
	 * @param playlistContext Context  (optional, default: null)
	 * @param filter MediaEntryFilterForPlaylist  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return array
	 */
	static execute(id, detailed = '', playlistContext = null, filter = null, pager = null){
		let kparams = {};
		kparams.id = id;
		kparams.detailed = detailed;
		kparams.playlistContext = playlistContext;
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('playlist', 'execute', kparams);
	};
	
	/**
	 * Retrieve playlist for playing purpose, based on content.
	 * @param playlistType int  (enum: KalturaPlaylistType)
	 * @param playlistContent string 
	 * @param detailed string  (optional)
	 * @param pager FilterPager  (optional, default: null)
	 * @return array
	 */
	static executeFromContent(playlistType, playlistContent, detailed = '', pager = null){
		let kparams = {};
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		kparams.detailed = detailed;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('playlist', 'executeFromContent', kparams);
	};
	
	/**
	 * Retrieve playlist for playing purpose, based on media entry filters.
	 * @param filters array 
	 * @param totalResults int 
	 * @param detailed string  (optional, default: 1)
	 * @param pager FilterPager  (optional, default: null)
	 * @return array
	 */
	static executeFromFilters(filters, totalResults, detailed = 1, pager = null){
		let kparams = {};
		kparams.filters = filters;
		kparams.totalResults = totalResults;
		kparams.detailed = detailed;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('playlist', 'executeFromFilters', kparams);
	};
	
	/**
	 * Retrieve a playlist.
	 * @param id string 
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaPlaylist
	 */
	static get(id, version = -1){
		let kparams = {};
		kparams.id = id;
		kparams.version = version;
		return new kaltura.RequestBuilder('playlist', 'get', kparams);
	};
	
	/**
	 * Retrieve playlist statistics.
	 * @param playlistType int  (enum: KalturaPlaylistType)
	 * @param playlistContent string 
	 * @return KalturaPlaylist
	 */
	static getStatsFromContent(playlistType, playlistContent){
		let kparams = {};
		kparams.playlistType = playlistType;
		kparams.playlistContent = playlistContent;
		return new kaltura.RequestBuilder('playlist', 'getStatsFromContent', kparams);
	};
	
	/**
	 * List available playlists.
	 * @param filter PlaylistFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaPlaylistListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('playlist', 'list', kparams);
	};
	
	/**
	 * Update existing playlist
 * Note - you cannot change playlist type. Updated playlist must be of the same type.
	 * @param id string 
	 * @param playlist Playlist 
	 * @param updateStats bool  (optional, default: false)
	 * @return KalturaPlaylist
	 */
	static update(id, playlist, updateStats = false){
		let kparams = {};
		kparams.id = id;
		kparams.playlist = playlist;
		kparams.updateStats = updateStats;
		return new kaltura.RequestBuilder('playlist', 'update', kparams);
	};
}
module.exports.playlist = playlist;


/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action execute .
 * @action exportToCsv .
 * @action getBaseTotal report getBaseTotal action allows to get the total base for storage reports.
 * @action getGraphs report getGraphs action allows to get a graph data for a specific report.
 * @action getTable report getTable action allows to get a graph data for a specific report.
 * @action getTotal report getTotal action allows to get a graph data for a specific report.
 * @action getUrlForReportAsCsv will create a CSV file for the given report and return the URL to access it.
 * @action serve Will serve a requested report.
 */
class report{
	
	/**
	 * .
	 * @param id int 
	 * @param params array  (optional, default: null)
	 * @return KalturaReportResponse
	 */
	static execute(id, params = null){
		let kparams = {};
		kparams.id = id;
		kparams.params = params;
		return new kaltura.RequestBuilder('report', 'execute', kparams);
	};
	
	/**
	 * .
	 * @param params ReportExportParams 
	 * @return KalturaReportExportResponse
	 */
	static exportToCsv(params){
		let kparams = {};
		kparams.params = params;
		return new kaltura.RequestBuilder('report', 'exportToCsv', kparams);
	};
	
	/**
	 * report getBaseTotal action allows to get the total base for storage reports.
	 * @param reportType string  (enum: KalturaReportType)
	 * @param reportInputFilter ReportInputFilter 
	 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param responseOptions ReportResponseOptions  (optional, default: null)
	 * @return array
	 */
	static getBaseTotal(reportType, reportInputFilter, objectIds = null, responseOptions = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		kparams.responseOptions = responseOptions;
		return new kaltura.RequestBuilder('report', 'getBaseTotal', kparams);
	};
	
	/**
	 * report getGraphs action allows to get a graph data for a specific report.
	 * @param reportType string  (enum: KalturaReportType)
	 * @param reportInputFilter ReportInputFilter 
	 * @param dimension string  (optional, default: null)
	 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param responseOptions ReportResponseOptions  (optional, default: null)
	 * @return array
	 */
	static getGraphs(reportType, reportInputFilter, dimension = null, objectIds = null, responseOptions = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		kparams.objectIds = objectIds;
		kparams.responseOptions = responseOptions;
		return new kaltura.RequestBuilder('report', 'getGraphs', kparams);
	};
	
	/**
	 * report getTable action allows to get a graph data for a specific report.
	 * @param reportType string  (enum: KalturaReportType)
	 * @param reportInputFilter ReportInputFilter 
	 * @param pager FilterPager 
	 * @param order string  (optional, default: null)
	 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param responseOptions ReportResponseOptions  (optional, default: null)
	 * @return KalturaReportTable
	 */
	static getTable(reportType, reportInputFilter, pager, order = null, objectIds = null, responseOptions = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		kparams.responseOptions = responseOptions;
		return new kaltura.RequestBuilder('report', 'getTable', kparams);
	};
	
	/**
	 * report getTotal action allows to get a graph data for a specific report.
	 * @param reportType string  (enum: KalturaReportType)
	 * @param reportInputFilter ReportInputFilter 
	 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param responseOptions ReportResponseOptions  (optional, default: null)
	 * @return KalturaReportTotal
	 */
	static getTotal(reportType, reportInputFilter, objectIds = null, responseOptions = null){
		let kparams = {};
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.objectIds = objectIds;
		kparams.responseOptions = responseOptions;
		return new kaltura.RequestBuilder('report', 'getTotal', kparams);
	};
	
	/**
	 * will create a CSV file for the given report and return the URL to access it.
	 * @param reportTitle string The title of the report to display at top of CSV
	 * @param reportText string The text of the filter of the report
	 * @param headers string The headers of the columns - a map between the enumerations on the server side and the their display text
	 * @param reportType string  (enum: KalturaReportType)
	 * @param reportInputFilter ReportInputFilter 
	 * @param dimension string  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @param order string  (optional, default: null)
	 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null)
	 * @param responseOptions ReportResponseOptions  (optional, default: null)
	 * @return string
	 */
	static getUrlForReportAsCsv(reportTitle, reportText, headers, reportType, reportInputFilter, dimension = null, pager = null, order = null, objectIds = null, responseOptions = null){
		let kparams = {};
		kparams.reportTitle = reportTitle;
		kparams.reportText = reportText;
		kparams.headers = headers;
		kparams.reportType = reportType;
		kparams.reportInputFilter = reportInputFilter;
		kparams.dimension = dimension;
		kparams.pager = pager;
		kparams.order = order;
		kparams.objectIds = objectIds;
		kparams.responseOptions = responseOptions;
		return new kaltura.RequestBuilder('report', 'getUrlForReportAsCsv', kparams);
	};
	
	/**
	 * Will serve a requested report.
	 * @param id string - the requested id
	 * @return string
	 */
	static serve(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('report', 'serve', kparams);
	};
}
module.exports.report = report;


/**
 *Class definition for the Kaltura service: responseProfile.
 * The available service actions:
 * @action add Add new response profile.
 * @action clone Clone an existing response profile.
 * @action delete Delete response profile by id.
 * @action get Get response profile by id.
 * @action list List response profiles by filter and pager.
 * @action recalculate Recalculate response profile cached objects.
 * @action update Update response profile by id.
 * @action updateStatus Update response profile status by id.
 */
class responseProfile{
	
	/**
	 * Add new response profile.
	 * @param addResponseProfile ResponseProfile 
	 * @return KalturaResponseProfile
	 */
	static add(addResponseProfile){
		let kparams = {};
		kparams.addResponseProfile = addResponseProfile;
		return new kaltura.RequestBuilder('responseprofile', 'add', kparams);
	};
	
	/**
	 * Clone an existing response profile.
	 * @param id int 
	 * @param profile ResponseProfile 
	 * @return KalturaResponseProfile
	 */
	static cloneAction(id, profile){
		let kparams = {};
		kparams.id = id;
		kparams.profile = profile;
		return new kaltura.RequestBuilder('responseprofile', 'clone', kparams);
	};
	
	/**
	 * Delete response profile by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('responseprofile', 'delete', kparams);
	};
	
	/**
	 * Get response profile by id.
	 * @param id int 
	 * @return KalturaResponseProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('responseprofile', 'get', kparams);
	};
	
	/**
	 * List response profiles by filter and pager.
	 * @param filter ResponseProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaResponseProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('responseprofile', 'list', kparams);
	};
	
	/**
	 * Recalculate response profile cached objects.
	 * @param options ResponseProfileCacheRecalculateOptions 
	 * @return KalturaResponseProfileCacheRecalculateResults
	 */
	static recalculate(options){
		let kparams = {};
		kparams.options = options;
		return new kaltura.RequestBuilder('responseprofile', 'recalculate', kparams);
	};
	
	/**
	 * Update response profile by id.
	 * @param id int 
	 * @param updateResponseProfile ResponseProfile 
	 * @return KalturaResponseProfile
	 */
	static update(id, updateResponseProfile){
		let kparams = {};
		kparams.id = id;
		kparams.updateResponseProfile = updateResponseProfile;
		return new kaltura.RequestBuilder('responseprofile', 'update', kparams);
	};
	
	/**
	 * Update response profile status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaResponseProfileStatus)
	 * @return KalturaResponseProfile
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('responseprofile', 'updateStatus', kparams);
	};
}
module.exports.responseProfile = responseProfile;


/**
 *Class definition for the Kaltura service: schema.
 * The available service actions:
 */
class schema{
}
module.exports.schema = schema;


/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action externalLogin .
 * @action getMediaInfo Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 * @action search Search for media in one of the supported media providers.
 * @action searchUrl Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
 */
class search{
	
	/**
	 * .
	 * @param searchSource int  (enum: KalturaSearchProviderType)
	 * @param userName string 
	 * @param password string 
	 * @return KalturaSearchAuthData
	 */
	static externalLogin(searchSource, userName, password){
		let kparams = {};
		kparams.searchSource = searchSource;
		kparams.userName = userName;
		kparams.password = password;
		return new kaltura.RequestBuilder('search', 'externalLogin', kparams);
	};
	
	/**
	 * Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
	 * @param searchResult SearchResult KalturaSearchResult object extends KalturaSearch and has all fields required for media:add
	 * @return KalturaSearchResult
	 */
	static getMediaInfo(searchResult){
		let kparams = {};
		kparams.searchResult = searchResult;
		return new kaltura.RequestBuilder('search', 'getMediaInfo', kparams);
	};
	
	/**
	 * Search for media in one of the supported media providers.
	 * @param search Search A KalturaSearch object contains the search keywords, media provider and media type
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaSearchResultResponse
	 */
	static search(search, pager = null){
		let kparams = {};
		kparams.search = search;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('search', 'search', kparams);
	};
	
	/**
	 * Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
	 * @param mediaType int  (enum: KalturaMediaType)
	 * @param url string 
	 * @return KalturaSearchResult
	 */
	static searchUrl(mediaType, url){
		let kparams = {};
		kparams.mediaType = mediaType;
		kparams.url = url;
		return new kaltura.RequestBuilder('search', 'searchUrl', kparams);
	};
}
module.exports.search = search;


/**
 *Class definition for the Kaltura service: serverNode.
 * The available service actions:
 * @action add Adds a server node to the Kaltura DB.
 * @action delete delete server node by id.
 * @action disable Disable server node by id.
 * @action enable Enable server node by id.
 * @action get Get server node by id.
 * @action getFullPath Get the edge server node full path.
 * @action list .
 * @action markOffline Mark server node offline.
 * @action reportStatus Update server node status.
 * @action update Update server node by id.
 */
class serverNode{
	
	/**
	 * Adds a server node to the Kaltura DB.
	 * @param serverNode ServerNode 
	 * @return KalturaServerNode
	 */
	static add(serverNode){
		let kparams = {};
		kparams.serverNode = serverNode;
		return new kaltura.RequestBuilder('servernode', 'add', kparams);
	};
	
	/**
	 * delete server node by id.
	 * @param serverNodeId string 
	 */
	static deleteAction(serverNodeId){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('servernode', 'delete', kparams);
	};
	
	/**
	 * Disable server node by id.
	 * @param serverNodeId string 
	 * @return KalturaServerNode
	 */
	static disable(serverNodeId){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('servernode', 'disable', kparams);
	};
	
	/**
	 * Enable server node by id.
	 * @param serverNodeId string 
	 * @return KalturaServerNode
	 */
	static enable(serverNodeId){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('servernode', 'enable', kparams);
	};
	
	/**
	 * Get server node by id.
	 * @param serverNodeId int 
	 * @return KalturaServerNode
	 */
	static get(serverNodeId){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('servernode', 'get', kparams);
	};
	
	/**
	 * Get the edge server node full path.
	 * @param hostName string 
	 * @param protocol string  (optional, default: http)
	 * @param deliveryFormat string  (optional, default: null)
	 * @param deliveryType string  (optional, default: null)
	 * @return string
	 */
	static getFullPath(hostName, protocol = 'http', deliveryFormat = null, deliveryType = null){
		let kparams = {};
		kparams.hostName = hostName;
		kparams.protocol = protocol;
		kparams.deliveryFormat = deliveryFormat;
		kparams.deliveryType = deliveryType;
		return new kaltura.RequestBuilder('servernode', 'getFullPath', kparams);
	};
	
	/**
	 * .
	 * @param filter ServerNodeFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaServerNodeListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('servernode', 'list', kparams);
	};
	
	/**
	 * Mark server node offline.
	 * @param serverNodeId string 
	 * @return KalturaServerNode
	 */
	static markOffline(serverNodeId){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		return new kaltura.RequestBuilder('servernode', 'markOffline', kparams);
	};
	
	/**
	 * Update server node status.
	 * @param hostName string 
	 * @param serverNode ServerNode  (optional, default: null)
	 * @param serverNodeStatus int  (optional, enum: KalturaServerNodeStatus, default: 1)
	 * @return KalturaServerNode
	 */
	static reportStatus(hostName, serverNode = null, serverNodeStatus = 1){
		let kparams = {};
		kparams.hostName = hostName;
		kparams.serverNode = serverNode;
		kparams.serverNodeStatus = serverNodeStatus;
		return new kaltura.RequestBuilder('servernode', 'reportStatus', kparams);
	};
	
	/**
	 * Update server node by id.
	 * @param serverNodeId int 
	 * @param serverNode ServerNode Id
	 * @return KalturaServerNode
	 */
	static update(serverNodeId, serverNode){
		let kparams = {};
		kparams.serverNodeId = serverNodeId;
		kparams.serverNode = serverNode;
		return new kaltura.RequestBuilder('servernode', 'update', kparams);
	};
}
module.exports.serverNode = serverNode;


/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action end End a session with the Kaltura server, making the current KS invalid.
 * @action get Parse session key and return its info.
 * @action impersonate Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @action impersonateByKs Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
 * @action start Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @action startWidgetSession Start a session for Kaltura's flash widgets.
 */
class session{
	
	/**
	 * End a session with the Kaltura server, making the current KS invalid.
	 */
	static end(){
		let kparams = {};
		return new kaltura.RequestBuilder('session', 'end', kparams);
	};
	
	/**
	 * Parse session key and return its info.
	 * @param session string The KS to be parsed, keep it empty to use current session (optional, default: null)
	 * @return KalturaSessionInfo
	 */
	static get(session = null){
		let kparams = {};
		kparams.session = session;
		return new kaltura.RequestBuilder('session', 'get', kparams);
	};
	
	/**
	 * Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
	 * @param secret string - should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId)
	 * @param impersonatedPartnerId int 
	 * @param userId string - impersonated userId (optional)
	 * @param type int  (optional, enum: KalturaSessionType)
	 * @param partnerId int  (optional, default: null)
	 * @param expiry int KS expiry time in seconds (optional, default: 86400)
	 * @param privileges string  (optional, default: null)
	 * @return string
	 */
	static impersonate(secret, impersonatedPartnerId, userId = '', type = 0, partnerId = null, expiry = 86400, privileges = null){
		let kparams = {};
		kparams.secret = secret;
		kparams.impersonatedPartnerId = impersonatedPartnerId;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new kaltura.RequestBuilder('session', 'impersonate', kparams);
	};
	
	/**
	 * Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
	 * @param session string The old KS of the impersonated partner
	 * @param type int Type of the new KS (optional, enum: KalturaSessionType, default: null)
	 * @param expiry int Expiry time in seconds of the new KS (optional, default: null)
	 * @param privileges string Privileges of the new KS (optional, default: null)
	 * @return KalturaSessionInfo
	 */
	static impersonateByKs(session, type = null, expiry = null, privileges = null){
		let kparams = {};
		kparams.session = session;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new kaltura.RequestBuilder('session', 'impersonateByKs', kparams);
	};
	
	/**
	 * Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
	 * @param secret string Remember to provide the correct secret according to the sessionType you want
	 * @param userId string  (optional)
	 * @param type int Regular session or Admin session (optional, enum: KalturaSessionType)
	 * @param partnerId int  (optional, default: null)
	 * @param expiry int KS expiry time in seconds (optional, default: 86400)
	 * @param privileges string  (optional, default: null)
	 * @return string
	 */
	static start(secret, userId = '', type = 0, partnerId = null, expiry = 86400, privileges = null){
		let kparams = {};
		kparams.secret = secret;
		kparams.userId = userId;
		kparams.type = type;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new kaltura.RequestBuilder('session', 'start', kparams);
	};
	
	/**
	 * Start a session for Kaltura's flash widgets.
	 * @param widgetId string 
	 * @param expiry int  (optional, default: 86400)
	 * @return KalturaStartWidgetSessionResponse
	 */
	static startWidgetSession(widgetId, expiry = 86400){
		let kparams = {};
		kparams.widgetId = widgetId;
		kparams.expiry = expiry;
		return new kaltura.RequestBuilder('session', 'startWidgetSession', kparams);
	};
}
module.exports.session = session;


/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * client version - will help interpret the line structure. Different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * KalturaStatsEvent $event.
 * @action kmcCollect Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the Apache log.
 * @action reportDeviceCapabilities Use this action to report device capabilities to the kaltura server.
 * @action reportError Use this action to report errors to the kaltura server.
 * @action reportKceError .
 */
class stats{
	
	/**
	 * Will write to the event log a single line representing the event
 * client version - will help interpret the line structure. Different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * KalturaStatsEvent $event.
	 * @param event StatsEvent 
	 * @return bool
	 */
	static collect(event){
		let kparams = {};
		kparams.event = event;
		return new kaltura.RequestBuilder('stats', 'collect', kparams);
	};
	
	/**
	 * Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the Apache log.
	 * @param kmcEvent StatsKmcEvent 
	 */
	static kmcCollect(kmcEvent){
		let kparams = {};
		kparams.kmcEvent = kmcEvent;
		return new kaltura.RequestBuilder('stats', 'kmcCollect', kparams);
	};
	
	/**
	 * Use this action to report device capabilities to the kaltura server.
	 * @param data string 
	 */
	static reportDeviceCapabilities(data){
		let kparams = {};
		kparams.data = data;
		return new kaltura.RequestBuilder('stats', 'reportDeviceCapabilities', kparams);
	};
	
	/**
	 * Use this action to report errors to the kaltura server.
	 * @param errorCode string 
	 * @param errorMessage string 
	 */
	static reportError(errorCode, errorMessage){
		let kparams = {};
		kparams.errorCode = errorCode;
		kparams.errorMessage = errorMessage;
		return new kaltura.RequestBuilder('stats', 'reportError', kparams);
	};
	
	/**
	 * .
	 * @param kalturaCEError CEError 
	 * @return KalturaCEError
	 */
	static reportKceError(kalturaCEError){
		let kparams = {};
		kparams.kalturaCEError = kalturaCEError;
		return new kaltura.RequestBuilder('stats', 'reportKceError', kparams);
	};
}
module.exports.stats = stats;


/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action add Adds a storage profile to the Kaltura DB.
 * @action get Get storage profile by id.
 * @action list .
 * @action lockPendingFileSyncs storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
 * @action update Update storage profile by id.
 * @action updateStatus .
 */
class storageProfile{
	
	/**
	 * Adds a storage profile to the Kaltura DB.
	 * @param storageProfile StorageProfile 
	 * @return KalturaStorageProfile
	 */
	static add(storageProfile){
		let kparams = {};
		kparams.storageProfile = storageProfile;
		return new kaltura.RequestBuilder('storageprofile', 'add', kparams);
	};
	
	/**
	 * Get storage profile by id.
	 * @param storageProfileId int 
	 * @return KalturaStorageProfile
	 */
	static get(storageProfileId){
		let kparams = {};
		kparams.storageProfileId = storageProfileId;
		return new kaltura.RequestBuilder('storageprofile', 'get', kparams);
	};
	
	/**
	 * .
	 * @param filter StorageProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaStorageProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('storageprofile', 'list', kparams);
	};
	
	/**
	 * storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
	 * @param filter FileSyncFilter 
	 * @param workerId int The id of the file sync import worker
	 * @param storageProfileId int The id of the storage profile
	 * @param maxCount int The maximum number of file syncs that should be returned
	 * @param maxSize int The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: 9223372036854775807)
	 * @return KalturaLockFileSyncsResponse
	 */
	static lockPendingFileSyncs(filter, workerId, storageProfileId, maxCount, maxSize = 9223372036854775807){
		let kparams = {};
		kparams.filter = filter;
		kparams.workerId = workerId;
		kparams.storageProfileId = storageProfileId;
		kparams.maxCount = maxCount;
		kparams.maxSize = maxSize;
		return new kaltura.RequestBuilder('storageprofile', 'lockPendingFileSyncs', kparams);
	};
	
	/**
	 * Update storage profile by id.
	 * @param storageProfileId int 
	 * @param storageProfile StorageProfile Id
	 * @return KalturaStorageProfile
	 */
	static update(storageProfileId, storageProfile){
		let kparams = {};
		kparams.storageProfileId = storageProfileId;
		kparams.storageProfile = storageProfile;
		return new kaltura.RequestBuilder('storageprofile', 'update', kparams);
	};
	
	/**
	 * .
	 * @param storageId int 
	 * @param status int  (enum: KalturaStorageProfileStatus)
	 */
	static updateStatus(storageId, status){
		let kparams = {};
		kparams.storageId = storageId;
		kparams.status = status;
		return new kaltura.RequestBuilder('storageprofile', 'updateStatus', kparams);
	};
}
module.exports.storageProfile = storageProfile;


/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action add Add new Syndication Feed.
 * @action delete Delete Syndication Feed by ID.
 * @action get Get Syndication Feed by ID.
 * @action getEntryCount get entry count for a syndication feed.
 * @action list List Syndication Feeds by filter with paging support.
 * @action requestConversion request conversion for all entries that doesn't have the required flavor param
 * returns a comma-separated ids of conversion jobs.
 * @action update Update Syndication Feed by ID.
 */
class syndicationFeed{
	
	/**
	 * Add new Syndication Feed.
	 * @param syndicationFeed BaseSyndicationFeed 
	 * @return KalturaBaseSyndicationFeed
	 */
	static add(syndicationFeed){
		let kparams = {};
		kparams.syndicationFeed = syndicationFeed;
		return new kaltura.RequestBuilder('syndicationfeed', 'add', kparams);
	};
	
	/**
	 * Delete Syndication Feed by ID.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('syndicationfeed', 'delete', kparams);
	};
	
	/**
	 * Get Syndication Feed by ID.
	 * @param id string 
	 * @return KalturaBaseSyndicationFeed
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('syndicationfeed', 'get', kparams);
	};
	
	/**
	 * get entry count for a syndication feed.
	 * @param feedId string 
	 * @return KalturaSyndicationFeedEntryCount
	 */
	static getEntryCount(feedId){
		let kparams = {};
		kparams.feedId = feedId;
		return new kaltura.RequestBuilder('syndicationfeed', 'getEntryCount', kparams);
	};
	
	/**
	 * List Syndication Feeds by filter with paging support.
	 * @param filter BaseSyndicationFeedFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaBaseSyndicationFeedListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('syndicationfeed', 'list', kparams);
	};
	
	/**
	 * request conversion for all entries that doesn't have the required flavor param
 * returns a comma-separated ids of conversion jobs.
	 * @param feedId string 
	 * @return string
	 */
	static requestConversion(feedId){
		let kparams = {};
		kparams.feedId = feedId;
		return new kaltura.RequestBuilder('syndicationfeed', 'requestConversion', kparams);
	};
	
	/**
	 * Update Syndication Feed by ID.
	 * @param id string 
	 * @param syndicationFeed BaseSyndicationFeed 
	 * @return KalturaBaseSyndicationFeed
	 */
	static update(id, syndicationFeed){
		let kparams = {};
		kparams.id = id;
		kparams.syndicationFeed = syndicationFeed;
		return new kaltura.RequestBuilder('syndicationfeed', 'update', kparams);
	};
}
module.exports.syndicationFeed = syndicationFeed;


/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action getHealthCheck .
 * @action getTime .
 * @action getVersion .
 * @action ping .
 * @action pingDatabase .
 */
class system{
	
	/**
	 * .
	 * @return string
	 */
	static getHealthCheck(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getHealthCheck', kparams);
	};
	
	/**
	 * .
	 * @return int
	 */
	static getTime(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getTime', kparams);
	};
	
	/**
	 * .
	 * @return string
	 */
	static getVersion(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getVersion', kparams);
	};
	
	/**
	 * .
	 * @return bool
	 */
	static ping(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'ping', kparams);
	};
	
	/**
	 * .
	 * @return bool
	 */
	static pingDatabase(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'pingDatabase', kparams);
	};
}
module.exports.system = system;


/**
 *Class definition for the Kaltura service: thumbAsset.
 * The available service actions:
 * @action add Add thumbnail asset.
 * @action addFromImage .
 * @action addFromUrl .
 * @action delete .
 * @action export manually export an asset.
 * @action generate .
 * @action generateByEntryId .
 * @action get .
 * @action getByEntryId .
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getUrl Get download URL for the asset.
 * @action list List Thumbnail Assets by filter and pager.
 * @action regenerate .
 * @action setAsDefault Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 * @action setContent Update content of thumbnail asset.
 * @action update Update thumbnail asset.
 */
class thumbAsset{
	
	/**
	 * Add thumbnail asset.
	 * @param entryId string 
	 * @param thumbAsset ThumbAsset 
	 * @return KalturaThumbAsset
	 */
	static add(entryId, thumbAsset){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.thumbAsset = thumbAsset;
		return new kaltura.RequestBuilder('thumbasset', 'add', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param fileData file 
	 * @return KalturaThumbAsset
	 */
	static addFromImage(entryId, fileData){
		let kparams = {};
		kparams.entryId = entryId;
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('thumbasset', 'addFromImage', kparams, kfiles);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param url string 
	 * @return KalturaThumbAsset
	 */
	static addFromUrl(entryId, url){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.url = url;
		return new kaltura.RequestBuilder('thumbasset', 'addFromUrl', kparams);
	};
	
	/**
	 * .
	 * @param thumbAssetId string 
	 */
	static deleteAction(thumbAssetId){
		let kparams = {};
		kparams.thumbAssetId = thumbAssetId;
		return new kaltura.RequestBuilder('thumbasset', 'delete', kparams);
	};
	
	/**
	 * manually export an asset.
	 * @param assetId string 
	 * @param storageProfileId int 
	 * @return KalturaFlavorAsset
	 */
	static exportAction(assetId, storageProfileId){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new kaltura.RequestBuilder('thumbasset', 'export', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param thumbParams ThumbParams 
	 * @param sourceAssetId string id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null)
	 * @return KalturaThumbAsset
	 */
	static generate(entryId, thumbParams, sourceAssetId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.thumbParams = thumbParams;
		kparams.sourceAssetId = sourceAssetId;
		return new kaltura.RequestBuilder('thumbasset', 'generate', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param destThumbParamsId int indicate the id of the ThumbParams to be generate this thumbnail by
	 * @return KalturaThumbAsset
	 */
	static generateByEntryId(entryId, destThumbParamsId){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.destThumbParamsId = destThumbParamsId;
		return new kaltura.RequestBuilder('thumbasset', 'generateByEntryId', kparams);
	};
	
	/**
	 * .
	 * @param thumbAssetId string 
	 * @return KalturaThumbAsset
	 */
	static get(thumbAssetId){
		let kparams = {};
		kparams.thumbAssetId = thumbAssetId;
		return new kaltura.RequestBuilder('thumbasset', 'get', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @return array
	 */
	static getByEntryId(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('thumbasset', 'getByEntryId', kparams);
	};
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param id string 
	 * @return KalturaRemotePathListResponse
	 */
	static getRemotePaths(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('thumbasset', 'getRemotePaths', kparams);
	};
	
	/**
	 * Get download URL for the asset.
	 * @param id string 
	 * @param storageId int  (optional, default: null)
	 * @param thumbParams ThumbParams  (optional, default: null)
	 * @return string
	 */
	static getUrl(id, storageId = null, thumbParams = null){
		let kparams = {};
		kparams.id = id;
		kparams.storageId = storageId;
		kparams.thumbParams = thumbParams;
		return new kaltura.RequestBuilder('thumbasset', 'getUrl', kparams);
	};
	
	/**
	 * List Thumbnail Assets by filter and pager.
	 * @param filter AssetFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaThumbAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('thumbasset', 'list', kparams);
	};
	
	/**
	 * .
	 * @param thumbAssetId string 
	 * @return KalturaThumbAsset
	 */
	static regenerate(thumbAssetId){
		let kparams = {};
		kparams.thumbAssetId = thumbAssetId;
		return new kaltura.RequestBuilder('thumbasset', 'regenerate', kparams);
	};
	
	/**
	 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
	 * @param thumbAssetId string 
	 */
	static setAsDefault(thumbAssetId){
		let kparams = {};
		kparams.thumbAssetId = thumbAssetId;
		return new kaltura.RequestBuilder('thumbasset', 'setAsDefault', kparams);
	};
	
	/**
	 * Update content of thumbnail asset.
	 * @param id string 
	 * @param contentResource ContentResource 
	 * @return KalturaThumbAsset
	 */
	static setContent(id, contentResource){
		let kparams = {};
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new kaltura.RequestBuilder('thumbasset', 'setContent', kparams);
	};
	
	/**
	 * Update thumbnail asset.
	 * @param id string 
	 * @param thumbAsset ThumbAsset 
	 * @return KalturaThumbAsset
	 */
	static update(id, thumbAsset){
		let kparams = {};
		kparams.id = id;
		kparams.thumbAsset = thumbAsset;
		return new kaltura.RequestBuilder('thumbasset', 'update', kparams);
	};
}
module.exports.thumbAsset = thumbAsset;


/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 * The available service actions:
 * @action get Get thumb params output object by ID.
 * @action list List thumb params output objects by filter and pager.
 */
class thumbParamsOutput{
	
	/**
	 * Get thumb params output object by ID.
	 * @param id int 
	 * @return KalturaThumbParamsOutput
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('thumbparamsoutput', 'get', kparams);
	};
	
	/**
	 * List thumb params output objects by filter and pager.
	 * @param filter ThumbParamsOutputFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaThumbParamsOutputListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('thumbparamsoutput', 'list', kparams);
	};
}
module.exports.thumbParamsOutput = thumbParamsOutput;


/**
 *Class definition for the Kaltura service: thumbParams.
 * The available service actions:
 * @action add Add new Thumb Params.
 * @action delete Delete Thumb Params by ID.
 * @action get Get Thumb Params by ID.
 * @action getByConversionProfileId Get Thumb Params by Conversion Profile ID.
 * @action list List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @action update Update Thumb Params by ID.
 */
class thumbParams{
	
	/**
	 * Add new Thumb Params.
	 * @param thumbParams ThumbParams 
	 * @return KalturaThumbParams
	 */
	static add(thumbParams){
		let kparams = {};
		kparams.thumbParams = thumbParams;
		return new kaltura.RequestBuilder('thumbparams', 'add', kparams);
	};
	
	/**
	 * Delete Thumb Params by ID.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('thumbparams', 'delete', kparams);
	};
	
	/**
	 * Get Thumb Params by ID.
	 * @param id int 
	 * @return KalturaThumbParams
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('thumbparams', 'get', kparams);
	};
	
	/**
	 * Get Thumb Params by Conversion Profile ID.
	 * @param conversionProfileId int 
	 * @return array
	 */
	static getByConversionProfileId(conversionProfileId){
		let kparams = {};
		kparams.conversionProfileId = conversionProfileId;
		return new kaltura.RequestBuilder('thumbparams', 'getByConversionProfileId', kparams);
	};
	
	/**
	 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
	 * @param filter ThumbParamsFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaThumbParamsListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('thumbparams', 'list', kparams);
	};
	
	/**
	 * Update Thumb Params by ID.
	 * @param id int 
	 * @param thumbParams ThumbParams 
	 * @return KalturaThumbParams
	 */
	static update(id, thumbParams){
		let kparams = {};
		kparams.id = id;
		kparams.thumbParams = thumbParams;
		return new kaltura.RequestBuilder('thumbparams', 'update', kparams);
	};
}
module.exports.thumbParams = thumbParams;


/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action add UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @action clone Clone an existing UIConf.
 * @action delete Delete an existing UIConf.
 * @action get Retrieve a UIConf by id.
 * @action getAvailableTypes Retrieve a list of all available versions by object type.
 * @action list Retrieve a list of available UIConfs.
 * @action listTemplates retrieve a list of available template UIConfs.
 * @action update Update an existing UIConf.
 */
class uiConf{
	
	/**
	 * UIConf Add action allows you to add a UIConf to Kaltura DB.
	 * @param uiConf UiConf Mandatory input parameter of type KalturaUiConf
	 * @return KalturaUiConf
	 */
	static add(uiConf){
		let kparams = {};
		kparams.uiConf = uiConf;
		return new kaltura.RequestBuilder('uiconf', 'add', kparams);
	};
	
	/**
	 * Clone an existing UIConf.
	 * @param id int 
	 * @return KalturaUiConf
	 */
	static cloneAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('uiconf', 'clone', kparams);
	};
	
	/**
	 * Delete an existing UIConf.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('uiconf', 'delete', kparams);
	};
	
	/**
	 * Retrieve a UIConf by id.
	 * @param id int 
	 * @return KalturaUiConf
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('uiconf', 'get', kparams);
	};
	
	/**
	 * Retrieve a list of all available versions by object type.
	 * @return array
	 */
	static getAvailableTypes(){
		let kparams = {};
		return new kaltura.RequestBuilder('uiconf', 'getAvailableTypes', kparams);
	};
	
	/**
	 * Retrieve a list of available UIConfs.
	 * @param filter UiConfFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaUiConfListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('uiconf', 'list', kparams);
	};
	
	/**
	 * retrieve a list of available template UIConfs.
	 * @param filter UiConfFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaUiConfListResponse
	 */
	static listTemplates(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('uiconf', 'listTemplates', kparams);
	};
	
	/**
	 * Update an existing UIConf.
	 * @param id int 
	 * @param uiConf UiConf 
	 * @return KalturaUiConf
	 */
	static update(id, uiConf){
		let kparams = {};
		kparams.id = id;
		kparams.uiConf = uiConf;
		return new kaltura.RequestBuilder('uiconf', 'update', kparams);
	};
}
module.exports.uiConf = uiConf;


/**
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action getUploadedFileTokenByFileName .
 * @action upload .
 */
class upload{
	
	/**
	 * .
	 * @param fileName string 
	 * @return KalturaUploadResponse
	 */
	static getUploadedFileTokenByFileName(fileName){
		let kparams = {};
		kparams.fileName = fileName;
		return new kaltura.RequestBuilder('upload', 'getUploadedFileTokenByFileName', kparams);
	};
	
	/**
	 * .
	 * @param fileData file The file data
	 * @return string
	 */
	static upload(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('upload', 'upload', kparams, kfiles);
	};
}
module.exports.upload = upload;


/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action add Adds new upload token to upload a file.
 * @action delete Deletes the upload token by upload token id.
 * @action get Get upload token by id.
 * @action list List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
 * @action upload Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
 */
class uploadToken{
	
	/**
	 * Adds new upload token to upload a file.
	 * @param uploadToken UploadToken  (optional, default: null)
	 * @return KalturaUploadToken
	 */
	static add(uploadToken = null){
		let kparams = {};
		kparams.uploadToken = uploadToken;
		return new kaltura.RequestBuilder('uploadtoken', 'add', kparams);
	};
	
	/**
	 * Deletes the upload token by upload token id.
	 * @param uploadTokenId string 
	 */
	static deleteAction(uploadTokenId){
		let kparams = {};
		kparams.uploadTokenId = uploadTokenId;
		return new kaltura.RequestBuilder('uploadtoken', 'delete', kparams);
	};
	
	/**
	 * Get upload token by id.
	 * @param uploadTokenId string 
	 * @return KalturaUploadToken
	 */
	static get(uploadTokenId){
		let kparams = {};
		kparams.uploadTokenId = uploadTokenId;
		return new kaltura.RequestBuilder('uploadtoken', 'get', kparams);
	};
	
	/**
	 * List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
	 * @param filter UploadTokenFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaUploadTokenListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('uploadtoken', 'list', kparams);
	};
	
	/**
	 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
	 * @param uploadTokenId string 
	 * @param fileData file 
	 * @param resume bool  (optional, default: false)
	 * @param finalChunk bool  (optional, default: true)
	 * @param resumeAt float  (optional, default: -1)
	 * @return KalturaUploadToken
	 */
	static upload(uploadTokenId, fileData, resume = false, finalChunk = true, resumeAt = -1){
		let kparams = {};
		kparams.uploadTokenId = uploadTokenId;
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.resume = resume;
		kparams.finalChunk = finalChunk;
		kparams.resumeAt = resumeAt;
		return new kaltura.RequestBuilder('uploadtoken', 'upload', kparams, kfiles);
	};
}
module.exports.uploadToken = uploadToken;


/**
 *Class definition for the Kaltura service: userEntry.
 * The available service actions:
 * @action add Adds a user_entry to the Kaltura DB.
 * @action bulkDelete .
 * @action delete .
 * @action get .
 * @action list .
 * @action submitQuiz Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 * @action update .
 */
class userEntry{
	
	/**
	 * Adds a user_entry to the Kaltura DB.
	 * @param userEntry UserEntry 
	 * @return KalturaUserEntry
	 */
	static add(userEntry){
		let kparams = {};
		kparams.userEntry = userEntry;
		return new kaltura.RequestBuilder('userentry', 'add', kparams);
	};
	
	/**
	 * .
	 * @param filter UserEntryFilter 
	 * @return int
	 */
	static bulkDelete(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('userentry', 'bulkDelete', kparams);
	};
	
	/**
	 * .
	 * @param id int 
	 * @return KalturaUserEntry
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('userentry', 'delete', kparams);
	};
	
	/**
	 * .
	 * @param id string 
	 * @return KalturaUserEntry
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('userentry', 'get', kparams);
	};
	
	/**
	 * .
	 * @param filter UserEntryFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaUserEntryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('userentry', 'list', kparams);
	};
	
	/**
	 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
	 * @param id int 
	 * @return KalturaQuizUserEntry
	 */
	static submitQuiz(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('userentry', 'submitQuiz', kparams);
	};
	
	/**
	 * .
	 * @param id int 
	 * @param userEntry UserEntry 
	 * @return KalturaUserEntry
	 */
	static update(id, userEntry){
		let kparams = {};
		kparams.id = id;
		kparams.userEntry = userEntry;
		return new kaltura.RequestBuilder('userentry', 'update', kparams);
	};
}
module.exports.userEntry = userEntry;


/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action add Adds a new user role object to the account.
 * @action clone Creates a new user role object that is a duplicate of an existing role.
 * @action delete Deletes an existing user role object.
 * @action get Retrieves a user role object using its ID.
 * @action list Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
 * @action update Updates an existing user role object.
 */
class userRole{
	
	/**
	 * Adds a new user role object to the account.
	 * @param userRole UserRole A new role
	 * @return KalturaUserRole
	 */
	static add(userRole){
		let kparams = {};
		kparams.userRole = userRole;
		return new kaltura.RequestBuilder('userrole', 'add', kparams);
	};
	
	/**
	 * Creates a new user role object that is a duplicate of an existing role.
	 * @param userRoleId int The user role's unique identifier
	 * @return KalturaUserRole
	 */
	static cloneAction(userRoleId){
		let kparams = {};
		kparams.userRoleId = userRoleId;
		return new kaltura.RequestBuilder('userrole', 'clone', kparams);
	};
	
	/**
	 * Deletes an existing user role object.
	 * @param userRoleId int The user role's unique identifier
	 * @return KalturaUserRole
	 */
	static deleteAction(userRoleId){
		let kparams = {};
		kparams.userRoleId = userRoleId;
		return new kaltura.RequestBuilder('userrole', 'delete', kparams);
	};
	
	/**
	 * Retrieves a user role object using its ID.
	 * @param userRoleId int The user role's unique identifier
	 * @return KalturaUserRole
	 */
	static get(userRoleId){
		let kparams = {};
		kparams.userRoleId = userRoleId;
		return new kaltura.RequestBuilder('userrole', 'get', kparams);
	};
	
	/**
	 * Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
	 * @param filter UserRoleFilter A filter used to exclude specific types of user roles (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaUserRoleListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('userrole', 'list', kparams);
	};
	
	/**
	 * Updates an existing user role object.
	 * @param userRoleId int The user role's unique identifier
	 * @param userRole UserRole Id The user role's unique identifier
	 * @return KalturaUserRole
	 */
	static update(userRoleId, userRole){
		let kparams = {};
		kparams.userRoleId = userRoleId;
		kparams.userRole = userRole;
		return new kaltura.RequestBuilder('userrole', 'update', kparams);
	};
}
module.exports.userRole = userRole;


/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action add Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system.
 * @action addFromBulkUpload .
 * @action checkLoginDataExists Action which checks whther user login.
 * @action delete Deletes a user from a partner account.
 * @action disableLogin Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
 * @action enableLogin Enables a user to log into a partner account using an email address and a password.
 * @action exportToCsv Creates a batch job that sends an email with a link to download a CSV containing a list of users.
 * @action generateQrCode get QR image content.
 * @action get Retrieves a user object for a specified user ID.
 * @action getByLoginId Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
 * @action index Index an entry by id.
 * @action list Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @action login Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
 * @action loginByKs Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches.
 * @action loginByLoginId Logs a user into a partner account with a user login ID and a user password.
 * @action loginDataResetPassword Resets user login password.
 * @action notifyBan Notifies that a user is banned from an account.
 * @action resetPassword Reset user's password and send the user an email to generate a new one.
 * @action serveCsv Will serve a requested CSV.
 * @action setInitialPassword Set initial user password.
 * @action update Updates an existing user object.
 * You can also use this action to update the userId.
 * @action updateLoginData Updates a user's login data: email, password, name.
 * @action validateHashKey Validate hash key.
 */
class user{
	
	/**
	 * Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system.
	 * @param user User The new user
	 * @return KalturaUser
	 */
	static add(user){
		let kparams = {};
		kparams.user = user;
		return new kaltura.RequestBuilder('user', 'add', kparams);
	};
	
	/**
	 * .
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadUserData BulkUploadUserData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null, bulkUploadUserData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadUserData = bulkUploadUserData;
		return new kaltura.RequestBuilder('user', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Action which checks whther user login.
	 * @param filter UserLoginDataFilter 
	 * @return bool
	 */
	static checkLoginDataExists(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('user', 'checkLoginDataExists', kparams);
	};
	
	/**
	 * Deletes a user from a partner account.
	 * @param userId string The user's unique identifier in the partner's system
	 * @return KalturaUser
	 */
	static deleteAction(userId){
		let kparams = {};
		kparams.userId = userId;
		return new kaltura.RequestBuilder('user', 'delete', kparams);
	};
	
	/**
	 * Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
	 * @param userId string The user's unique identifier in the partner's system (optional, default: null)
	 * @param loginId string The user's email address that identifies the user for login (optional, default: null)
	 * @return KalturaUser
	 */
	static disableLogin(userId = null, loginId = null){
		let kparams = {};
		kparams.userId = userId;
		kparams.loginId = loginId;
		return new kaltura.RequestBuilder('user', 'disableLogin', kparams);
	};
	
	/**
	 * Enables a user to log into a partner account using an email address and a password.
	 * @param userId string The user's unique identifier in the partner's system
	 * @param loginId string The user's email address that identifies the user for login
	 * @param password string The user's password (optional, default: null)
	 * @return KalturaUser
	 */
	static enableLogin(userId, loginId, password = null){
		let kparams = {};
		kparams.userId = userId;
		kparams.loginId = loginId;
		kparams.password = password;
		return new kaltura.RequestBuilder('user', 'enableLogin', kparams);
	};
	
	/**
	 * Creates a batch job that sends an email with a link to download a CSV containing a list of users.
	 * @param filter UserFilter A filter used to exclude specific types of users (optional, default: null)
	 * @param metadataProfileId int  (optional, default: null)
	 * @param additionalFields array  (optional, default: null)
	 * @param mappedFields array mapping between field (optional, default: null)
	 * @param options ExportToCsvOptions  (optional, default: null)
	 * @return string
	 */
	static exportToCsv(filter = null, metadataProfileId = null, additionalFields = null, mappedFields = null, options = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.metadataProfileId = metadataProfileId;
		kparams.additionalFields = additionalFields;
		kparams.mappedFields = mappedFields;
		kparams.options = options;
		return new kaltura.RequestBuilder('user', 'exportToCsv', kparams);
	};
	
	/**
	 * get QR image content.
	 * @param hashKey string 
	 * @return string
	 */
	static generateQrCode(hashKey){
		let kparams = {};
		kparams.hashKey = hashKey;
		return new kaltura.RequestBuilder('user', 'generateQrCode', kparams);
	};
	
	/**
	 * Retrieves a user object for a specified user ID.
	 * @param userId string The user's unique identifier in the partner's system (optional, default: null)
	 * @return KalturaUser
	 */
	static get(userId = null){
		let kparams = {};
		kparams.userId = userId;
		return new kaltura.RequestBuilder('user', 'get', kparams);
	};
	
	/**
	 * Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
	 * @param loginId string The user's email address that identifies the user for login
	 * @return KalturaUser
	 */
	static getByLoginId(loginId){
		let kparams = {};
		kparams.loginId = loginId;
		return new kaltura.RequestBuilder('user', 'getByLoginId', kparams);
	};
	
	/**
	 * Index an entry by id.
	 * @param id string 
	 * @param shouldUpdate bool  (optional, default: true)
	 * @return string
	 */
	static index(id, shouldUpdate = true){
		let kparams = {};
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('user', 'index', kparams);
	};
	
	/**
	 * Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
	 * @param filter UserFilter A filter used to exclude specific types of users (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaUserListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('user', 'list', kparams);
	};
	
	/**
	 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
	 * @param partnerId int The identifier of the partner account
	 * @param userId string The user's unique identifier in the partner's system
	 * @param password string The user's password
	 * @param expiry int The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours) (optional, default: 86400)
	 * @param privileges string Special privileges (optional, default: *)
	 * @return string
	 */
	static login(partnerId, userId, password, expiry = 86400, privileges = '*'){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.userId = userId;
		kparams.password = password;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		return new kaltura.RequestBuilder('user', 'login', kparams);
	};
	
	/**
	 * Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches.
	 * @param requestedPartnerId int 
	 * @return KalturaSessionResponse
	 */
	static loginByKs(requestedPartnerId){
		let kparams = {};
		kparams.requestedPartnerId = requestedPartnerId;
		return new kaltura.RequestBuilder('user', 'loginByKs', kparams);
	};
	
	/**
	 * Logs a user into a partner account with a user login ID and a user password.
	 * @param loginId string The user's email address that identifies the user for login
	 * @param password string The user's password
	 * @param partnerId int The identifier of the partner account (optional, default: null)
	 * @param expiry int The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours) (optional, default: 86400)
	 * @param privileges string Special privileges (optional, default: *)
	 * @param otp string the user's one-time password (optional, default: null)
	 * @return string
	 */
	static loginByLoginId(loginId, password, partnerId = null, expiry = 86400, privileges = '*', otp = null){
		let kparams = {};
		kparams.loginId = loginId;
		kparams.password = password;
		kparams.partnerId = partnerId;
		kparams.expiry = expiry;
		kparams.privileges = privileges;
		kparams.otp = otp;
		return new kaltura.RequestBuilder('user', 'loginByLoginId', kparams);
	};
	
	/**
	 * Resets user login password.
	 * @param loginDataId string The user's current email address that identified the user for login
	 * @param newPassword string The user's new password
	 * @return KalturaUser
	 */
	static loginDataResetPassword(loginDataId, newPassword){
		let kparams = {};
		kparams.loginDataId = loginDataId;
		kparams.newPassword = newPassword;
		return new kaltura.RequestBuilder('user', 'loginDataResetPassword', kparams);
	};
	
	/**
	 * Notifies that a user is banned from an account.
	 * @param userId string The user's unique identifier in the partner's system
	 */
	static notifyBan(userId){
		let kparams = {};
		kparams.userId = userId;
		return new kaltura.RequestBuilder('user', 'notifyBan', kparams);
	};
	
	/**
	 * Reset user's password and send the user an email to generate a new one.
	 * @param email string The user's email address (login email)
	 * @param linkType string kmc or kms (optional, enum: KalturaResetPassLinkType, default: null)
	 */
	static resetPassword(email, linkType = null){
		let kparams = {};
		kparams.email = email;
		kparams.linkType = linkType;
		return new kaltura.RequestBuilder('user', 'resetPassword', kparams);
	};
	
	/**
	 * Will serve a requested CSV.
	 * @param id string - the requested file id
	 * @return string
	 */
	static serveCsv(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('user', 'serveCsv', kparams);
	};
	
	/**
	 * Set initial user password.
	 * @param hashKey string The hash key used to identify the user (retrieved by email)
	 * @param newPassword string The new password to set for the user
	 * @return KalturaAuthentication
	 */
	static setInitialPassword(hashKey, newPassword){
		let kparams = {};
		kparams.hashKey = hashKey;
		kparams.newPassword = newPassword;
		return new kaltura.RequestBuilder('user', 'setInitialPassword', kparams);
	};
	
	/**
	 * Updates an existing user object.
 * You can also use this action to update the userId.
	 * @param userId string The user's unique identifier in the partner's system
	 * @param user User Id The user's unique identifier in the partner's system
	 * @return KalturaUser
	 */
	static update(userId, user){
		let kparams = {};
		kparams.userId = userId;
		kparams.user = user;
		return new kaltura.RequestBuilder('user', 'update', kparams);
	};
	
	/**
	 * Updates a user's login data: email, password, name.
	 * @param oldLoginId string The user's current email address that identified the user for login
	 * @param password string The user's current email address that identified the user for login
	 * @param newLoginId string Optional, The user's email address that will identify the user for login (optional)
	 * @param newPassword string Optional, The user's new password (optional)
	 * @param newFirstName string Optional, The user's new first name (optional, default: null)
	 * @param newLastName string Optional, The user's new last name (optional, default: null)
	 * @param otp string the user's one-time password (optional, default: null)
	 */
	static updateLoginData(oldLoginId, password, newLoginId = '', newPassword = '', newFirstName = null, newLastName = null, otp = null){
		let kparams = {};
		kparams.oldLoginId = oldLoginId;
		kparams.password = password;
		kparams.newLoginId = newLoginId;
		kparams.newPassword = newPassword;
		kparams.newFirstName = newFirstName;
		kparams.newLastName = newLastName;
		kparams.otp = otp;
		return new kaltura.RequestBuilder('user', 'updateLoginData', kparams);
	};
	
	/**
	 * Validate hash key.
	 * @param hashKey string The hash key used to identify the user (retrieved by email)
	 * @return KalturaAuthentication
	 */
	static validateHashKey(hashKey){
		let kparams = {};
		kparams.hashKey = hashKey;
		return new kaltura.RequestBuilder('user', 'validateHashKey', kparams);
	};
}
module.exports.user = user;


/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action add Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored.
 * @action clone Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
 * @action get Get widget by id.
 * @action list Retrieve a list of available widget depends on the filter given.
 * @action update Update existing widget.
 */
class widget{
	
	/**
	 * Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored.
	 * @param widget Widget 
	 * @return KalturaWidget
	 */
	static add(widget){
		let kparams = {};
		kparams.widget = widget;
		return new kaltura.RequestBuilder('widget', 'add', kparams);
	};
	
	/**
	 * Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
	 * @param widget Widget 
	 * @return KalturaWidget
	 */
	static cloneAction(widget){
		let kparams = {};
		kparams.widget = widget;
		return new kaltura.RequestBuilder('widget', 'clone', kparams);
	};
	
	/**
	 * Get widget by id.
	 * @param id string 
	 * @return KalturaWidget
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('widget', 'get', kparams);
	};
	
	/**
	 * Retrieve a list of available widget depends on the filter given.
	 * @param filter WidgetFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaWidgetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('widget', 'list', kparams);
	};
	
	/**
	 * Update existing widget.
	 * @param id string 
	 * @param widget Widget 
	 * @return KalturaWidget
	 */
	static update(id, widget){
		let kparams = {};
		kparams.id = id;
		kparams.widget = widget;
		return new kaltura.RequestBuilder('widget', 'update', kparams);
	};
}
module.exports.widget = widget;


/**
 *Class definition for the Kaltura service: annotation.
 * The available service actions:
 * @action add Allows you to add an annotation object associated with an entry.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action clone Clone cuePoint with id to given entry.
 * @action count count cue point objects by filter.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action get Retrieve an CuePoint object by id.
 * @action list List annotation objects by filter and pager.
 * @action update Update annotation by id.
 * @action updateCuePointsTimes .
 * @action updateStatus Update cuePoint status by id.
 */
class annotation{
	
	/**
	 * Allows you to add an annotation object associated with an entry.
	 * @param annotation CuePoint 
	 * @return KalturaAnnotation
	 */
	static add(annotation){
		let kparams = {};
		kparams.annotation = annotation;
		return new kaltura.RequestBuilder('annotation_annotation', 'add', kparams);
	};
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param fileData file 
	 * @return KalturaCuePointListResponse
	 */
	static addFromBulk(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('annotation_annotation', 'addFromBulk', kparams, kfiles);
	};
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param id string 
	 * @param entryId string 
	 * @param parentId string  (optional, default: null)
	 * @return KalturaAnnotation
	 */
	static cloneAction(id, entryId, parentId = null){
		let kparams = {};
		kparams.id = id;
		kparams.entryId = entryId;
		kparams.parentId = parentId;
		return new kaltura.RequestBuilder('annotation_annotation', 'clone', kparams);
	};
	
	/**
	 * count cue point objects by filter.
	 * @param filter CuePointFilter  (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('annotation_annotation', 'count', kparams);
	};
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('annotation_annotation', 'delete', kparams);
	};
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param id string 
	 * @return KalturaCuePoint
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('annotation_annotation', 'get', kparams);
	};
	
	/**
	 * List annotation objects by filter and pager.
	 * @param filter CuePointFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAnnotationListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('annotation_annotation', 'list', kparams);
	};
	
	/**
	 * Update annotation by id.
	 * @param id string 
	 * @param annotation CuePoint 
	 * @return KalturaAnnotation
	 */
	static update(id, annotation){
		let kparams = {};
		kparams.id = id;
		kparams.annotation = annotation;
		return new kaltura.RequestBuilder('annotation_annotation', 'update', kparams);
	};
	
	/**
	 * .
	 * @param id string 
	 * @param startTime int 
	 * @param endTime int  (optional, default: null)
	 * @return KalturaCuePoint
	 */
	static updateCuePointsTimes(id, startTime, endTime = null){
		let kparams = {};
		kparams.id = id;
		kparams.startTime = startTime;
		kparams.endTime = endTime;
		return new kaltura.RequestBuilder('annotation_annotation', 'updateCuePointsTimes', kparams);
	};
	
	/**
	 * Update cuePoint status by id.
	 * @param id string 
	 * @param status int  (enum: KalturaCuePointStatus)
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('annotation_annotation', 'updateStatus', kparams);
	};
}
module.exports.annotation = annotation;


/**
 *Class definition for the Kaltura service: aspera.
 * The available service actions:
 * @action getFaspUrl .
 */
class aspera{
	
	/**
	 * .
	 * @param flavorAssetId string 
	 * @return string
	 */
	static getFaspUrl(flavorAssetId){
		let kparams = {};
		kparams.flavorAssetId = flavorAssetId;
		return new kaltura.RequestBuilder('aspera_aspera', 'getFaspUrl', kparams);
	};
}
module.exports.aspera = aspera;


/**
 *Class definition for the Kaltura service: attachmentAsset.
 * The available service actions:
 * @action add Add attachment asset.
 * @action delete .
 * @action get .
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getUrl Get download URL for the asset.
 * @action list List attachment Assets by filter and pager.
 * @action setContent Update content of attachment asset.
 * @action update Update attachment asset.
 */
class attachmentAsset{
	
	/**
	 * Add attachment asset.
	 * @param entryId string 
	 * @param attachmentAsset AttachmentAsset 
	 * @return KalturaAttachmentAsset
	 */
	static add(entryId, attachmentAsset){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.attachmentAsset = attachmentAsset;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'add', kparams);
	};
	
	/**
	 * .
	 * @param attachmentAssetId string 
	 */
	static deleteAction(attachmentAssetId){
		let kparams = {};
		kparams.attachmentAssetId = attachmentAssetId;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'delete', kparams);
	};
	
	/**
	 * .
	 * @param attachmentAssetId string 
	 * @return KalturaAttachmentAsset
	 */
	static get(attachmentAssetId){
		let kparams = {};
		kparams.attachmentAssetId = attachmentAssetId;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'get', kparams);
	};
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param id string 
	 * @return KalturaRemotePathListResponse
	 */
	static getRemotePaths(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'getRemotePaths', kparams);
	};
	
	/**
	 * Get download URL for the asset.
	 * @param id string 
	 * @param storageId int  (optional, default: null)
	 * @return string
	 */
	static getUrl(id, storageId = null){
		let kparams = {};
		kparams.id = id;
		kparams.storageId = storageId;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'getUrl', kparams);
	};
	
	/**
	 * List attachment Assets by filter and pager.
	 * @param filter AssetFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAttachmentAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'list', kparams);
	};
	
	/**
	 * Update content of attachment asset.
	 * @param id string 
	 * @param contentResource ContentResource 
	 * @return KalturaAttachmentAsset
	 */
	static setContent(id, contentResource){
		let kparams = {};
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'setContent', kparams);
	};
	
	/**
	 * Update attachment asset.
	 * @param id string 
	 * @param attachmentAsset AttachmentAsset 
	 * @return KalturaAttachmentAsset
	 */
	static update(id, attachmentAsset){
		let kparams = {};
		kparams.id = id;
		kparams.attachmentAsset = attachmentAsset;
		return new kaltura.RequestBuilder('attachment_attachmentasset', 'update', kparams);
	};
}
module.exports.attachmentAsset = attachmentAsset;


/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action add Allows you to add an audit trail object and audit trail content associated with Kaltura object.
 * @action get Retrieve an audit trail object by id.
 * @action list List audit trail objects by filter and pager.
 */
class auditTrail{
	
	/**
	 * Allows you to add an audit trail object and audit trail content associated with Kaltura object.
	 * @param auditTrail AuditTrail 
	 * @return KalturaAuditTrail
	 */
	static add(auditTrail){
		let kparams = {};
		kparams.auditTrail = auditTrail;
		return new kaltura.RequestBuilder('audit_audittrail', 'add', kparams);
	};
	
	/**
	 * Retrieve an audit trail object by id.
	 * @param id int 
	 * @return KalturaAuditTrail
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('audit_audittrail', 'get', kparams);
	};
	
	/**
	 * List audit trail objects by filter and pager.
	 * @param filter AuditTrailFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaAuditTrailListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('audit_audittrail', 'list', kparams);
	};
}
module.exports.auditTrail = auditTrail;


/**
 *Class definition for the Kaltura service: beacon.
 * The available service actions:
 * @action add .
 * @action enhanceSearch .
 * @action list .
 * @action searchScheduledResource .
 */
class beacon{
	
	/**
	 * .
	 * @param beacon Beacon 
	 * @param shouldLog int  (optional, enum: KalturaNullableBoolean)
	 * @return bool
	 */
	static add(beacon, shouldLog = 0){
		let kparams = {};
		kparams.beacon = beacon;
		kparams.shouldLog = shouldLog;
		return new kaltura.RequestBuilder('beacon_beacon', 'add', kparams);
	};
	
	/**
	 * .
	 * @param filter BeaconEnhanceFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaBeaconListResponse
	 */
	static enhanceSearch(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('beacon_beacon', 'enhanceSearch', kparams);
	};
	
	/**
	 * .
	 * @param filter BeaconFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaBeaconListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('beacon_beacon', 'list', kparams);
	};
	
	/**
	 * .
	 * @param searchParams BeaconSearchParams 
	 * @param pager Pager  (optional, default: null)
	 * @return KalturaBeaconListResponse
	 */
	static searchScheduledResource(searchParams, pager = null){
		let kparams = {};
		kparams.searchParams = searchParams;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('beacon_beacon', 'searchScheduledResource', kparams);
	};
}
module.exports.beacon = beacon;


/**
 *Class definition for the Kaltura service: bulk.
 * The available service actions:
 * @action abort Aborts the bulk upload and all its child jobs.
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 */
class bulk{
	
	/**
	 * Aborts the bulk upload and all its child jobs.
	 * @param id int job id
	 * @return KalturaBulkUpload
	 */
	static abort(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('bulkupload_bulk', 'abort', kparams);
	};
	
	/**
	 * Get bulk upload batch job by id.
	 * @param id int 
	 * @return KalturaBulkUpload
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('bulkupload_bulk', 'get', kparams);
	};
	
	/**
	 * List bulk upload batch jobs.
	 * @param bulkUploadFilter BulkUploadFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaBulkUploadListResponse
	 */
	static listAction(bulkUploadFilter = null, pager = null){
		let kparams = {};
		kparams.bulkUploadFilter = bulkUploadFilter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('bulkupload_bulk', 'list', kparams);
	};
}
module.exports.bulk = bulk;


/**
 *Class definition for the Kaltura service: businessProcessCase.
 * The available service actions:
 * @action abort Abort business-process case.
 * @action list list business-process cases.
 */
class businessProcessCase{
	
	/**
	 * Abort business-process case.
	 * @param objectType string  (enum: KalturaEventNotificationEventObjectType)
	 * @param objectId string 
	 * @param businessProcessStartNotificationTemplateId int 
	 */
	static abort(objectType, objectId, businessProcessStartNotificationTemplateId){
		let kparams = {};
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.businessProcessStartNotificationTemplateId = businessProcessStartNotificationTemplateId;
		return new kaltura.RequestBuilder('businessprocessnotification_businessprocesscase', 'abort', kparams);
	};
	
	/**
	 * list business-process cases.
	 * @param objectType string  (enum: KalturaEventNotificationEventObjectType)
	 * @param objectId string 
	 * @return array
	 */
	static listAction(objectType, objectId){
		let kparams = {};
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new kaltura.RequestBuilder('businessprocessnotification_businessprocesscase', 'list', kparams);
	};
}
module.exports.businessProcessCase = businessProcessCase;


/**
 *Class definition for the Kaltura service: captionAsset.
 * The available service actions:
 * @action add Add caption asset.
 * @action delete .
 * @action export manually export an asset.
 * @action get .
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getUrl Get download URL for the asset.
 * @action list List caption Assets by filter and pager.
 * @action setAsDefault Markss the caption as default and removes that mark from all other caption assets of the entry.
 * @action setContent Update content of caption asset.
 * @action update Update caption asset.
 */
class captionAsset{
	
	/**
	 * Add caption asset.
	 * @param entryId string 
	 * @param captionAsset CaptionAsset 
	 * @return KalturaCaptionAsset
	 */
	static add(entryId, captionAsset){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.captionAsset = captionAsset;
		return new kaltura.RequestBuilder('caption_captionasset', 'add', kparams);
	};
	
	/**
	 * .
	 * @param captionAssetId string 
	 */
	static deleteAction(captionAssetId){
		let kparams = {};
		kparams.captionAssetId = captionAssetId;
		return new kaltura.RequestBuilder('caption_captionasset', 'delete', kparams);
	};
	
	/**
	 * manually export an asset.
	 * @param assetId string 
	 * @param storageProfileId int 
	 * @return KalturaFlavorAsset
	 */
	static exportAction(assetId, storageProfileId){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.storageProfileId = storageProfileId;
		return new kaltura.RequestBuilder('caption_captionasset', 'export', kparams);
	};
	
	/**
	 * .
	 * @param captionAssetId string 
	 * @return KalturaCaptionAsset
	 */
	static get(captionAssetId){
		let kparams = {};
		kparams.captionAssetId = captionAssetId;
		return new kaltura.RequestBuilder('caption_captionasset', 'get', kparams);
	};
	
	/**
	 * Get remote storage existing paths for the asset.
	 * @param id string 
	 * @return KalturaRemotePathListResponse
	 */
	static getRemotePaths(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('caption_captionasset', 'getRemotePaths', kparams);
	};
	
	/**
	 * Get download URL for the asset.
	 * @param id string 
	 * @param storageId int  (optional, default: null)
	 * @return string
	 */
	static getUrl(id, storageId = null){
		let kparams = {};
		kparams.id = id;
		kparams.storageId = storageId;
		return new kaltura.RequestBuilder('caption_captionasset', 'getUrl', kparams);
	};
	
	/**
	 * List caption Assets by filter and pager.
	 * @param filter AssetFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCaptionAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('caption_captionasset', 'list', kparams);
	};
	
	/**
	 * Markss the caption as default and removes that mark from all other caption assets of the entry.
	 * @param captionAssetId string 
	 */
	static setAsDefault(captionAssetId){
		let kparams = {};
		kparams.captionAssetId = captionAssetId;
		return new kaltura.RequestBuilder('caption_captionasset', 'setAsDefault', kparams);
	};
	
	/**
	 * Update content of caption asset.
	 * @param id string 
	 * @param contentResource ContentResource 
	 * @return KalturaCaptionAsset
	 */
	static setContent(id, contentResource){
		let kparams = {};
		kparams.id = id;
		kparams.contentResource = contentResource;
		return new kaltura.RequestBuilder('caption_captionasset', 'setContent', kparams);
	};
	
	/**
	 * Update caption asset.
	 * @param id string 
	 * @param captionAsset CaptionAsset 
	 * @return KalturaCaptionAsset
	 */
	static update(id, captionAsset){
		let kparams = {};
		kparams.id = id;
		kparams.captionAsset = captionAsset;
		return new kaltura.RequestBuilder('caption_captionasset', 'update', kparams);
	};
}
module.exports.captionAsset = captionAsset;


/**
 *Class definition for the Kaltura service: captionParams.
 * The available service actions:
 * @action add Add new Caption Params.
 * @action delete Delete Caption Params by ID.
 * @action get Get Caption Params by ID.
 * @action list List Caption Params by filter with paging support (By default - all system default params will be listed too).
 * @action update Update Caption Params by ID.
 */
class captionParams{
	
	/**
	 * Add new Caption Params.
	 * @param captionParams CaptionParams 
	 * @return KalturaCaptionParams
	 */
	static add(captionParams){
		let kparams = {};
		kparams.captionParams = captionParams;
		return new kaltura.RequestBuilder('caption_captionparams', 'add', kparams);
	};
	
	/**
	 * Delete Caption Params by ID.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('caption_captionparams', 'delete', kparams);
	};
	
	/**
	 * Get Caption Params by ID.
	 * @param id int 
	 * @return KalturaCaptionParams
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('caption_captionparams', 'get', kparams);
	};
	
	/**
	 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
	 * @param filter CaptionParamsFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCaptionParamsListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('caption_captionparams', 'list', kparams);
	};
	
	/**
	 * Update Caption Params by ID.
	 * @param id int 
	 * @param captionParams CaptionParams 
	 * @return KalturaCaptionParams
	 */
	static update(id, captionParams){
		let kparams = {};
		kparams.id = id;
		kparams.captionParams = captionParams;
		return new kaltura.RequestBuilder('caption_captionparams', 'update', kparams);
	};
}
module.exports.captionParams = captionParams;


/**
 *Class definition for the Kaltura service: captionAssetItem.
 * The available service actions:
 * @action list List caption asset items by filter and pager.
 * @action parse Parse content of caption asset and index it.
 * @action search Search caption asset items by filter, pager and free text.
 * @action searchEntries Search caption asset items by filter, pager and free text.
 */
class captionAssetItem{
	
	/**
	 * List caption asset items by filter and pager.
	 * @param captionAssetId string 
	 * @param captionAssetItemFilter CaptionAssetItemFilter  (optional, default: null)
	 * @param captionAssetItemPager FilterPager  (optional, default: null)
	 * @return KalturaCaptionAssetItemListResponse
	 */
	static listAction(captionAssetId, captionAssetItemFilter = null, captionAssetItemPager = null){
		let kparams = {};
		kparams.captionAssetId = captionAssetId;
		kparams.captionAssetItemFilter = captionAssetItemFilter;
		kparams.captionAssetItemPager = captionAssetItemPager;
		return new kaltura.RequestBuilder('captionsearch_captionassetitem', 'list', kparams);
	};
	
	/**
	 * Parse content of caption asset and index it.
	 * @param captionAssetId string 
	 */
	static parse(captionAssetId){
		let kparams = {};
		kparams.captionAssetId = captionAssetId;
		return new kaltura.RequestBuilder('captionsearch_captionassetitem', 'parse', kparams);
	};
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param entryFilter BaseEntryFilter  (optional, default: null)
	 * @param captionAssetItemFilter CaptionAssetItemFilter  (optional, default: null)
	 * @param captionAssetItemPager FilterPager  (optional, default: null)
	 * @return KalturaCaptionAssetItemListResponse
	 */
	static search(entryFilter = null, captionAssetItemFilter = null, captionAssetItemPager = null){
		let kparams = {};
		kparams.entryFilter = entryFilter;
		kparams.captionAssetItemFilter = captionAssetItemFilter;
		kparams.captionAssetItemPager = captionAssetItemPager;
		return new kaltura.RequestBuilder('captionsearch_captionassetitem', 'search', kparams);
	};
	
	/**
	 * Search caption asset items by filter, pager and free text.
	 * @param entryFilter BaseEntryFilter  (optional, default: null)
	 * @param captionAssetItemFilter CaptionAssetItemFilter  (optional, default: null)
	 * @param captionAssetItemPager FilterPager  (optional, default: null)
	 * @return KalturaBaseEntryListResponse
	 */
	static searchEntries(entryFilter = null, captionAssetItemFilter = null, captionAssetItemPager = null){
		let kparams = {};
		kparams.entryFilter = entryFilter;
		kparams.captionAssetItemFilter = captionAssetItemFilter;
		kparams.captionAssetItemPager = captionAssetItemPager;
		return new kaltura.RequestBuilder('captionsearch_captionassetitem', 'searchEntries', kparams);
	};
}
module.exports.captionAssetItem = captionAssetItem;


/**
 *Class definition for the Kaltura service: distributionProfile.
 * The available service actions:
 * @action add Add new Distribution Profile.
 * @action delete Delete Distribution Profile by id.
 * @action get Get Distribution Profile by id.
 * @action list List all distribution providers.
 * @action listByPartner .
 * @action update Update Distribution Profile by id.
 * @action updateStatus Update Distribution Profile status by id.
 */
class distributionProfile{
	
	/**
	 * Add new Distribution Profile.
	 * @param distributionProfile DistributionProfile 
	 * @return KalturaDistributionProfile
	 */
	static add(distributionProfile){
		let kparams = {};
		kparams.distributionProfile = distributionProfile;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'add', kparams);
	};
	
	/**
	 * Delete Distribution Profile by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'delete', kparams);
	};
	
	/**
	 * Get Distribution Profile by id.
	 * @param id int 
	 * @return KalturaDistributionProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'get', kparams);
	};
	
	/**
	 * List all distribution providers.
	 * @param filter DistributionProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDistributionProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'list', kparams);
	};
	
	/**
	 * .
	 * @param filter PartnerFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDistributionProfileListResponse
	 */
	static listByPartner(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'listByPartner', kparams);
	};
	
	/**
	 * Update Distribution Profile by id.
	 * @param id int 
	 * @param distributionProfile DistributionProfile 
	 * @return KalturaDistributionProfile
	 */
	static update(id, distributionProfile){
		let kparams = {};
		kparams.id = id;
		kparams.distributionProfile = distributionProfile;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'update', kparams);
	};
	
	/**
	 * Update Distribution Profile status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaDistributionProfileStatus)
	 * @return KalturaDistributionProfile
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('contentdistribution_distributionprofile', 'updateStatus', kparams);
	};
}
module.exports.distributionProfile = distributionProfile;


/**
 *Class definition for the Kaltura service: entryDistribution.
 * The available service actions:
 * @action add Add new Entry Distribution.
 * @action delete Delete Entry Distribution by id.
 * @action get Get Entry Distribution by id.
 * @action list List all distribution providers.
 * @action retrySubmit Retries last submit action.
 * @action submitAdd Submits Entry Distribution to the remote destination.
 * @action submitDelete Deletes Entry Distribution from the remote destination.
 * @action submitFetchReport Submits Entry Distribution report request.
 * @action submitUpdate Submits Entry Distribution changes to the remote destination.
 * @action update Update Entry Distribution by id.
 * @action validate Validates Entry Distribution by id for submission.
 */
class entryDistribution{
	
	/**
	 * Add new Entry Distribution.
	 * @param entryDistribution EntryDistribution 
	 * @return KalturaEntryDistribution
	 */
	static add(entryDistribution){
		let kparams = {};
		kparams.entryDistribution = entryDistribution;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'add', kparams);
	};
	
	/**
	 * Delete Entry Distribution by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'delete', kparams);
	};
	
	/**
	 * Get Entry Distribution by id.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'get', kparams);
	};
	
	/**
	 * List all distribution providers.
	 * @param filter EntryDistributionFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEntryDistributionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'list', kparams);
	};
	
	/**
	 * Retries last submit action.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static retrySubmit(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'retrySubmit', kparams);
	};
	
	/**
	 * Submits Entry Distribution to the remote destination.
	 * @param id int 
	 * @param submitWhenReady bool  (optional, default: false)
	 * @return KalturaEntryDistribution
	 */
	static submitAdd(id, submitWhenReady = false){
		let kparams = {};
		kparams.id = id;
		kparams.submitWhenReady = submitWhenReady;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'submitAdd', kparams);
	};
	
	/**
	 * Deletes Entry Distribution from the remote destination.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static submitDelete(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'submitDelete', kparams);
	};
	
	/**
	 * Submits Entry Distribution report request.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static submitFetchReport(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'submitFetchReport', kparams);
	};
	
	/**
	 * Submits Entry Distribution changes to the remote destination.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static submitUpdate(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'submitUpdate', kparams);
	};
	
	/**
	 * Update Entry Distribution by id.
	 * @param id int 
	 * @param entryDistribution EntryDistribution 
	 * @return KalturaEntryDistribution
	 */
	static update(id, entryDistribution){
		let kparams = {};
		kparams.id = id;
		kparams.entryDistribution = entryDistribution;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'update', kparams);
	};
	
	/**
	 * Validates Entry Distribution by id for submission.
	 * @param id int 
	 * @return KalturaEntryDistribution
	 */
	static validate(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_entrydistribution', 'validate', kparams);
	};
}
module.exports.entryDistribution = entryDistribution;


/**
 *Class definition for the Kaltura service: distributionProvider.
 * The available service actions:
 * @action list List all distribution providers.
 */
class distributionProvider{
	
	/**
	 * List all distribution providers.
	 * @param filter DistributionProviderFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDistributionProviderListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_distributionprovider', 'list', kparams);
	};
}
module.exports.distributionProvider = distributionProvider;


/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 * The available service actions:
 * @action add Add new Generic Distribution Provider.
 * @action delete Delete Generic Distribution Provider by id.
 * @action get Get Generic Distribution Provider by id.
 * @action list List all distribution providers.
 * @action update Update Generic Distribution Provider by id.
 */
class genericDistributionProvider{
	
	/**
	 * Add new Generic Distribution Provider.
	 * @param genericDistributionProvider GenericDistributionProvider 
	 * @return KalturaGenericDistributionProvider
	 */
	static add(genericDistributionProvider){
		let kparams = {};
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovider', 'add', kparams);
	};
	
	/**
	 * Delete Generic Distribution Provider by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovider', 'delete', kparams);
	};
	
	/**
	 * Get Generic Distribution Provider by id.
	 * @param id int 
	 * @return KalturaGenericDistributionProvider
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovider', 'get', kparams);
	};
	
	/**
	 * List all distribution providers.
	 * @param filter GenericDistributionProviderFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaGenericDistributionProviderListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovider', 'list', kparams);
	};
	
	/**
	 * Update Generic Distribution Provider by id.
	 * @param id int 
	 * @param genericDistributionProvider GenericDistributionProvider 
	 * @return KalturaGenericDistributionProvider
	 */
	static update(id, genericDistributionProvider){
		let kparams = {};
		kparams.id = id;
		kparams.genericDistributionProvider = genericDistributionProvider;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovider', 'update', kparams);
	};
}
module.exports.genericDistributionProvider = genericDistributionProvider;


/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 * The available service actions:
 * @action add Add new Generic Distribution Provider Action.
 * @action addMrssTransform Add MRSS transform file to generic distribution provider action.
 * @action addMrssTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action addMrssValidate Add MRSS validate file to generic distribution provider action.
 * @action addMrssValidateFromFile Add MRSS validate file to generic distribution provider action.
 * @action addResultsTransform Add results transform file to generic distribution provider action.
 * @action addResultsTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action delete Delete Generic Distribution Provider Action by id.
 * @action deleteByProviderId Delete Generic Distribution Provider Action by provider id.
 * @action get Get Generic Distribution Provider Action by id.
 * @action getByProviderId Get Generic Distribution Provider Action by provider id.
 * @action list List all distribution providers.
 * @action update Update Generic Distribution Provider Action by id.
 * @action updateByProviderId Update Generic Distribution Provider Action by provider id.
 */
class genericDistributionProviderAction{
	
	/**
	 * Add new Generic Distribution Provider Action.
	 * @param genericDistributionProviderAction GenericDistributionProviderAction 
	 * @return KalturaGenericDistributionProviderAction
	 */
	static add(genericDistributionProviderAction){
		let kparams = {};
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'add', kparams);
	};
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param xslData string XSL MRSS transformation data
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addMrssTransform(id, xslData){
		let kparams = {};
		kparams.id = id;
		kparams.xslData = xslData;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addMrssTransform', kparams);
	};
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param xslFile file XSL MRSS transformation file
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addMrssTransformFromFile(id, xslFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xslFile = xslFile;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addMrssTransformFromFile', kparams, kfiles);
	};
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param xsdData string XSD MRSS validatation data
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addMrssValidate(id, xsdData){
		let kparams = {};
		kparams.id = id;
		kparams.xsdData = xsdData;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addMrssValidate', kparams);
	};
	
	/**
	 * Add MRSS validate file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param xsdFile file XSD MRSS validatation file
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addMrssValidateFromFile(id, xsdFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xsdFile = xsdFile;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addMrssValidateFromFile', kparams, kfiles);
	};
	
	/**
	 * Add results transform file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param transformData string transformation data xsl, xPath or regex
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addResultsTransform(id, transformData){
		let kparams = {};
		kparams.id = id;
		kparams.transformData = transformData;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addResultsTransform', kparams);
	};
	
	/**
	 * Add MRSS transform file to generic distribution provider action.
	 * @param id int the id of the generic distribution provider action
	 * @param transformFile file transformation file xsl, xPath or regex
	 * @return KalturaGenericDistributionProviderAction
	 */
	static addResultsTransformFromFile(id, transformFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.transformFile = transformFile;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'addResultsTransformFromFile', kparams, kfiles);
	};
	
	/**
	 * Delete Generic Distribution Provider Action by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'delete', kparams);
	};
	
	/**
	 * Delete Generic Distribution Provider Action by provider id.
	 * @param genericDistributionProviderId int 
	 * @param actionType int  (enum: KalturaDistributionAction)
	 */
	static deleteByProviderId(genericDistributionProviderId, actionType){
		let kparams = {};
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'deleteByProviderId', kparams);
	};
	
	/**
	 * Get Generic Distribution Provider Action by id.
	 * @param id int 
	 * @return KalturaGenericDistributionProviderAction
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'get', kparams);
	};
	
	/**
	 * Get Generic Distribution Provider Action by provider id.
	 * @param genericDistributionProviderId int 
	 * @param actionType int  (enum: KalturaDistributionAction)
	 * @return KalturaGenericDistributionProviderAction
	 */
	static getByProviderId(genericDistributionProviderId, actionType){
		let kparams = {};
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'getByProviderId', kparams);
	};
	
	/**
	 * List all distribution providers.
	 * @param filter GenericDistributionProviderActionFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaGenericDistributionProviderActionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'list', kparams);
	};
	
	/**
	 * Update Generic Distribution Provider Action by id.
	 * @param id int 
	 * @param genericDistributionProviderAction GenericDistributionProviderAction 
	 * @return KalturaGenericDistributionProviderAction
	 */
	static update(id, genericDistributionProviderAction){
		let kparams = {};
		kparams.id = id;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'update', kparams);
	};
	
	/**
	 * Update Generic Distribution Provider Action by provider id.
	 * @param genericDistributionProviderId int 
	 * @param actionType int  (enum: KalturaDistributionAction)
	 * @param genericDistributionProviderAction GenericDistributionProviderAction 
	 * @return KalturaGenericDistributionProviderAction
	 */
	static updateByProviderId(genericDistributionProviderId, actionType, genericDistributionProviderAction){
		let kparams = {};
		kparams.genericDistributionProviderId = genericDistributionProviderId;
		kparams.actionType = actionType;
		kparams.genericDistributionProviderAction = genericDistributionProviderAction;
		return new kaltura.RequestBuilder('contentdistribution_genericdistributionprovideraction', 'updateByProviderId', kparams);
	};
}
module.exports.genericDistributionProviderAction = genericDistributionProviderAction;


/**
 *Class definition for the Kaltura service: cuePoint.
 * The available service actions:
 * @action add Allows you to add an cue point object associated with an entry.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action clone Clone cuePoint with id to given entry.
 * @action count count cue point objects by filter.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action get Retrieve an CuePoint object by id.
 * @action list List cue point objects by filter and pager.
 * @action update Update cue point by id.
 * @action updateCuePointsTimes .
 * @action updateStatus Update cuePoint status by id.
 */
class cuePoint{
	
	/**
	 * Allows you to add an cue point object associated with an entry.
	 * @param cuePoint CuePoint 
	 * @return KalturaCuePoint
	 */
	static add(cuePoint){
		let kparams = {};
		kparams.cuePoint = cuePoint;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'add', kparams);
	};
	
	/**
	 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
	 * @param fileData file 
	 * @return KalturaCuePointListResponse
	 */
	static addFromBulk(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'addFromBulk', kparams, kfiles);
	};
	
	/**
	 * Clone cuePoint with id to given entry.
	 * @param id string 
	 * @param entryId string 
	 * @return KalturaCuePoint
	 */
	static cloneAction(id, entryId){
		let kparams = {};
		kparams.id = id;
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'clone', kparams);
	};
	
	/**
	 * count cue point objects by filter.
	 * @param filter CuePointFilter  (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'count', kparams);
	};
	
	/**
	 * delete cue point by id, and delete all children cue points.
	 * @param id string 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'delete', kparams);
	};
	
	/**
	 * Retrieve an CuePoint object by id.
	 * @param id string 
	 * @return KalturaCuePoint
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'get', kparams);
	};
	
	/**
	 * List cue point objects by filter and pager.
	 * @param filter CuePointFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaCuePointListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'list', kparams);
	};
	
	/**
	 * Update cue point by id.
	 * @param id string 
	 * @param cuePoint CuePoint 
	 * @return KalturaCuePoint
	 */
	static update(id, cuePoint){
		let kparams = {};
		kparams.id = id;
		kparams.cuePoint = cuePoint;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'update', kparams);
	};
	
	/**
	 * .
	 * @param id string 
	 * @param startTime int 
	 * @param endTime int  (optional, default: null)
	 * @return KalturaCuePoint
	 */
	static updateCuePointsTimes(id, startTime, endTime = null){
		let kparams = {};
		kparams.id = id;
		kparams.startTime = startTime;
		kparams.endTime = endTime;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'updateCuePointsTimes', kparams);
	};
	
	/**
	 * Update cuePoint status by id.
	 * @param id string 
	 * @param status int  (enum: KalturaCuePointStatus)
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('cuepoint_cuepoint', 'updateStatus', kparams);
	};
}
module.exports.cuePoint = cuePoint;


/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action addFromUploadedFile Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action approveReplace Approves document replacement.
 * @action cancelReplace Cancels document replacement.
 * @action convert Convert entry.
 * @action convertPptToSwf This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @action delete Delete a document entry.
 * @action get Get document entry by ID.
 * @action list List document entries by filter with paging support.
 * @action update Update document entry. Only the properties that were set will be updated.
 * @action updateContent Replace content associated with the given document entry.
 * @action upload Upload a document file to Kaltura, then the file can be used to create a document entry.
 */
class documents{
	
	/**
	 * Copy entry into new entry.
	 * @param sourceEntryId string Document entry id to copy from
	 * @param documentEntry DocumentEntry Document entry metadata (optional, default: null)
	 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null)
	 * @return KalturaDocumentEntry
	 */
	static addFromEntry(sourceEntryId, documentEntry = null, sourceFlavorParamsId = null){
		let kparams = {};
		kparams.sourceEntryId = sourceEntryId;
		kparams.documentEntry = documentEntry;
		kparams.sourceFlavorParamsId = sourceFlavorParamsId;
		return new kaltura.RequestBuilder('document_documents', 'addFromEntry', kparams);
	};
	
	/**
	 * Copy flavor asset into new entry.
	 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source
	 * @param documentEntry DocumentEntry Document entry metadata (optional, default: null)
	 * @return KalturaDocumentEntry
	 */
	static addFromFlavorAsset(sourceFlavorAssetId, documentEntry = null){
		let kparams = {};
		kparams.sourceFlavorAssetId = sourceFlavorAssetId;
		kparams.documentEntry = documentEntry;
		return new kaltura.RequestBuilder('document_documents', 'addFromFlavorAsset', kparams);
	};
	
	/**
	 * Add new document entry after the specific document file was uploaded and the upload token id exists.
	 * @param documentEntry DocumentEntry Document entry metadata
	 * @param uploadTokenId string Upload token id
	 * @return KalturaDocumentEntry
	 */
	static addFromUploadedFile(documentEntry, uploadTokenId){
		let kparams = {};
		kparams.documentEntry = documentEntry;
		kparams.uploadTokenId = uploadTokenId;
		return new kaltura.RequestBuilder('document_documents', 'addFromUploadedFile', kparams);
	};
	
	/**
	 * Approves document replacement.
	 * @param entryId string document entry id to replace
	 * @return KalturaDocumentEntry
	 */
	static approveReplace(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('document_documents', 'approveReplace', kparams);
	};
	
	/**
	 * Cancels document replacement.
	 * @param entryId string Document entry id to cancel
	 * @return KalturaDocumentEntry
	 */
	static cancelReplace(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('document_documents', 'cancelReplace', kparams);
	};
	
	/**
	 * Convert entry.
	 * @param entryId string Document entry id
	 * @param conversionProfileId int  (optional, default: null)
	 * @param dynamicConversionAttributes array  (optional, default: null)
	 * @return bigint
	 */
	static convert(entryId, conversionProfileId = null, dynamicConversionAttributes = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.conversionProfileId = conversionProfileId;
		kparams.dynamicConversionAttributes = dynamicConversionAttributes;
		return new kaltura.RequestBuilder('document_documents', 'convert', kparams);
	};
	
	/**
	 * This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
	 * @param entryId string 
	 * @return string
	 */
	static convertPptToSwf(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('document_documents', 'convertPptToSwf', kparams);
	};
	
	/**
	 * Delete a document entry.
	 * @param entryId string Document entry id to delete
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('document_documents', 'delete', kparams);
	};
	
	/**
	 * Get document entry by ID.
	 * @param entryId string Document entry id
	 * @param version int Desired version of the data (optional, default: -1)
	 * @return KalturaDocumentEntry
	 */
	static get(entryId, version = -1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		return new kaltura.RequestBuilder('document_documents', 'get', kparams);
	};
	
	/**
	 * List document entries by filter with paging support.
	 * @param filter DocumentEntryFilter Document entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaDocumentListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('document_documents', 'list', kparams);
	};
	
	/**
	 * Update document entry. Only the properties that were set will be updated.
	 * @param entryId string Document entry id to update
	 * @param documentEntry DocumentEntry Document entry metadata to update
	 * @return KalturaDocumentEntry
	 */
	static update(entryId, documentEntry){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.documentEntry = documentEntry;
		return new kaltura.RequestBuilder('document_documents', 'update', kparams);
	};
	
	/**
	 * Replace content associated with the given document entry.
	 * @param entryId string document entry id to update
	 * @param resource Resource Resource to be used to replace entry doc content
	 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null)
	 * @return KalturaDocumentEntry
	 */
	static updateContent(entryId, resource, conversionProfileId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.resource = resource;
		kparams.conversionProfileId = conversionProfileId;
		return new kaltura.RequestBuilder('document_documents', 'updateContent', kparams);
	};
	
	/**
	 * Upload a document file to Kaltura, then the file can be used to create a document entry.
	 * @param fileData file The file data
	 * @return string
	 */
	static upload(fileData){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		return new kaltura.RequestBuilder('document_documents', 'upload', kparams, kfiles);
	};
}
module.exports.documents = documents;


/**
 *Class definition for the Kaltura service: drmPolicy.
 * The available service actions:
 * @action add Allows you to add a new DrmPolicy object.
 * @action delete Mark the KalturaDrmPolicy object as deleted.
 * @action get Retrieve a KalturaDrmPolicy object by ID.
 * @action list List KalturaDrmPolicy objects.
 * @action update Update an existing KalturaDrmPolicy object.
 */
class drmPolicy{
	
	/**
	 * Allows you to add a new DrmPolicy object.
	 * @param drmPolicy DrmPolicy 
	 * @return KalturaDrmPolicy
	 */
	static add(drmPolicy){
		let kparams = {};
		kparams.drmPolicy = drmPolicy;
		return new kaltura.RequestBuilder('drm_drmpolicy', 'add', kparams);
	};
	
	/**
	 * Mark the KalturaDrmPolicy object as deleted.
	 * @param drmPolicyId int 
	 * @return KalturaDrmPolicy
	 */
	static deleteAction(drmPolicyId){
		let kparams = {};
		kparams.drmPolicyId = drmPolicyId;
		return new kaltura.RequestBuilder('drm_drmpolicy', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaDrmPolicy object by ID.
	 * @param drmPolicyId int 
	 * @return KalturaDrmPolicy
	 */
	static get(drmPolicyId){
		let kparams = {};
		kparams.drmPolicyId = drmPolicyId;
		return new kaltura.RequestBuilder('drm_drmpolicy', 'get', kparams);
	};
	
	/**
	 * List KalturaDrmPolicy objects.
	 * @param filter DrmPolicyFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDrmPolicyListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('drm_drmpolicy', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaDrmPolicy object.
	 * @param drmPolicyId int 
	 * @param drmPolicy DrmPolicy Id
	 * @return KalturaDrmPolicy
	 */
	static update(drmPolicyId, drmPolicy){
		let kparams = {};
		kparams.drmPolicyId = drmPolicyId;
		kparams.drmPolicy = drmPolicy;
		return new kaltura.RequestBuilder('drm_drmpolicy', 'update', kparams);
	};
}
module.exports.drmPolicy = drmPolicy;


/**
 *Class definition for the Kaltura service: drmProfile.
 * The available service actions:
 * @action add Allows you to add a new DrmProfile object.
 * @action delete Mark the KalturaDrmProfile object as deleted.
 * @action get Retrieve a KalturaDrmProfile object by ID.
 * @action getByProvider Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
 * @action list List KalturaDrmProfile objects.
 * @action update Update an existing KalturaDrmProfile object.
 */
class drmProfile{
	
	/**
	 * Allows you to add a new DrmProfile object.
	 * @param drmProfile DrmProfile 
	 * @return KalturaDrmProfile
	 */
	static add(drmProfile){
		let kparams = {};
		kparams.drmProfile = drmProfile;
		return new kaltura.RequestBuilder('drm_drmprofile', 'add', kparams);
	};
	
	/**
	 * Mark the KalturaDrmProfile object as deleted.
	 * @param drmProfileId int 
	 * @return KalturaDrmProfile
	 */
	static deleteAction(drmProfileId){
		let kparams = {};
		kparams.drmProfileId = drmProfileId;
		return new kaltura.RequestBuilder('drm_drmprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaDrmProfile object by ID.
	 * @param drmProfileId int 
	 * @return KalturaDrmProfile
	 */
	static get(drmProfileId){
		let kparams = {};
		kparams.drmProfileId = drmProfileId;
		return new kaltura.RequestBuilder('drm_drmprofile', 'get', kparams);
	};
	
	/**
	 * Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
	 * @param provider string  (enum: KalturaDrmProviderType)
	 * @return KalturaDrmProfile
	 */
	static getByProvider(provider){
		let kparams = {};
		kparams.provider = provider;
		return new kaltura.RequestBuilder('drm_drmprofile', 'getByProvider', kparams);
	};
	
	/**
	 * List KalturaDrmProfile objects.
	 * @param filter DrmProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDrmProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('drm_drmprofile', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaDrmProfile object.
	 * @param drmProfileId int 
	 * @param drmProfile DrmProfile Id
	 * @return KalturaDrmProfile
	 */
	static update(drmProfileId, drmProfile){
		let kparams = {};
		kparams.drmProfileId = drmProfileId;
		kparams.drmProfile = drmProfile;
		return new kaltura.RequestBuilder('drm_drmprofile', 'update', kparams);
	};
}
module.exports.drmProfile = drmProfile;


/**
 *Class definition for the Kaltura service: drmLicenseAccess.
 * The available service actions:
 * @action getAccess getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
 */
class drmLicenseAccess{
	
	/**
	 * getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
	 * @param entryId string 
	 * @param flavorIds string 
	 * @param referrer string 
	 * @return KalturaDrmLicenseAccessDetails
	 */
	static getAccess(entryId, flavorIds, referrer){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.flavorIds = flavorIds;
		kparams.referrer = referrer;
		return new kaltura.RequestBuilder('drm_drmlicenseaccess', 'getAccess', kparams);
	};
}
module.exports.drmLicenseAccess = drmLicenseAccess;


/**
 *Class definition for the Kaltura service: dropFolder.
 * The available service actions:
 * @action add Allows you to add a new KalturaDropFolder object.
 * @action delete Mark the KalturaDropFolder object as deleted.
 * @action freeExclusiveDropFolder freeExclusive KalturaDropFolder object.
 * @action get Retrieve a KalturaDropFolder object by ID.
 * @action getExclusiveDropFolder getExclusive KalturaDropFolder object.
 * @action list List KalturaDropFolder objects.
 * @action update Update an existing KalturaDropFolder object.
 * @action updateBasicFields .
 * @action updateStatus .
 */
class dropFolder{
	
	/**
	 * Allows you to add a new KalturaDropFolder object.
	 * @param dropFolder DropFolder 
	 * @return KalturaDropFolder
	 */
	static add(dropFolder){
		let kparams = {};
		kparams.dropFolder = dropFolder;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'add', kparams);
	};
	
	/**
	 * Mark the KalturaDropFolder object as deleted.
	 * @param dropFolderId int 
	 * @return KalturaDropFolder
	 */
	static deleteAction(dropFolderId){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'delete', kparams);
	};
	
	/**
	 * freeExclusive KalturaDropFolder object.
	 * @param dropFolderId int 
	 * @param errorCode string  (optional, default: null)
	 * @param errorDescription string  (optional, default: null)
	 * @return KalturaDropFolder
	 */
	static freeExclusiveDropFolder(dropFolderId, errorCode = null, errorDescription = null){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		kparams.errorCode = errorCode;
		kparams.errorDescription = errorDescription;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'freeExclusiveDropFolder', kparams);
	};
	
	/**
	 * Retrieve a KalturaDropFolder object by ID.
	 * @param dropFolderId int 
	 * @return KalturaDropFolder
	 */
	static get(dropFolderId){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'get', kparams);
	};
	
	/**
	 * getExclusive KalturaDropFolder object.
	 * @param tag string 
	 * @param maxTime int 
	 * @return KalturaDropFolder
	 */
	static getExclusiveDropFolder(tag, maxTime){
		let kparams = {};
		kparams.tag = tag;
		kparams.maxTime = maxTime;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'getExclusiveDropFolder', kparams);
	};
	
	/**
	 * List KalturaDropFolder objects.
	 * @param filter DropFolderFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDropFolderListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaDropFolder object.
	 * @param dropFolderId int 
	 * @param dropFolder DropFolder Id
	 * @return KalturaDropFolder
	 */
	static update(dropFolderId, dropFolder){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'update', kparams);
	};
	
	/**
	 * .
	 * @param dropFolderId int 
	 * @param dropFolder BasicFieldsDropFolder Id
	 * @return KalturaDropFolder
	 */
	static updateBasicFields(dropFolderId, dropFolder){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		kparams.dropFolder = dropFolder;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'updateBasicFields', kparams);
	};
	
	/**
	 * .
	 * @param dropFolderId int 
	 * @param status int  (enum: KalturaDropFolderStatus)
	 */
	static updateStatus(dropFolderId, status){
		let kparams = {};
		kparams.dropFolderId = dropFolderId;
		kparams.status = status;
		return new kaltura.RequestBuilder('dropfolder_dropfolder', 'updateStatus', kparams);
	};
}
module.exports.dropFolder = dropFolder;


/**
 *Class definition for the Kaltura service: dropFolderFile.
 * The available service actions:
 * @action add Allows you to add a new KalturaDropFolderFile object.
 * @action delete Mark the KalturaDropFolderFile object as deleted.
 * @action get Retrieve a KalturaDropFolderFile object by ID.
 * @action ignore Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
 * @action list List KalturaDropFolderFile objects.
 * @action update Update an existing KalturaDropFolderFile object.
 * @action updateStatus Update status of KalturaDropFolderFile.
 */
class dropFolderFile{
	
	/**
	 * Allows you to add a new KalturaDropFolderFile object.
	 * @param dropFolderFile DropFolderFile 
	 * @return KalturaDropFolderFile
	 */
	static add(dropFolderFile){
		let kparams = {};
		kparams.dropFolderFile = dropFolderFile;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'add', kparams);
	};
	
	/**
	 * Mark the KalturaDropFolderFile object as deleted.
	 * @param dropFolderFileId int 
	 * @return KalturaDropFolderFile
	 */
	static deleteAction(dropFolderFileId){
		let kparams = {};
		kparams.dropFolderFileId = dropFolderFileId;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaDropFolderFile object by ID.
	 * @param dropFolderFileId int 
	 * @return KalturaDropFolderFile
	 */
	static get(dropFolderFileId){
		let kparams = {};
		kparams.dropFolderFileId = dropFolderFileId;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'get', kparams);
	};
	
	/**
	 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
	 * @param dropFolderFileId int 
	 * @return KalturaDropFolderFile
	 */
	static ignore(dropFolderFileId){
		let kparams = {};
		kparams.dropFolderFileId = dropFolderFileId;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'ignore', kparams);
	};
	
	/**
	 * List KalturaDropFolderFile objects.
	 * @param filter DropFolderFileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaDropFolderFileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaDropFolderFile object.
	 * @param dropFolderFileId int 
	 * @param dropFolderFile DropFolderFile Id
	 * @return KalturaDropFolderFile
	 */
	static update(dropFolderFileId, dropFolderFile){
		let kparams = {};
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.dropFolderFile = dropFolderFile;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'update', kparams);
	};
	
	/**
	 * Update status of KalturaDropFolderFile.
	 * @param dropFolderFileId int 
	 * @param status int  (enum: KalturaDropFolderFileStatus)
	 * @return KalturaDropFolderFile
	 */
	static updateStatus(dropFolderFileId, status){
		let kparams = {};
		kparams.dropFolderFileId = dropFolderFileId;
		kparams.status = status;
		return new kaltura.RequestBuilder('dropfolder_dropfolderfile', 'updateStatus', kparams);
	};
}
module.exports.dropFolderFile = dropFolderFile;


/**
 *Class definition for the Kaltura service: eSearch.
 * The available service actions:
 * @action searchCategory .
 * @action searchEntry .
 * @action searchGroup .
 * @action searchUser .
 */
class eSearch{
	
	/**
	 * .
	 * @param searchParams ESearchCategoryParams 
	 * @param pager Pager  (optional, default: null)
	 * @return KalturaESearchCategoryResponse
	 */
	static searchCategory(searchParams, pager = null){
		let kparams = {};
		kparams.searchParams = searchParams;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('elasticsearch_esearch', 'searchCategory', kparams);
	};
	
	/**
	 * .
	 * @param searchParams ESearchEntryParams 
	 * @param pager Pager  (optional, default: null)
	 * @return KalturaESearchEntryResponse
	 */
	static searchEntry(searchParams, pager = null){
		let kparams = {};
		kparams.searchParams = searchParams;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('elasticsearch_esearch', 'searchEntry', kparams);
	};
	
	/**
	 * .
	 * @param searchParams ESearchGroupParams 
	 * @param pager Pager  (optional, default: null)
	 * @return KalturaESearchGroupResponse
	 */
	static searchGroup(searchParams, pager = null){
		let kparams = {};
		kparams.searchParams = searchParams;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('elasticsearch_esearch', 'searchGroup', kparams);
	};
	
	/**
	 * .
	 * @param searchParams ESearchUserParams 
	 * @param pager Pager  (optional, default: null)
	 * @return KalturaESearchUserResponse
	 */
	static searchUser(searchParams, pager = null){
		let kparams = {};
		kparams.searchParams = searchParams;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('elasticsearch_esearch', 'searchUser', kparams);
	};
}
module.exports.eSearch = eSearch;


/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 * The available service actions:
 * @action add This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
 * @action clone This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
 * @action delete Delete an event notification template object.
 * @action dispatch Dispatch event notification object by id.
 * @action get Retrieve an event notification template object by id.
 * @action list list event notification template objects.
 * @action listByPartner .
 * @action listTemplates Action lists the template partner event notification templates.
 * @action register Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 * @action sendCommand Clear queue messages.
 * @action update Update an existing event notification template object.
 * @action updateStatus Update event notification template status by id.
 */
class eventNotificationTemplate{
	
	/**
	 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
	 * @param eventNotificationTemplate EventNotificationTemplate 
	 * @return KalturaEventNotificationTemplate
	 */
	static add(eventNotificationTemplate){
		let kparams = {};
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'add', kparams);
	};
	
	/**
	 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
	 * @param id int source template to clone
	 * @param eventNotificationTemplate EventNotificationTemplate overwrite configuration object (optional, default: null)
	 * @return KalturaEventNotificationTemplate
	 */
	static cloneAction(id, eventNotificationTemplate = null){
		let kparams = {};
		kparams.id = id;
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'clone', kparams);
	};
	
	/**
	 * Delete an event notification template object.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'delete', kparams);
	};
	
	/**
	 * Dispatch event notification object by id.
	 * @param id int 
	 * @param scope EventNotificationScope 
	 * @return int
	 */
	static dispatch(id, scope){
		let kparams = {};
		kparams.id = id;
		kparams.scope = scope;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'dispatch', kparams);
	};
	
	/**
	 * Retrieve an event notification template object by id.
	 * @param id int 
	 * @return KalturaEventNotificationTemplate
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'get', kparams);
	};
	
	/**
	 * list event notification template objects.
	 * @param filter EventNotificationTemplateFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEventNotificationTemplateListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'list', kparams);
	};
	
	/**
	 * .
	 * @param filter PartnerFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEventNotificationTemplateListResponse
	 */
	static listByPartner(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'listByPartner', kparams);
	};
	
	/**
	 * Action lists the template partner event notification templates.
	 * @param filter EventNotificationTemplateFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEventNotificationTemplateListResponse
	 */
	static listTemplates(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'listTemplates', kparams);
	};
	
	/**
	 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
	 * @param notificationTemplateSystemName string Existing push notification template system name
	 * @param pushNotificationParams PushNotificationParams 
	 * @return KalturaPushNotificationData
	 */
	static register(notificationTemplateSystemName, pushNotificationParams){
		let kparams = {};
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'register', kparams);
	};
	
	/**
	 * Clear queue messages.
	 * @param notificationTemplateSystemName string Existing push notification template system name
	 * @param pushNotificationParams PushNotificationParams 
	 * @param command string Command to be sent to push server (enum: KalturaPushNotificationCommandType)
	 */
	static sendCommand(notificationTemplateSystemName, pushNotificationParams, command){
		let kparams = {};
		kparams.notificationTemplateSystemName = notificationTemplateSystemName;
		kparams.pushNotificationParams = pushNotificationParams;
		kparams.command = command;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'sendCommand', kparams);
	};
	
	/**
	 * Update an existing event notification template object.
	 * @param id int 
	 * @param eventNotificationTemplate EventNotificationTemplate 
	 * @return KalturaEventNotificationTemplate
	 */
	static update(id, eventNotificationTemplate){
		let kparams = {};
		kparams.id = id;
		kparams.eventNotificationTemplate = eventNotificationTemplate;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'update', kparams);
	};
	
	/**
	 * Update event notification template status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaEventNotificationTemplateStatus)
	 * @return KalturaEventNotificationTemplate
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('eventnotification_eventnotificationtemplate', 'updateStatus', kparams);
	};
}
module.exports.eventNotificationTemplate = eventNotificationTemplate;


/**
 *Class definition for the Kaltura service: externalMedia.
 * The available service actions:
 * @action add Add external media entry.
 * @action count Count media entries by filter.
 * @action delete Delete a external media entry.
 * @action get Get external media entry by ID.
 * @action list List media entries by filter with paging support.
 * @action update Update external media entry. Only the properties that were set will be updated.
 */
class externalMedia{
	
	/**
	 * Add external media entry.
	 * @param entry ExternalMediaEntry 
	 * @return KalturaExternalMediaEntry
	 */
	static add(entry){
		let kparams = {};
		kparams.entry = entry;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'add', kparams);
	};
	
	/**
	 * Count media entries by filter.
	 * @param filter ExternalMediaEntryFilter External media entry filter (optional, default: null)
	 * @return int
	 */
	static count(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'count', kparams);
	};
	
	/**
	 * Delete a external media entry.
	 * @param id string External media entry id to delete
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'delete', kparams);
	};
	
	/**
	 * Get external media entry by ID.
	 * @param id string External media entry id
	 * @return KalturaExternalMediaEntry
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'get', kparams);
	};
	
	/**
	 * List media entries by filter with paging support.
	 * @param filter ExternalMediaEntryFilter External media entry filter (optional, default: null)
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaExternalMediaEntryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'list', kparams);
	};
	
	/**
	 * Update external media entry. Only the properties that were set will be updated.
	 * @param id string External media entry id to update
	 * @param entry ExternalMediaEntry External media entry object to update
	 * @return KalturaExternalMediaEntry
	 */
	static update(id, entry){
		let kparams = {};
		kparams.id = id;
		kparams.entry = entry;
		return new kaltura.RequestBuilder('externalmedia_externalmedia', 'update', kparams);
	};
}
module.exports.externalMedia = externalMedia;


/**
 *Class definition for the Kaltura service: group.
 * The available service actions:
 * @action add Adds a new group (user of type group).
 * @action clone clone the group (groupId), and set group id with the neeGroupName.
 * @action delete Delete group by ID.
 * @action get Retrieves a group object for a specified group ID.
 * @action list Lists group  objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @action update Update group by ID.
 */
class group{
	
	/**
	 * Adds a new group (user of type group).
	 * @param group Group a new group
	 * @return KalturaGroup
	 */
	static add(group){
		let kparams = {};
		kparams.group = group;
		return new kaltura.RequestBuilder('group_group', 'add', kparams);
	};
	
	/**
	 * clone the group (groupId), and set group id with the neeGroupName.
	 * @param originalGroupId string The unique identifier in the partner's system
	 * @param newGroupId string The unique identifier in the partner's system
	 * @param newGroupName string The name of the new cloned group (optional, default: null)
	 * @return KalturaGroup
	 */
	static cloneAction(originalGroupId, newGroupId, newGroupName = null){
		let kparams = {};
		kparams.originalGroupId = originalGroupId;
		kparams.newGroupId = newGroupId;
		kparams.newGroupName = newGroupName;
		return new kaltura.RequestBuilder('group_group', 'clone', kparams);
	};
	
	/**
	 * Delete group by ID.
	 * @param groupId string The unique identifier in the partner's system
	 * @return KalturaGroup
	 */
	static deleteAction(groupId){
		let kparams = {};
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('group_group', 'delete', kparams);
	};
	
	/**
	 * Retrieves a group object for a specified group ID.
	 * @param groupId string The unique identifier in the partner's system
	 * @return KalturaGroup
	 */
	static get(groupId){
		let kparams = {};
		kparams.groupId = groupId;
		return new kaltura.RequestBuilder('group_group', 'get', kparams);
	};
	
	/**
	 * Lists group  objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
	 * @param filter GroupFilter  (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaGroupListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('group_group', 'list', kparams);
	};
	
	/**
	 * Update group by ID.
	 * @param groupId string The unique identifier in the partner's system
	 * @param group Group Id The unique identifier in the partner's system
	 * @return KalturaGroup
	 */
	static update(groupId, group){
		let kparams = {};
		kparams.groupId = groupId;
		kparams.group = group;
		return new kaltura.RequestBuilder('group_group', 'update', kparams);
	};
}
module.exports.group = group;


/**
 *Class definition for the Kaltura service: integration.
 * The available service actions:
 * @action dispatch Dispatch integration task.
 * @action notify .
 */
class integration{
	
	/**
	 * Dispatch integration task.
	 * @param data IntegrationJobData 
	 * @param objectType string  (enum: KalturaBatchJobObjectType)
	 * @param objectId string 
	 * @return int
	 */
	static dispatch(data, objectType, objectId){
		let kparams = {};
		kparams.data = data;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		return new kaltura.RequestBuilder('integration_integration', 'dispatch', kparams);
	};
	
	/**
	 * .
	 * @param id int integration job id
	 */
	static notify(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('integration_integration', 'notify', kparams);
	};
}
module.exports.integration = integration;


/**
 *Class definition for the Kaltura service: interactivity.
 * The available service actions:
 * @action add Add a interactivity object.
 * @action delete Delete a interactivity object by entry id.
 * @action get Retrieve a interactivity object by entry id.
 * @action update Update an existing interactivity object.
 */
class interactivity{
	
	/**
	 * Add a interactivity object.
	 * @param entryId string 
	 * @param kalturaInteractivity Interactivity 
	 * @return KalturaInteractivity
	 */
	static add(entryId, kalturaInteractivity){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new kaltura.RequestBuilder('interactivity_interactivity', 'add', kparams);
	};
	
	/**
	 * Delete a interactivity object by entry id.
	 * @param entryId string 
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('interactivity_interactivity', 'delete', kparams);
	};
	
	/**
	 * Retrieve a interactivity object by entry id.
	 * @param entryId string 
	 * @param dataFilter InteractivityDataFilter  (optional, default: null)
	 * @return KalturaInteractivity
	 */
	static get(entryId, dataFilter = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.dataFilter = dataFilter;
		return new kaltura.RequestBuilder('interactivity_interactivity', 'get', kparams);
	};
	
	/**
	 * Update an existing interactivity object.
	 * @param entryId string 
	 * @param version int 
	 * @param kalturaInteractivity Interactivity 
	 * @return KalturaInteractivity
	 */
	static update(entryId, version, kalturaInteractivity){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaInteractivity = kalturaInteractivity;
		return new kaltura.RequestBuilder('interactivity_interactivity', 'update', kparams);
	};
}
module.exports.interactivity = interactivity;


/**
 *Class definition for the Kaltura service: volatileInteractivity.
 * The available service actions:
 * @action add add a volatile interactivity object.
 * @action delete Delete a volatile interactivity object by entry id.
 * @action get Retrieve a volatile interactivity object by entry id.
 * @action update Update a volatile interactivity object.
 */
class volatileInteractivity{
	
	/**
	 * add a volatile interactivity object.
	 * @param entryId string 
	 * @param kalturaVolatileInteractivity VolatileInteractivity 
	 * @return KalturaVolatileInteractivity
	 */
	static add(entryId, kalturaVolatileInteractivity){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new kaltura.RequestBuilder('interactivity_volatileinteractivity', 'add', kparams);
	};
	
	/**
	 * Delete a volatile interactivity object by entry id.
	 * @param entryId string 
	 */
	static deleteAction(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('interactivity_volatileinteractivity', 'delete', kparams);
	};
	
	/**
	 * Retrieve a volatile interactivity object by entry id.
	 * @param entryId string 
	 * @return KalturaVolatileInteractivity
	 */
	static get(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('interactivity_volatileinteractivity', 'get', kparams);
	};
	
	/**
	 * Update a volatile interactivity object.
	 * @param entryId string 
	 * @param version int 
	 * @param kalturaVolatileInteractivity VolatileInteractivity 
	 * @return KalturaVolatileInteractivity
	 */
	static update(entryId, version, kalturaVolatileInteractivity){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.version = version;
		kparams.kalturaVolatileInteractivity = kalturaVolatileInteractivity;
		return new kaltura.RequestBuilder('interactivity_volatileinteractivity', 'update', kparams);
	};
}
module.exports.volatileInteractivity = volatileInteractivity;


/**
 *Class definition for the Kaltura service: like.
 * The available service actions:
 * @action checkLikeExists .
 * @action like .
 * @action list .
 * @action unlike .
 */
class like{
	
	/**
	 * .
	 * @param entryId string 
	 * @param userId string  (optional, default: null)
	 * @return bool
	 */
	static checkLikeExists(entryId, userId = null){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('like_like', 'checkLikeExists', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @return bool
	 */
	static like(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('like_like', 'like', kparams);
	};
	
	/**
	 * .
	 * @param filter LikeFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaLikeListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('like_like', 'list', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @return bool
	 */
	static unlike(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('like_like', 'unlike', kparams);
	};
}
module.exports.like = like;


/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action add Allows you to add a metadata object and metadata content associated with Kaltura object.
 * @action addFromBulk Allows you to add a metadata XML data from remote URL.
 * Enables different permissions than addFromUrl action.
 * @action addFromFile Allows you to add a metadata object and metadata file associated with Kaltura object.
 * @action addFromUrl Allows you to add a metadata XML data from remote URL.
 * @action delete Delete an existing metadata.
 * @action get Retrieve a metadata object by id.
 * @action index Index metadata by id, will also index the related object.
 * @action invalidate Mark existing metadata as invalid
 * Used by batch metadata transform.
 * @action list List metadata objects by filter and pager.
 * @action update Update an existing metadata object with new XML content.
 * @action updateFromFile Update an existing metadata object with new XML file.
 * @action updateFromXSL Action transforms current metadata object XML using a provided XSL.
 */
class metadata{
	
	/**
	 * Allows you to add a metadata object and metadata content associated with Kaltura object.
	 * @param metadataProfileId int 
	 * @param objectType string  (enum: KalturaMetadataObjectType)
	 * @param objectId string 
	 * @param xmlData string XML metadata
	 * @return KalturaMetadata
	 */
	static add(metadataProfileId, objectType, objectId, xmlData){
		let kparams = {};
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.xmlData = xmlData;
		return new kaltura.RequestBuilder('metadata_metadata', 'add', kparams);
	};
	
	/**
	 * Allows you to add a metadata XML data from remote URL.
 * Enables different permissions than addFromUrl action.
	 * @param metadataProfileId int 
	 * @param objectType string  (enum: KalturaMetadataObjectType)
	 * @param objectId string 
	 * @param url string XML metadata remote URL
	 * @return KalturaMetadata
	 */
	static addFromBulk(metadataProfileId, objectType, objectId, url){
		let kparams = {};
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new kaltura.RequestBuilder('metadata_metadata', 'addFromBulk', kparams);
	};
	
	/**
	 * Allows you to add a metadata object and metadata file associated with Kaltura object.
	 * @param metadataProfileId int 
	 * @param objectType string  (enum: KalturaMetadataObjectType)
	 * @param objectId string 
	 * @param xmlFile file XML metadata
	 * @return KalturaMetadata
	 */
	static addFromFile(metadataProfileId, objectType, objectId, xmlFile){
		let kparams = {};
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		let kfiles = {};
		kfiles.xmlFile = xmlFile;
		return new kaltura.RequestBuilder('metadata_metadata', 'addFromFile', kparams, kfiles);
	};
	
	/**
	 * Allows you to add a metadata XML data from remote URL.
	 * @param metadataProfileId int 
	 * @param objectType string  (enum: KalturaMetadataObjectType)
	 * @param objectId string 
	 * @param url string XML metadata remote URL
	 * @return KalturaMetadata
	 */
	static addFromUrl(metadataProfileId, objectType, objectId, url){
		let kparams = {};
		kparams.metadataProfileId = metadataProfileId;
		kparams.objectType = objectType;
		kparams.objectId = objectId;
		kparams.url = url;
		return new kaltura.RequestBuilder('metadata_metadata', 'addFromUrl', kparams);
	};
	
	/**
	 * Delete an existing metadata.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('metadata_metadata', 'delete', kparams);
	};
	
	/**
	 * Retrieve a metadata object by id.
	 * @param id int 
	 * @return KalturaMetadata
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('metadata_metadata', 'get', kparams);
	};
	
	/**
	 * Index metadata by id, will also index the related object.
	 * @param id string 
	 * @param shouldUpdate bool 
	 * @return int
	 */
	static index(id, shouldUpdate){
		let kparams = {};
		kparams.id = id;
		kparams.shouldUpdate = shouldUpdate;
		return new kaltura.RequestBuilder('metadata_metadata', 'index', kparams);
	};
	
	/**
	 * Mark existing metadata as invalid
 * Used by batch metadata transform.
	 * @param id int 
	 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null)
	 */
	static invalidate(id, version = null){
		let kparams = {};
		kparams.id = id;
		kparams.version = version;
		return new kaltura.RequestBuilder('metadata_metadata', 'invalidate', kparams);
	};
	
	/**
	 * List metadata objects by filter and pager.
	 * @param filter MetadataFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaMetadataListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('metadata_metadata', 'list', kparams);
	};
	
	/**
	 * Update an existing metadata object with new XML content.
	 * @param id int 
	 * @param xmlData string XML metadata (optional, default: null)
	 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null)
	 * @return KalturaMetadata
	 */
	static update(id, xmlData = null, version = null){
		let kparams = {};
		kparams.id = id;
		kparams.xmlData = xmlData;
		kparams.version = version;
		return new kaltura.RequestBuilder('metadata_metadata', 'update', kparams);
	};
	
	/**
	 * Update an existing metadata object with new XML file.
	 * @param id int 
	 * @param xmlFile file XML metadata (optional, default: null)
	 * @return KalturaMetadata
	 */
	static updateFromFile(id, xmlFile = null){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xmlFile = xmlFile;
		return new kaltura.RequestBuilder('metadata_metadata', 'updateFromFile', kparams, kfiles);
	};
	
	/**
	 * Action transforms current metadata object XML using a provided XSL.
	 * @param id int 
	 * @param xslFile file 
	 * @return KalturaMetadata
	 */
	static updateFromXSL(id, xslFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xslFile = xslFile;
		return new kaltura.RequestBuilder('metadata_metadata', 'updateFromXSL', kparams, kfiles);
	};
}
module.exports.metadata = metadata;


/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action add Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
 * @action addFromFile Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
 * @action delete Delete an existing metadata profile.
 * @action get Retrieve a metadata profile object by id.
 * @action list List metadata profile objects by filter and pager.
 * @action listFields List metadata profile fields by metadata profile id.
 * @action revert Update an existing metadata object definition file.
 * @action update Update an existing metadata object.
 * @action updateDefinitionFromFile Update an existing metadata object definition file.
 * @action updateTransformationFromFile Update an existing metadata object XSLT file.
 * @action updateViewsFromFile Update an existing metadata object views file.
 */
class metadataProfile{
	
	/**
	 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
	 * @param metadataProfile MetadataProfile 
	 * @param xsdData string XSD metadata definition
	 * @param viewsData string UI views definition (optional, default: null)
	 * @return KalturaMetadataProfile
	 */
	static add(metadataProfile, xsdData, viewsData = null){
		let kparams = {};
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'add', kparams);
	};
	
	/**
	 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
	 * @param metadataProfile MetadataProfile 
	 * @param xsdFile file XSD metadata definition
	 * @param viewsFile file UI views definition (optional, default: null)
	 * @return KalturaMetadataProfile
	 */
	static addFromFile(metadataProfile, xsdFile, viewsFile = null){
		let kparams = {};
		kparams.metadataProfile = metadataProfile;
		let kfiles = {};
		kfiles.xsdFile = xsdFile;
		kfiles.viewsFile = viewsFile;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'addFromFile', kparams, kfiles);
	};
	
	/**
	 * Delete an existing metadata profile.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve a metadata profile object by id.
	 * @param id int 
	 * @return KalturaMetadataProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'get', kparams);
	};
	
	/**
	 * List metadata profile objects by filter and pager.
	 * @param filter MetadataProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaMetadataProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'list', kparams);
	};
	
	/**
	 * List metadata profile fields by metadata profile id.
	 * @param metadataProfileId int 
	 * @return KalturaMetadataProfileFieldListResponse
	 */
	static listFields(metadataProfileId){
		let kparams = {};
		kparams.metadataProfileId = metadataProfileId;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'listFields', kparams);
	};
	
	/**
	 * Update an existing metadata object definition file.
	 * @param id int 
	 * @param toVersion int 
	 * @return KalturaMetadataProfile
	 */
	static revert(id, toVersion){
		let kparams = {};
		kparams.id = id;
		kparams.toVersion = toVersion;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'revert', kparams);
	};
	
	/**
	 * Update an existing metadata object.
	 * @param id int 
	 * @param metadataProfile MetadataProfile 
	 * @param xsdData string XSD metadata definition (optional, default: null)
	 * @param viewsData string UI views definition (optional, default: null)
	 * @return KalturaMetadataProfile
	 */
	static update(id, metadataProfile, xsdData = null, viewsData = null){
		let kparams = {};
		kparams.id = id;
		kparams.metadataProfile = metadataProfile;
		kparams.xsdData = xsdData;
		kparams.viewsData = viewsData;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'update', kparams);
	};
	
	/**
	 * Update an existing metadata object definition file.
	 * @param id int 
	 * @param xsdFile file XSD metadata definition
	 * @return KalturaMetadataProfile
	 */
	static updateDefinitionFromFile(id, xsdFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xsdFile = xsdFile;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'updateDefinitionFromFile', kparams, kfiles);
	};
	
	/**
	 * Update an existing metadata object XSLT file.
	 * @param id int 
	 * @param xsltFile file XSLT file, will be executed on every metadata add/update
	 * @return KalturaMetadataProfile
	 */
	static updateTransformationFromFile(id, xsltFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.xsltFile = xsltFile;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'updateTransformationFromFile', kparams, kfiles);
	};
	
	/**
	 * Update an existing metadata object views file.
	 * @param id int 
	 * @param viewsFile file UI views file
	 * @return KalturaMetadataProfile
	 */
	static updateViewsFromFile(id, viewsFile){
		let kparams = {};
		kparams.id = id;
		let kfiles = {};
		kfiles.viewsFile = viewsFile;
		return new kaltura.RequestBuilder('metadata_metadataprofile', 'updateViewsFromFile', kparams, kfiles);
	};
}
module.exports.metadataProfile = metadataProfile;


/**
 *Class definition for the Kaltura service: playReadyDrm.
 * The available service actions:
 * @action generateKey Generate key id and content key for PlayReady encryption.
 * @action getContentKeys Get content keys for input key ids.
 * @action getEntryContentKey Get content key and key id for the given entry.
 * @action getLicenseDetails Get Play Ready policy and dates for license creation.
 */
class playReadyDrm{
	
	/**
	 * Generate key id and content key for PlayReady encryption.
	 * @return KalturaPlayReadyContentKey
	 */
	static generateKey(){
		let kparams = {};
		return new kaltura.RequestBuilder('playready_playreadydrm', 'generateKey', kparams);
	};
	
	/**
	 * Get content keys for input key ids.
	 * @param keyIds string - comma separated key id's
	 * @return array
	 */
	static getContentKeys(keyIds){
		let kparams = {};
		kparams.keyIds = keyIds;
		return new kaltura.RequestBuilder('playready_playreadydrm', 'getContentKeys', kparams);
	};
	
	/**
	 * Get content key and key id for the given entry.
	 * @param entryId string 
	 * @param createIfMissing bool  (optional, default: false)
	 * @return KalturaPlayReadyContentKey
	 */
	static getEntryContentKey(entryId, createIfMissing = false){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.createIfMissing = createIfMissing;
		return new kaltura.RequestBuilder('playready_playreadydrm', 'getEntryContentKey', kparams);
	};
	
	/**
	 * Get Play Ready policy and dates for license creation.
	 * @param keyId string 
	 * @param deviceId string 
	 * @param deviceType int 
	 * @param entryId string  (optional, default: null)
	 * @param referrer string 64base encoded (optional, default: null)
	 * @return KalturaPlayReadyLicenseDetails
	 */
	static getLicenseDetails(keyId, deviceId, deviceType, entryId = null, referrer = null){
		let kparams = {};
		kparams.keyId = keyId;
		kparams.deviceId = deviceId;
		kparams.deviceType = deviceType;
		kparams.entryId = entryId;
		kparams.referrer = referrer;
		return new kaltura.RequestBuilder('playready_playreadydrm', 'getLicenseDetails', kparams);
	};
}
module.exports.playReadyDrm = playReadyDrm;


/**
 *Class definition for the Kaltura service: poll.
 * The available service actions:
 * @action add Add Action.
 * @action getVote Vote Action.
 * @action getVotes Get Votes Action.
 * @action resetVotes Get resetVotes Action.
 * @action vote Vote Action.
 */
class poll{
	
	/**
	 * Add Action.
	 * @param pollType string  (optional, default: SINGLE_ANONYMOUS)
	 * @return string
	 */
	static add(pollType = 'SINGLE_ANONYMOUS'){
		let kparams = {};
		kparams.pollType = pollType;
		return new kaltura.RequestBuilder('poll_poll', 'add', kparams);
	};
	
	/**
	 * Vote Action.
	 * @param pollId string 
	 * @param userId string 
	 * @return string
	 */
	static getVote(pollId, userId){
		let kparams = {};
		kparams.pollId = pollId;
		kparams.userId = userId;
		return new kaltura.RequestBuilder('poll_poll', 'getVote', kparams);
	};
	
	/**
	 * Get Votes Action.
	 * @param pollId string 
	 * @param answerIds string 
	 * @return string
	 */
	static getVotes(pollId, answerIds){
		let kparams = {};
		kparams.pollId = pollId;
		kparams.answerIds = answerIds;
		return new kaltura.RequestBuilder('poll_poll', 'getVotes', kparams);
	};
	
	/**
	 * Get resetVotes Action.
	 * @param pollId string 
	 */
	static resetVotes(pollId){
		let kparams = {};
		kparams.pollId = pollId;
		return new kaltura.RequestBuilder('poll_poll', 'resetVotes', kparams);
	};
	
	/**
	 * Vote Action.
	 * @param pollId string 
	 * @param userId string 
	 * @param answerIds string 
	 * @return string
	 */
	static vote(pollId, userId, answerIds){
		let kparams = {};
		kparams.pollId = pollId;
		kparams.userId = userId;
		kparams.answerIds = answerIds;
		return new kaltura.RequestBuilder('poll_poll', 'vote', kparams);
	};
}
module.exports.poll = poll;


/**
 *Class definition for the Kaltura service: quiz.
 * The available service actions:
 * @action add Allows to add a quiz to an entry.
 * @action get Allows to get a quiz.
 * @action getUrl sends a with an api request for pdf from quiz object.
 * @action list List quiz objects by filter and pager.
 * @action update Allows to update a quiz.
 */
class quiz{
	
	/**
	 * Allows to add a quiz to an entry.
	 * @param entryId string 
	 * @param quiz Quiz 
	 * @return KalturaQuiz
	 */
	static add(entryId, quiz){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new kaltura.RequestBuilder('quiz_quiz', 'add', kparams);
	};
	
	/**
	 * Allows to get a quiz.
	 * @param entryId string 
	 * @return KalturaQuiz
	 */
	static get(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('quiz_quiz', 'get', kparams);
	};
	
	/**
	 * sends a with an api request for pdf from quiz object.
	 * @param entryId string 
	 * @param quizOutputType int  (enum: KalturaQuizOutputType)
	 * @return string
	 */
	static getUrl(entryId, quizOutputType){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.quizOutputType = quizOutputType;
		return new kaltura.RequestBuilder('quiz_quiz', 'getUrl', kparams);
	};
	
	/**
	 * List quiz objects by filter and pager.
	 * @param filter QuizFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaQuizListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('quiz_quiz', 'list', kparams);
	};
	
	/**
	 * Allows to update a quiz.
	 * @param entryId string 
	 * @param quiz Quiz 
	 * @return KalturaQuiz
	 */
	static update(entryId, quiz){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.quiz = quiz;
		return new kaltura.RequestBuilder('quiz_quiz', 'update', kparams);
	};
}
module.exports.quiz = quiz;


/**
 *Class definition for the Kaltura service: rating.
 * The available service actions:
 * @action checkRating .
 * @action getRatingCounts .
 * @action rate .
 * @action removeRating .
 */
class rating{
	
	/**
	 * .
	 * @param entryId string 
	 * @return int
	 */
	static checkRating(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('rating_rating', 'checkRating', kparams);
	};
	
	/**
	 * .
	 * @param filter RatingCountFilter 
	 * @return KalturaRatingCountListResponse
	 */
	static getRatingCounts(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('rating_rating', 'getRatingCounts', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @param rank int 
	 * @return int
	 */
	static rate(entryId, rank){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.rank = rank;
		return new kaltura.RequestBuilder('rating_rating', 'rate', kparams);
	};
	
	/**
	 * .
	 * @param entryId string 
	 * @return bool
	 */
	static removeRating(entryId){
		let kparams = {};
		kparams.entryId = entryId;
		return new kaltura.RequestBuilder('rating_rating', 'removeRating', kparams);
	};
}
module.exports.rating = rating;


/**
 *Class definition for the Kaltura service: vendorCatalogItem.
 * The available service actions:
 * @action add Allows you to add an service catalog item.
 * @action addFromBulkUpload .
 * @action delete Delete vedor catalog item object.
 * @action get Retrieve specific catalog item by id.
 * @action getServeUrl .
 * @action list List KalturaVendorCatalogItem objects.
 * @action update Update an existing vedor catalog item object.
 * @action updateStatus Update vendor catalog item status by id.
 */
class vendorCatalogItem{
	
	/**
	 * Allows you to add an service catalog item.
	 * @param vendorCatalogItem VendorCatalogItem 
	 * @return KalturaVendorCatalogItem
	 */
	static add(vendorCatalogItem){
		let kparams = {};
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'add', kparams);
	};
	
	/**
	 * .
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadJobData  (optional, default: null)
	 * @param bulkUploadVendorCatalogItemData BulkUploadVendorCatalogItemData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null, bulkUploadVendorCatalogItemData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		kparams.bulkUploadVendorCatalogItemData = bulkUploadVendorCatalogItemData;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Delete vedor catalog item object.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'delete', kparams);
	};
	
	/**
	 * Retrieve specific catalog item by id.
	 * @param id int 
	 * @return KalturaVendorCatalogItem
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'get', kparams);
	};
	
	/**
	 * .
	 * @param vendorPartnerId int  (optional, default: null)
	 * @return string
	 */
	static getServeUrl(vendorPartnerId = null){
		let kparams = {};
		kparams.vendorPartnerId = vendorPartnerId;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'getServeUrl', kparams);
	};
	
	/**
	 * List KalturaVendorCatalogItem objects.
	 * @param filter VendorCatalogItemFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaVendorCatalogItemListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'list', kparams);
	};
	
	/**
	 * Update an existing vedor catalog item object.
	 * @param id int 
	 * @param vendorCatalogItem VendorCatalogItem 
	 * @return KalturaVendorCatalogItem
	 */
	static update(id, vendorCatalogItem){
		let kparams = {};
		kparams.id = id;
		kparams.vendorCatalogItem = vendorCatalogItem;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'update', kparams);
	};
	
	/**
	 * Update vendor catalog item status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaVendorCatalogItemStatus)
	 * @return KalturaVendorCatalogItem
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('reach_vendorcatalogitem', 'updateStatus', kparams);
	};
}
module.exports.vendorCatalogItem = vendorCatalogItem;


/**
 *Class definition for the Kaltura service: reachProfile.
 * The available service actions:
 * @action add Allows you to add a partner specific reach profile.
 * @action delete Delete vednor profile by id.
 * @action get Retrieve specific reach profile by id.
 * @action list List KalturaReachProfile objects.
 * @action syncCredit sync vendor profile credit.
 * @action update Update an existing reach profile object.
 * @action updateStatus Update reach profile status by id.
 */
class reachProfile{
	
	/**
	 * Allows you to add a partner specific reach profile.
	 * @param reachProfile ReachProfile 
	 * @return KalturaReachProfile
	 */
	static add(reachProfile){
		let kparams = {};
		kparams.reachProfile = reachProfile;
		return new kaltura.RequestBuilder('reach_reachprofile', 'add', kparams);
	};
	
	/**
	 * Delete vednor profile by id.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_reachprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve specific reach profile by id.
	 * @param id int 
	 * @return KalturaReachProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_reachprofile', 'get', kparams);
	};
	
	/**
	 * List KalturaReachProfile objects.
	 * @param filter ReachProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaReachProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('reach_reachprofile', 'list', kparams);
	};
	
	/**
	 * sync vendor profile credit.
	 * @param reachProfileId int 
	 * @return KalturaReachProfile
	 */
	static syncCredit(reachProfileId){
		let kparams = {};
		kparams.reachProfileId = reachProfileId;
		return new kaltura.RequestBuilder('reach_reachprofile', 'syncCredit', kparams);
	};
	
	/**
	 * Update an existing reach profile object.
	 * @param id int 
	 * @param reachProfile ReachProfile 
	 * @return KalturaReachProfile
	 */
	static update(id, reachProfile){
		let kparams = {};
		kparams.id = id;
		kparams.reachProfile = reachProfile;
		return new kaltura.RequestBuilder('reach_reachprofile', 'update', kparams);
	};
	
	/**
	 * Update reach profile status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaReachProfileStatus)
	 * @return KalturaReachProfile
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('reach_reachprofile', 'updateStatus', kparams);
	};
}
module.exports.reachProfile = reachProfile;


/**
 *Class definition for the Kaltura service: entryVendorTask.
 * The available service actions:
 * @action abort Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
 * @action add Allows you to add a entry vendor task.
 * @action approve Approve entry vendor task for execution.
 * @action exportToCsv add batch job that sends an email with a link to download an updated CSV that contains list of users.
 * @action extendAccessKey Extend access key in case the existing one has expired.
 * @action get Retrieve specific entry vendor task by id.
 * @action getJobs get KalturaEntryVendorTask objects for specific vendor partner.
 * @action getServeUrl .
 * @action list List KalturaEntryVendorTask objects.
 * @action reject Reject entry vendor task for execution.
 * @action serveCsv Will serve a requested csv.
 * @action update Update entry vendor task. Only the properties that were set will be updated.
 * @action updateJob Update entry vendor task. Only the properties that were set will be updated.
 */
class entryVendorTask{
	
	/**
	 * Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
	 * @param id int vendor task id
	 * @param abortReason string  (optional, default: null)
	 * @return KalturaEntryVendorTask
	 */
	static abort(id, abortReason = null){
		let kparams = {};
		kparams.id = id;
		kparams.abortReason = abortReason;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'abort', kparams);
	};
	
	/**
	 * Allows you to add a entry vendor task.
	 * @param entryVendorTask EntryVendorTask 
	 * @return KalturaEntryVendorTask
	 */
	static add(entryVendorTask){
		let kparams = {};
		kparams.entryVendorTask = entryVendorTask;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'add', kparams);
	};
	
	/**
	 * Approve entry vendor task for execution.
	 * @param id int vendor task id to approve
	 * @return KalturaEntryVendorTask
	 */
	static approve(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'approve', kparams);
	};
	
	/**
	 * add batch job that sends an email with a link to download an updated CSV that contains list of users.
	 * @param filter EntryVendorTaskFilter A filter used to exclude specific tasks
	 * @return string
	 */
	static exportToCsv(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'exportToCsv', kparams);
	};
	
	/**
	 * Extend access key in case the existing one has expired.
	 * @param id int vendor task id
	 * @return KalturaEntryVendorTask
	 */
	static extendAccessKey(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'extendAccessKey', kparams);
	};
	
	/**
	 * Retrieve specific entry vendor task by id.
	 * @param id int 
	 * @return KalturaEntryVendorTask
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'get', kparams);
	};
	
	/**
	 * get KalturaEntryVendorTask objects for specific vendor partner.
	 * @param filter EntryVendorTaskFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEntryVendorTaskListResponse
	 */
	static getJobs(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'getJobs', kparams);
	};
	
	/**
	 * .
	 * @param filterType string  (optional, default: null)
	 * @param filterInput int  (optional, default: null)
	 * @param status int  (optional, default: null)
	 * @param dueDate string  (optional, default: null)
	 * @return string
	 */
	static getServeUrl(filterType = null, filterInput = null, status = null, dueDate = null){
		let kparams = {};
		kparams.filterType = filterType;
		kparams.filterInput = filterInput;
		kparams.status = status;
		kparams.dueDate = dueDate;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'getServeUrl', kparams);
	};
	
	/**
	 * List KalturaEntryVendorTask objects.
	 * @param filter EntryVendorTaskFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaEntryVendorTaskListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'list', kparams);
	};
	
	/**
	 * Reject entry vendor task for execution.
	 * @param id int vendor task id to reject
	 * @param rejectReason string  (optional, default: null)
	 * @return KalturaEntryVendorTask
	 */
	static reject(id, rejectReason = null){
		let kparams = {};
		kparams.id = id;
		kparams.rejectReason = rejectReason;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'reject', kparams);
	};
	
	/**
	 * Will serve a requested csv.
	 * @param id string - the requested file id
	 * @return string
	 */
	static serveCsv(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'serveCsv', kparams);
	};
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated.
	 * @param id int vendor task id to update
	 * @param entryVendorTask EntryVendorTask evntry vendor task to update
	 * @return KalturaEntryVendorTask
	 */
	static update(id, entryVendorTask){
		let kparams = {};
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'update', kparams);
	};
	
	/**
	 * Update entry vendor task. Only the properties that were set will be updated.
	 * @param id int vendor task id to update
	 * @param entryVendorTask EntryVendorTask evntry vendor task to update
	 * @return KalturaEntryVendorTask
	 */
	static updateJob(id, entryVendorTask){
		let kparams = {};
		kparams.id = id;
		kparams.entryVendorTask = entryVendorTask;
		return new kaltura.RequestBuilder('reach_entryvendortask', 'updateJob', kparams);
	};
}
module.exports.entryVendorTask = entryVendorTask;


/**
 *Class definition for the Kaltura service: PartnerCatalogItem.
 * The available service actions:
 * @action add Assign existing catalogItem to specific account.
 * @action delete Remove existing catalogItem from specific account.
 */
class PartnerCatalogItem{
	
	/**
	 * Assign existing catalogItem to specific account.
	 * @param id int source catalog item to assign to partner
	 * @return KalturaVendorCatalogItem
	 */
	static add(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_partnercatalogitem', 'add', kparams);
	};
	
	/**
	 * Remove existing catalogItem from specific account.
	 * @param id int source catalog item to remove
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('reach_partnercatalogitem', 'delete', kparams);
	};
}
module.exports.PartnerCatalogItem = PartnerCatalogItem;


/**
 *Class definition for the Kaltura service: scheduleEvent.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleEvent object.
 * @action addFromBulkUpload Add new bulk upload batch job.
 * @action cancel Mark the KalturaScheduleEvent object as cancelled.
 * @action delete Mark the KalturaScheduleEvent object as deleted.
 * @action get Retrieve a KalturaScheduleEvent object by ID.
 * @action getConflicts List conflicting events for resourcesIds by event's dates.
 * @action list List KalturaScheduleEvent objects.
 * @action update Update an existing KalturaScheduleEvent object.
 * @action updateLiveFeature Add feature to live event.
 */
class scheduleEvent{
	
	/**
	 * Allows you to add a new KalturaScheduleEvent object.
	 * @param scheduleEvent ScheduleEvent 
	 * @return KalturaScheduleEvent
	 */
	static add(scheduleEvent){
		let kparams = {};
		kparams.scheduleEvent = scheduleEvent;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'add', kparams);
	};
	
	/**
	 * Add new bulk upload batch job.
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadScheduleEventJobData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Mark the KalturaScheduleEvent object as cancelled.
	 * @param scheduleEventId int 
	 * @return KalturaScheduleEvent
	 */
	static cancel(scheduleEventId){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'cancel', kparams);
	};
	
	/**
	 * Mark the KalturaScheduleEvent object as deleted.
	 * @param scheduleEventId int 
	 * @return KalturaScheduleEvent
	 */
	static deleteAction(scheduleEventId){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaScheduleEvent object by ID.
	 * @param scheduleEventId int 
	 * @return KalturaScheduleEvent
	 */
	static get(scheduleEventId){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'get', kparams);
	};
	
	/**
	 * List conflicting events for resourcesIds by event's dates.
	 * @param resourceIds string comma separated
	 * @param scheduleEvent ScheduleEvent 
	 * @param scheduleEventIdToIgnore string  (optional, default: null)
	 * @param scheduleEventConflictType int  (optional, enum: KalturaScheduleEventConflictType, default: 1)
	 * @return KalturaScheduleEventListResponse
	 */
	static getConflicts(resourceIds, scheduleEvent, scheduleEventIdToIgnore = null, scheduleEventConflictType = 1){
		let kparams = {};
		kparams.resourceIds = resourceIds;
		kparams.scheduleEvent = scheduleEvent;
		kparams.scheduleEventIdToIgnore = scheduleEventIdToIgnore;
		kparams.scheduleEventConflictType = scheduleEventConflictType;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'getConflicts', kparams);
	};
	
	/**
	 * List KalturaScheduleEvent objects.
	 * @param filter ScheduleEventFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaScheduleEventListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaScheduleEvent object.
	 * @param scheduleEventId int 
	 * @param scheduleEvent ScheduleEvent Id
	 * @return KalturaScheduleEvent
	 */
	static update(scheduleEventId, scheduleEvent){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleEvent = scheduleEvent;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'update', kparams);
	};
	
	/**
	 * Add feature to live event.
	 * @param scheduledEventId int 
	 * @param featureName string 
	 * @param liveFeature LiveFeature 
	 * @return KalturaLiveStreamScheduleEvent
	 */
	static updateLiveFeature(scheduledEventId, featureName, liveFeature){
		let kparams = {};
		kparams.scheduledEventId = scheduledEventId;
		kparams.featureName = featureName;
		kparams.liveFeature = liveFeature;
		return new kaltura.RequestBuilder('schedule_scheduleevent', 'updateLiveFeature', kparams);
	};
}
module.exports.scheduleEvent = scheduleEvent;


/**
 *Class definition for the Kaltura service: scheduleResource.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleResource object.
 * @action addFromBulkUpload Add new bulk upload batch job.
 * @action delete Mark the KalturaScheduleResource object as deleted.
 * @action get Retrieve a KalturaScheduleResource object by ID.
 * @action list List KalturaScheduleResource objects.
 * @action update Update an existing KalturaScheduleResource object.
 */
class scheduleResource{
	
	/**
	 * Allows you to add a new KalturaScheduleResource object.
	 * @param scheduleResource ScheduleResource 
	 * @return KalturaScheduleResource
	 */
	static add(scheduleResource){
		let kparams = {};
		kparams.scheduleResource = scheduleResource;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'add', kparams);
	};
	
	/**
	 * Add new bulk upload batch job.
	 * @param fileData file 
	 * @param bulkUploadData BulkUploadCsvJobData  (optional, default: null)
	 * @return KalturaBulkUpload
	 */
	static addFromBulkUpload(fileData, bulkUploadData = null){
		let kparams = {};
		let kfiles = {};
		kfiles.fileData = fileData;
		kparams.bulkUploadData = bulkUploadData;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'addFromBulkUpload', kparams, kfiles);
	};
	
	/**
	 * Mark the KalturaScheduleResource object as deleted.
	 * @param scheduleResourceId int 
	 * @return KalturaScheduleResource
	 */
	static deleteAction(scheduleResourceId){
		let kparams = {};
		kparams.scheduleResourceId = scheduleResourceId;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaScheduleResource object by ID.
	 * @param scheduleResourceId int 
	 * @return KalturaScheduleResource
	 */
	static get(scheduleResourceId){
		let kparams = {};
		kparams.scheduleResourceId = scheduleResourceId;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'get', kparams);
	};
	
	/**
	 * List KalturaScheduleResource objects.
	 * @param filter ScheduleResourceFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaScheduleResourceListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaScheduleResource object.
	 * @param scheduleResourceId int 
	 * @param scheduleResource ScheduleResource Id
	 * @return KalturaScheduleResource
	 */
	static update(scheduleResourceId, scheduleResource){
		let kparams = {};
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleResource = scheduleResource;
		return new kaltura.RequestBuilder('schedule_scheduleresource', 'update', kparams);
	};
}
module.exports.scheduleResource = scheduleResource;


/**
 *Class definition for the Kaltura service: scheduleEventResource.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleEventResource object.
 * @action delete Mark the KalturaScheduleEventResource object as deleted.
 * @action get Retrieve a KalturaScheduleEventResource object by ID.
 * @action list List KalturaScheduleEventResource objects.
 * @action update Update an existing KalturaScheduleEventResource object.
 */
class scheduleEventResource{
	
	/**
	 * Allows you to add a new KalturaScheduleEventResource object.
	 * @param scheduleEventResource ScheduleEventResource 
	 * @return KalturaScheduleEventResource
	 */
	static add(scheduleEventResource){
		let kparams = {};
		kparams.scheduleEventResource = scheduleEventResource;
		return new kaltura.RequestBuilder('schedule_scheduleeventresource', 'add', kparams);
	};
	
	/**
	 * Mark the KalturaScheduleEventResource object as deleted.
	 * @param scheduleEventId int 
	 * @param scheduleResourceId int 
	 */
	static deleteAction(scheduleEventId, scheduleResourceId){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new kaltura.RequestBuilder('schedule_scheduleeventresource', 'delete', kparams);
	};
	
	/**
	 * Retrieve a KalturaScheduleEventResource object by ID.
	 * @param scheduleEventId int 
	 * @param scheduleResourceId int 
	 * @return KalturaScheduleEventResource
	 */
	static get(scheduleEventId, scheduleResourceId){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		return new kaltura.RequestBuilder('schedule_scheduleeventresource', 'get', kparams);
	};
	
	/**
	 * List KalturaScheduleEventResource objects.
	 * @param filter ScheduleEventResourceFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @param filterBlackoutConflicts bool  (optional, default: true)
	 * @return KalturaScheduleEventResourceListResponse
	 */
	static listAction(filter = null, pager = null, filterBlackoutConflicts = true){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		kparams.filterBlackoutConflicts = filterBlackoutConflicts;
		return new kaltura.RequestBuilder('schedule_scheduleeventresource', 'list', kparams);
	};
	
	/**
	 * Update an existing KalturaScheduleEventResource object.
	 * @param scheduleEventId int 
	 * @param scheduleResourceId int 
	 * @param scheduleEventResource ScheduleEventResource 
	 * @return KalturaScheduleEventResource
	 */
	static update(scheduleEventId, scheduleResourceId, scheduleEventResource){
		let kparams = {};
		kparams.scheduleEventId = scheduleEventId;
		kparams.scheduleResourceId = scheduleResourceId;
		kparams.scheduleEventResource = scheduleEventResource;
		return new kaltura.RequestBuilder('schedule_scheduleeventresource', 'update', kparams);
	};
}
module.exports.scheduleEventResource = scheduleEventResource;


/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 * The available service actions:
 * @action add Add a new scheduled task profile.
 * @action delete Delete a scheduled task profile.
 * @action get Retrieve a scheduled task profile by id.
 * @action getDryRunResults .
 * @action list List scheduled task profiles.
 * @action requestDryRun .
 * @action update Update an existing scheduled task profile.
 */
class scheduledTaskProfile{
	
	/**
	 * Add a new scheduled task profile.
	 * @param scheduledTaskProfile ScheduledTaskProfile 
	 * @return KalturaScheduledTaskProfile
	 */
	static add(scheduledTaskProfile){
		let kparams = {};
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'add', kparams);
	};
	
	/**
	 * Delete a scheduled task profile.
	 * @param id int 
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve a scheduled task profile by id.
	 * @param id int 
	 * @return KalturaScheduledTaskProfile
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'get', kparams);
	};
	
	/**
	 * .
	 * @param requestId int 
	 * @return KalturaObjectListResponse
	 */
	static getDryRunResults(requestId){
		let kparams = {};
		kparams.requestId = requestId;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'getDryRunResults', kparams);
	};
	
	/**
	 * List scheduled task profiles.
	 * @param filter ScheduledTaskProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaScheduledTaskProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'list', kparams);
	};
	
	/**
	 * .
	 * @param scheduledTaskProfileId int 
	 * @param maxResults int  (optional, default: 500)
	 * @return int
	 */
	static requestDryRun(scheduledTaskProfileId, maxResults = 500){
		let kparams = {};
		kparams.scheduledTaskProfileId = scheduledTaskProfileId;
		kparams.maxResults = maxResults;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'requestDryRun', kparams);
	};
	
	/**
	 * Update an existing scheduled task profile.
	 * @param id int 
	 * @param scheduledTaskProfile ScheduledTaskProfile 
	 * @return KalturaScheduledTaskProfile
	 */
	static update(id, scheduledTaskProfile){
		let kparams = {};
		kparams.id = id;
		kparams.scheduledTaskProfile = scheduledTaskProfile;
		return new kaltura.RequestBuilder('scheduledtask_scheduledtaskprofile', 'update', kparams);
	};
}
module.exports.scheduledTaskProfile = scheduledTaskProfile;


/**
 *Class definition for the Kaltura service: searchHistory.
 * The available service actions:
 * @action delete .
 * @action list .
 */
class searchHistory{
	
	/**
	 * .
	 * @param searchTerm string 
	 */
	static deleteAction(searchTerm){
		let kparams = {};
		kparams.searchTerm = searchTerm;
		return new kaltura.RequestBuilder('searchhistory_searchhistory', 'delete', kparams);
	};
	
	/**
	 * .
	 * @param filter ESearchHistoryFilter  (optional, default: null)
	 * @return KalturaESearchHistoryListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('searchhistory_searchhistory', 'list', kparams);
	};
}
module.exports.searchHistory = searchHistory;


/**
 *Class definition for the Kaltura service: shortLink.
 * The available service actions:
 * @action add Allows you to add a short link object.
 * @action delete Mark the short link as deleted.
 * @action get Retrieve an short link object by id.
 * @action list List short link objects by filter and pager.
 * @action update Update existing short link.
 */
class shortLink{
	
	/**
	 * Allows you to add a short link object.
	 * @param shortLink ShortLink 
	 * @return KalturaShortLink
	 */
	static add(shortLink){
		let kparams = {};
		kparams.shortLink = shortLink;
		return new kaltura.RequestBuilder('shortlink_shortlink', 'add', kparams);
	};
	
	/**
	 * Mark the short link as deleted.
	 * @param id string 
	 * @return KalturaShortLink
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('shortlink_shortlink', 'delete', kparams);
	};
	
	/**
	 * Retrieve an short link object by id.
	 * @param id string 
	 * @return KalturaShortLink
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('shortlink_shortlink', 'get', kparams);
	};
	
	/**
	 * List short link objects by filter and pager.
	 * @param filter ShortLinkFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaShortLinkListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('shortlink_shortlink', 'list', kparams);
	};
	
	/**
	 * Update existing short link.
	 * @param id string 
	 * @param shortLink ShortLink 
	 * @return KalturaShortLink
	 */
	static update(id, shortLink){
		let kparams = {};
		kparams.id = id;
		kparams.shortLink = shortLink;
		return new kaltura.RequestBuilder('shortlink_shortlink', 'update', kparams);
	};
}
module.exports.shortLink = shortLink;


/**
 *Class definition for the Kaltura service: pexip.
 * The available service actions:
 * @action generateSipUrl .
 * @action handleIncomingCall .
 * @action listRooms .
 */
class pexip{
	
	/**
	 * .
	 * @param entryId string 
	 * @param regenerate bool  (optional, default: false)
	 * @param sourceType int  (optional, enum: KalturaSipSourceType, default: 1)
	 * @return string
	 */
	static generateSipUrl(entryId, regenerate = false, sourceType = 1){
		let kparams = {};
		kparams.entryId = entryId;
		kparams.regenerate = regenerate;
		kparams.sourceType = sourceType;
		return new kaltura.RequestBuilder('sip_pexip', 'generateSipUrl', kparams);
	};
	
	/**
	 * .
	 */
	static handleIncomingCall(){
		let kparams = {};
		return new kaltura.RequestBuilder('sip_pexip', 'handleIncomingCall', kparams);
	};
	
	/**
	 * .
	 * @param offset int  (optional)
	 * @param pageSize int  (optional, default: 500)
	 * @param activeOnly bool  (optional, default: false)
	 * @return array
	 */
	static listRooms(offset = 0, pageSize = 500, activeOnly = false){
		let kparams = {};
		kparams.offset = offset;
		kparams.pageSize = pageSize;
		kparams.activeOnly = activeOnly;
		return new kaltura.RequestBuilder('sip_pexip', 'listRooms', kparams);
	};
}
module.exports.pexip = pexip;


/**
 *Class definition for the Kaltura service: sso.
 * The available service actions:
 * @action add Adds a new sso configuration.
 * @action delete Delete sso by ID.
 * @action get Retrieves sso object.
 * @action list Lists sso objects that are associated with an account.
 * @action login Login with SSO, getting redirect url according to application type and partner Id
 * or according to application type and domain.
 * @action update Update sso by ID.
 */
class sso{
	
	/**
	 * Adds a new sso configuration.
	 * @param sso Sso a new sso configuration
	 * @return KalturaSso
	 */
	static add(sso){
		let kparams = {};
		kparams.sso = sso;
		return new kaltura.RequestBuilder('sso_sso', 'add', kparams);
	};
	
	/**
	 * Delete sso by ID.
	 * @param ssoId int The unique identifier in the sso's object
	 * @return KalturaSso
	 */
	static deleteAction(ssoId){
		let kparams = {};
		kparams.ssoId = ssoId;
		return new kaltura.RequestBuilder('sso_sso', 'delete', kparams);
	};
	
	/**
	 * Retrieves sso object.
	 * @param ssoId int The unique identifier in the sso's object
	 * @return KalturaSso
	 */
	static get(ssoId){
		let kparams = {};
		kparams.ssoId = ssoId;
		return new kaltura.RequestBuilder('sso_sso', 'get', kparams);
	};
	
	/**
	 * Lists sso objects that are associated with an account.
	 * @param filter SsoFilter  (optional, default: null)
	 * @param pager FilterPager A limit for the number of records to display on a page (optional, default: null)
	 * @return KalturaSsoListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('sso_sso', 'list', kparams);
	};
	
	/**
	 * Login with SSO, getting redirect url according to application type and partner Id
 * or according to application type and domain.
	 * @param userId string 
	 * @param applicationType string 
	 * @param partnerId int  (optional, default: null)
	 * @return string
	 */
	static login(userId, applicationType, partnerId = null){
		let kparams = {};
		kparams.userId = userId;
		kparams.applicationType = applicationType;
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('sso_sso', 'login', kparams);
	};
	
	/**
	 * Update sso by ID.
	 * @param ssoId int The unique identifier in the sso's object
	 * @param sso Sso Id The unique identifier in the sso's object
	 * @return KalturaSso
	 */
	static update(ssoId, sso){
		let kparams = {};
		kparams.ssoId = ssoId;
		kparams.sso = sso;
		return new kaltura.RequestBuilder('sso_sso', 'update', kparams);
	};
}
module.exports.sso = sso;


/**
 *Class definition for the Kaltura service: tag.
 * The available service actions:
 * @action deletePending Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
 * @action indexCategoryEntryTags .
 * @action search .
 */
class tag{
	
	/**
	 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
	 * @return int
	 */
	static deletePending(){
		let kparams = {};
		return new kaltura.RequestBuilder('tagsearch_tag', 'deletePending', kparams);
	};
	
	/**
	 * .
	 * @param categoryId int 
	 * @param pcToDecrement string 
	 * @param pcToIncrement string 
	 */
	static indexCategoryEntryTags(categoryId, pcToDecrement, pcToIncrement){
		let kparams = {};
		kparams.categoryId = categoryId;
		kparams.pcToDecrement = pcToDecrement;
		kparams.pcToIncrement = pcToIncrement;
		return new kaltura.RequestBuilder('tagsearch_tag', 'indexCategoryEntryTags', kparams);
	};
	
	/**
	 * .
	 * @param tagFilter TagFilter 
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaTagListResponse
	 */
	static search(tagFilter, pager = null){
		let kparams = {};
		kparams.tagFilter = tagFilter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('tagsearch_tag', 'search', kparams);
	};
}
module.exports.tag = tag;


/**
 *Class definition for the Kaltura service: thumbnail.
 * The available service actions:
 * @action transform Retrieves a thumbnail according to the required transformation.
 */
class thumbnail{
	
	/**
	 * Retrieves a thumbnail according to the required transformation.
	 * @param transformString string 
	 */
	static transform(transformString){
		let kparams = {};
		kparams.transformString = transformString;
		return new kaltura.RequestBuilder('thumbnail_thumbnail', 'transform', kparams);
	};
}
module.exports.thumbnail = thumbnail;


/**
 *Class definition for the Kaltura service: unicorn.
 * The available service actions:
 * @action notify .
 */
class unicorn{
	
	/**
	 * .
	 * @param id int distribution job id
	 */
	static notify(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('unicorndistribution_unicorn', 'notify', kparams);
	};
}
module.exports.unicorn = unicorn;


/**
 *Class definition for the Kaltura service: varConsole.
 * The available service actions:
 * @action getPartnerUsage Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @action updateStatus Function to change a sub-publisher's status.
 */
class varConsole{
	
	/**
	 * Function which calulates partner usage of a group of a VAR's sub-publishers.
	 * @param partnerFilter PartnerFilter  (optional, default: null)
	 * @param usageFilter ReportInputFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaPartnerUsageListResponse
	 */
	static getPartnerUsage(partnerFilter = null, usageFilter = null, pager = null){
		let kparams = {};
		kparams.partnerFilter = partnerFilter;
		kparams.usageFilter = usageFilter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('varconsole_varconsole', 'getPartnerUsage', kparams);
	};
	
	/**
	 * Function to change a sub-publisher's status.
	 * @param id int 
	 * @param status int  (enum: KalturaPartnerStatus)
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('varconsole_varconsole', 'updateStatus', kparams);
	};
}
module.exports.varConsole = varConsole;


/**
 *Class definition for the Kaltura service: zoomVendor.
 * The available service actions:
 * @action deAuthorization .
 * @action fetchRegistrationPage .
 * @action get Retrieve zoom integration setting object by partner id.
 * @action list List KalturaZoomIntegrationSetting objects.
 * @action localRegistrationPage .
 * @action oauthValidation load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 * and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
 * @action preOauthValidation .
 * @action recordingComplete .
 * @action submitRegistration .
 */
class zoomVendor{
	
	/**
	 * .
	 * @return string
	 */
	static deAuthorization(){
		let kparams = {};
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'deAuthorization', kparams);
	};
	
	/**
	 * .
	 * @param tokensData string 
	 * @param iv string 
	 */
	static fetchRegistrationPage(tokensData, iv){
		let kparams = {};
		kparams.tokensData = tokensData;
		kparams.iv = iv;
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'fetchRegistrationPage', kparams);
	};
	
	/**
	 * Retrieve zoom integration setting object by partner id.
	 * @param partnerId int 
	 * @return KalturaZoomIntegrationSetting
	 */
	static get(partnerId){
		let kparams = {};
		kparams.partnerId = partnerId;
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'get', kparams);
	};
	
	/**
	 * List KalturaZoomIntegrationSetting objects.
	 * @param pager FilterPager Pager (optional, default: null)
	 * @return KalturaZoomIntegrationSettingResponse
	 */
	static listAction(pager = null){
		let kparams = {};
		kparams.pager = pager;
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'list', kparams);
	};
	
	/**
	 * .
	 * @param jwt string 
	 */
	static localRegistrationPage(jwt){
		let kparams = {};
		kparams.jwt = jwt;
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'localRegistrationPage', kparams);
	};
	
	/**
	 * load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 * and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
	 */
	static oauthValidation(){
		let kparams = {};
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'oauthValidation', kparams);
	};
	
	/**
	 * .
	 * @return string
	 */
	static preOauthValidation(){
		let kparams = {};
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'preOauthValidation', kparams);
	};
	
	/**
	 * .
	 */
	static recordingComplete(){
		let kparams = {};
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'recordingComplete', kparams);
	};
	
	/**
	 * .
	 * @param accountId string 
	 * @param integrationSetting ZoomIntegrationSetting 
	 * @return string
	 */
	static submitRegistration(accountId, integrationSetting){
		let kparams = {};
		kparams.accountId = accountId;
		kparams.integrationSetting = integrationSetting;
		return new kaltura.RequestBuilder('vendor_zoomvendor', 'submitRegistration', kparams);
	};
}
module.exports.zoomVendor = zoomVendor;


/**
 *Class definition for the Kaltura service: vendorIntegration.
 * The available service actions:
 * @action add Add new integration setting object.
 * @action delete Delete integration object by ID.
 * @action get Retrieve integration setting object by ID.
 * @action update Update an existing vedor catalog item object.
 * @action updateStatus Update vendor catalog item status by id.
 */
class vendorIntegration{
	
	/**
	 * Add new integration setting object.
	 * @param integration IntegrationSetting 
	 * @param remoteId string 
	 * @return KalturaIntegrationSetting
	 */
	static add(integration, remoteId){
		let kparams = {};
		kparams.integration = integration;
		kparams.remoteId = remoteId;
		return new kaltura.RequestBuilder('vendor_vendorintegration', 'add', kparams);
	};
	
	/**
	 * Delete integration object by ID.
	 * @param integrationId int 
	 * @return KalturaIntegrationSetting
	 */
	static deleteAction(integrationId){
		let kparams = {};
		kparams.integrationId = integrationId;
		return new kaltura.RequestBuilder('vendor_vendorintegration', 'delete', kparams);
	};
	
	/**
	 * Retrieve integration setting object by ID.
	 * @param integrationId int 
	 * @return KalturaIntegrationSetting
	 */
	static get(integrationId){
		let kparams = {};
		kparams.integrationId = integrationId;
		return new kaltura.RequestBuilder('vendor_vendorintegration', 'get', kparams);
	};
	
	/**
	 * Update an existing vedor catalog item object.
	 * @param id int 
	 * @param integrationSetting IntegrationSetting 
	 * @return KalturaIntegrationSetting
	 */
	static update(id, integrationSetting){
		let kparams = {};
		kparams.id = id;
		kparams.integrationSetting = integrationSetting;
		return new kaltura.RequestBuilder('vendor_vendorintegration', 'update', kparams);
	};
	
	/**
	 * Update vendor catalog item status by id.
	 * @param id int 
	 * @param status int  (enum: KalturaVendorIntegrationStatus)
	 * @return KalturaIntegrationSetting
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('vendor_vendorintegration', 'updateStatus', kparams);
	};
}
module.exports.vendorIntegration = vendorIntegration;


/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action add Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
 * @action delete Mark the virus scan profile as deleted.
 * @action get Retrieve an virus scan profile object by id.
 * @action list List virus scan profile objects by filter and pager.
 * @action scan Scan flavor asset according to virus scan profile.
 * @action update Update existing virus scan profile, it is possible to update the virus scan profile id too.
 */
class virusScanProfile{
	
	/**
	 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
	 * @param virusScanProfile VirusScanProfile 
	 * @return KalturaVirusScanProfile
	 */
	static add(virusScanProfile){
		let kparams = {};
		kparams.virusScanProfile = virusScanProfile;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'add', kparams);
	};
	
	/**
	 * Mark the virus scan profile as deleted.
	 * @param virusScanProfileId int 
	 * @return KalturaVirusScanProfile
	 */
	static deleteAction(virusScanProfileId){
		let kparams = {};
		kparams.virusScanProfileId = virusScanProfileId;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'delete', kparams);
	};
	
	/**
	 * Retrieve an virus scan profile object by id.
	 * @param virusScanProfileId int 
	 * @return KalturaVirusScanProfile
	 */
	static get(virusScanProfileId){
		let kparams = {};
		kparams.virusScanProfileId = virusScanProfileId;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'get', kparams);
	};
	
	/**
	 * List virus scan profile objects by filter and pager.
	 * @param filter VirusScanProfileFilter  (optional, default: null)
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaVirusScanProfileListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'list', kparams);
	};
	
	/**
	 * Scan flavor asset according to virus scan profile.
	 * @param flavorAssetId string 
	 * @param virusScanProfileId int  (optional, default: null)
	 * @return int
	 */
	static scan(flavorAssetId, virusScanProfileId = null){
		let kparams = {};
		kparams.flavorAssetId = flavorAssetId;
		kparams.virusScanProfileId = virusScanProfileId;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'scan', kparams);
	};
	
	/**
	 * Update existing virus scan profile, it is possible to update the virus scan profile id too.
	 * @param virusScanProfileId int 
	 * @param virusScanProfile VirusScanProfile Id
	 * @return KalturaVirusScanProfile
	 */
	static update(virusScanProfileId, virusScanProfile){
		let kparams = {};
		kparams.virusScanProfileId = virusScanProfileId;
		kparams.virusScanProfile = virusScanProfile;
		return new kaltura.RequestBuilder('virusscan_virusscanprofile', 'update', kparams);
	};
}
module.exports.virusScanProfile = virusScanProfile;


/**
 *Class definition for the Kaltura service: widevineDrm.
 * The available service actions:
 * @action getLicense Get license for encrypted content playback.
 */
class widevineDrm{
	
	/**
	 * Get license for encrypted content playback.
	 * @param flavorAssetId string 
	 * @param referrer string 64base encoded (optional, default: null)
	 * @return string
	 */
	static getLicense(flavorAssetId, referrer = null){
		let kparams = {};
		kparams.flavorAssetId = flavorAssetId;
		kparams.referrer = referrer;
		return new kaltura.RequestBuilder('widevine_widevinedrm', 'getLicense', kparams);
	};
}
module.exports.widevineDrm = widevineDrm;

