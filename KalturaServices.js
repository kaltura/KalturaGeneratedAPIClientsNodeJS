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
const kaltura = require('./KalturaClientBase');

/**
 *Class definition for the Kaltura service: announcement.
 * The available service actions:
 * @action add Add a new future scheduled system announcement push notification.
 * @action delete Delete an existing announcing. Announcement cannot be delete while being sent.
 * @action enableSystemAnnouncements Enable system announcements.
 * @action list Lists all announcements in the system.
 * @action update Update an existing future system announcement push notification. Announcement can only be updated only before sending.
 * @action updateStatus Update a system announcement status.
 */
class announcement{
	
	/**
	 * Add a new future scheduled system announcement push notification.
	 * @param announcement Announcement The announcement to be added.
 * timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 * Recipients values: All, LoggedIn, Guests
	 * @return KalturaAnnouncement
	 */
	static add(announcement){
		let kparams = {};
		kparams.announcement = announcement;
		return new kaltura.RequestBuilder('announcement', 'add', kparams);
	};
	
	/**
	 * Delete an existing announcing. Announcement cannot be delete while being sent.
	 * @param id int Id of the announcement
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('announcement', 'delete', kparams);
	};
	
	/**
	 * Enable system announcements.
	 * @return bool
	 */
	static enableSystemAnnouncements(){
		let kparams = {};
		return new kaltura.RequestBuilder('announcement', 'enableSystemAnnouncements', kparams);
	};
	
	/**
	 * Lists all announcements in the system.
	 * @param filter AnnouncementFilter Filter object
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaAnnouncementListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('announcement', 'list', kparams);
	};
	
	/**
	 * Update an existing future system announcement push notification. Announcement can only be updated only before sending.
	 * @param announcementId int The announcement identifier
	 * @param announcement Announcement The announcement to update.
 * timezone parameter should be taken from the 'name of timezone' from: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
 * Recipients values: All, LoggedIn, Guests
	 * @return KalturaAnnouncement
	 */
	static update(announcementId, announcement){
		let kparams = {};
		kparams.announcementId = announcementId;
		kparams.announcement = announcement;
		return new kaltura.RequestBuilder('announcement', 'update', kparams);
	};
	
	/**
	 * Update a system announcement status.
	 * @param id int Id of the announcement
	 * @param status bool Status to update to
	 * @return bool
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('announcement', 'updateStatus', kparams);
	};
}
module.exports.announcement = announcement;


/**
 *Class definition for the Kaltura service: appToken.
 * The available service actions:
 * @action add Add new application authentication token.
 * @action delete Delete application authentication token by id.
 * @action get Get application authentication token by id.
 * @action startSession Starts a new KS (Kaltura Session) based on application authentication token id.
 */
class appToken{
	
	/**
	 * Add new application authentication token.
	 * @param appToken AppToken Application token
	 * @return KalturaAppToken
	 */
	static add(appToken){
		let kparams = {};
		kparams.appToken = appToken;
		return new kaltura.RequestBuilder('apptoken', 'add', kparams);
	};
	
	/**
	 * Delete application authentication token by id.
	 * @param id string Application token identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'delete', kparams);
	};
	
	/**
	 * Get application authentication token by id.
	 * @param id string Application token identifier
	 * @return KalturaAppToken
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('apptoken', 'get', kparams);
	};
	
	/**
	 * Starts a new KS (Kaltura Session) based on application authentication token id.
	 * @param id string application token id
	 * @param tokenHash string hashed token - current KS concatenated with the application token hashed using the application token ‘hashType’
	 * @param userId string session user id, will be ignored if a different user id already defined on the application token (optional, default: null)
	 * @param type int session type, will be ignored if a different session type already defined on the application token (optional, enum: KalturaSessionType, default: null)
	 * @param expiry int session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null)
	 * @param udid string  (optional, default: null)
	 * @return KalturaSessionInfo
	 */
	static startSession(id, tokenHash, userId = null, type = null, expiry = null, udid = null){
		let kparams = {};
		kparams.id = id;
		kparams.tokenHash = tokenHash;
		kparams.userId = userId;
		kparams.type = type;
		kparams.expiry = expiry;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('apptoken', 'startSession', kparams);
	};
}
module.exports.appToken = appToken;


/**
 *Class definition for the Kaltura service: assetComment.
 * The available service actions:
 * @action add Add asset comments by asset id.
 * @action list Returns asset comments by asset id.
 */
class assetComment{
	
	/**
	 * Add asset comments by asset id.
	 * @param comment AssetComment comment
	 * @return KalturaAssetComment
	 */
	static add(comment){
		let kparams = {};
		kparams.comment = comment;
		return new kaltura.RequestBuilder('assetcomment', 'add', kparams);
	};
	
	/**
	 * Returns asset comments by asset id.
	 * @param filter AssetCommentFilter Filtering the assets comments request
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaAssetCommentListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('assetcomment', 'list', kparams);
	};
}
module.exports.assetComment = assetComment;


/**
 *Class definition for the Kaltura service: asset.
 * The available service actions:
 * @action get Returns media or EPG asset by media / EPG internal or external identifier.
 * @action list Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier.
 */
class asset{
	
	/**
	 * Returns media or EPG asset by media / EPG internal or external identifier.
	 * @param id string Asset identifier
	 * @param assetReferenceType string Asset type (enum: KalturaAssetReferenceType)
	 * @return KalturaAsset
	 */
	static get(id, assetReferenceType){
		let kparams = {};
		kparams.id = id;
		kparams.assetReferenceType = assetReferenceType;
		return new kaltura.RequestBuilder('asset', 'get', kparams);
	};
	
	/**
	 * Returns media or EPG assets. Filters by media identifiers or by EPG internal or external identifier.
	 * @param filter AssetFilter Filtering the assets request (optional, default: null)
	 * @param pager FilterPager Paging the request (optional, default: null)
	 * @return KalturaAssetListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('asset', 'list', kparams);
	};
}
module.exports.asset = asset;


/**
 *Class definition for the Kaltura service: assetFile.
 * The available service actions:
 * @action getContext get KalturaAssetFileContext.
 */
class assetFile{
	
	/**
	 * get KalturaAssetFileContext.
	 * @param id string Asset file identifier
	 * @return KalturaAssetFileContext
	 */
	static getContext(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('assetfile', 'getContext', kparams);
	};
}
module.exports.assetFile = assetFile;


/**
 *Class definition for the Kaltura service: assetHistory.
 * The available service actions:
 * @action list Get recently watched media for user, ordered by recently watched first.
 */
class assetHistory{
	
	/**
	 * Get recently watched media for user, ordered by recently watched first.
	 * @param filter AssetHistoryFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index. Number of assets to return per page. Possible range 5 ≤ size ≥ 50. If omitted - will be set to 25. If a value > 50 provided – will set to 50 (optional, default: null)
	 * @return KalturaAssetHistoryListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('assethistory', 'list', kparams);
	};
}
module.exports.assetHistory = assetHistory;


/**
 *Class definition for the Kaltura service: assetStatistics.
 * The available service actions:
 * @action query Returns statistics for given list of assets by type and / or time period.
 */
class assetStatistics{
	
	/**
	 * Returns statistics for given list of assets by type and / or time period.
	 * @param query AssetStatisticsQuery Query for assets statistics
	 * @return KalturaAssetStatisticsListResponse
	 */
	static query(query){
		let kparams = {};
		kparams.query = query;
		return new kaltura.RequestBuilder('assetstatistics', 'query', kparams);
	};
}
module.exports.assetStatistics = assetStatistics;


/**
 *Class definition for the Kaltura service: bookmark.
 * The available service actions:
 * @action add Report player position and action for the user on the watched asset. Player position is used to later allow resume watching.
 * @action list Returns player position record/s for the requested asset and the requesting user.
 * If default user makes the request – player position records are provided for all of the users in the household.
 * If non-default user makes the request - player position records are provided for the requesting user and the default user of the household.
 */
class bookmark{
	
	/**
	 * Report player position and action for the user on the watched asset. Player position is used to later allow resume watching.
	 * @param bookmark Bookmark Bookmark details
	 * @return bool
	 */
	static add(bookmark){
		let kparams = {};
		kparams.bookmark = bookmark;
		return new kaltura.RequestBuilder('bookmark', 'add', kparams);
	};
	
	/**
	 * Returns player position record/s for the requested asset and the requesting user.
 * If default user makes the request – player position records are provided for all of the users in the household.
 * If non-default user makes the request - player position records are provided for the requesting user and the default user of the household.
	 * @param filter BookmarkFilter Filter option for the last position
	 * @return KalturaBookmarkListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('bookmark', 'list', kparams);
	};
}
module.exports.bookmark = bookmark;


/**
 *Class definition for the Kaltura service: cdnAdapterProfile.
 * The available service actions:
 * @action add Insert new CDN adapter for partner.
 * @action delete Delete CDN adapter by CDN adapter id.
 * @action generateSharedSecret Generate CDN adapter shared secret.
 * @action list Returns all CDN adapters for partner.
 * @action update Update CDN adapter details.
 */
class cdnAdapterProfile{
	
	/**
	 * Insert new CDN adapter for partner.
	 * @param adapter CDNAdapterProfile CDN adapter object
	 * @return KalturaCDNAdapterProfile
	 */
	static add(adapter){
		let kparams = {};
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete CDN adapter by CDN adapter id.
	 * @param adapterId int CDN adapter identifier
	 * @return bool
	 */
	static deleteAction(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate CDN adapter shared secret.
	 * @param adapterId int CDN adapter identifier
	 * @return KalturaCDNAdapterProfile
	 */
	static generateSharedSecret(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all CDN adapters for partner.
	 * @return KalturaCDNAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdnadapterprofile', 'list', kparams);
	};
	
	/**
	 * Update CDN adapter details.
	 * @param adapterId int CDN adapter id to update
	 * @param adapter CDNAdapterProfile CDN adapter Object
	 * @return KalturaCDNAdapterProfile
	 */
	static update(adapterId, adapter){
		let kparams = {};
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdnadapterprofile', 'update', kparams);
	};
}
module.exports.cdnAdapterProfile = cdnAdapterProfile;


/**
 *Class definition for the Kaltura service: cdnPartnerSettings.
 * The available service actions:
 * @action get Retrieve the partner’s CDN settings (default adapters).
 * @action update Configure the partner’s CDN settings (default adapters).
 */
class cdnPartnerSettings{
	
	/**
	 * Retrieve the partner’s CDN settings (default adapters).
	 * @return KalturaCDNPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdnpartnersettings', 'get', kparams);
	};
	
	/**
	 * Configure the partner’s CDN settings (default adapters).
	 * @param settings CDNPartnerSettings 
	 * @return KalturaCDNPartnerSettings
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('cdnpartnersettings', 'update', kparams);
	};
}
module.exports.cdnPartnerSettings = cdnPartnerSettings;


/**
 *Class definition for the Kaltura service: cDVRAdapterProfile.
 * The available service actions:
 * @action add Insert new C-DVR adapter for partner.
 * @action delete Delete C-DVR adapter by C-DVR adapter id.
 * @action generateSharedSecret Generate C-DVR adapter shared secret.
 * @action list Returns all C-DVR adapters for partner.
 * @action update Update C-DVR adapter details.
 */
class cDVRAdapterProfile{
	
	/**
	 * Insert new C-DVR adapter for partner.
	 * @param adapter CDVRAdapterProfile C-DVR adapter object
	 * @return KalturaCDVRAdapterProfile
	 */
	static add(adapter){
		let kparams = {};
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete C-DVR adapter by C-DVR adapter id.
	 * @param adapterId int C-DVR adapter identifier
	 * @return bool
	 */
	static deleteAction(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate C-DVR adapter shared secret.
	 * @param adapterId int C-DVR adapter identifier
	 * @return KalturaCDVRAdapterProfile
	 */
	static generateSharedSecret(adapterId){
		let kparams = {};
		kparams.adapterId = adapterId;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all C-DVR adapters for partner.
	 * @return KalturaCDVRAdapterProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('cdvradapterprofile', 'list', kparams);
	};
	
	/**
	 * Update C-DVR adapter details.
	 * @param adapterId int C-DVR adapter identifier
	 * @param adapter CDVRAdapterProfile C-DVR adapter Object
	 * @return KalturaCDVRAdapterProfile
	 */
	static update(adapterId, adapter){
		let kparams = {};
		kparams.adapterId = adapterId;
		kparams.adapter = adapter;
		return new kaltura.RequestBuilder('cdvradapterprofile', 'update', kparams);
	};
}
module.exports.cDVRAdapterProfile = cDVRAdapterProfile;


/**
 *Class definition for the Kaltura service: channel.
 * The available service actions:
 * @action add Insert new channel for partner. Currently supports only KSQL channel.
 * @action delete Delete channel by its channel id.
 * @action get Returns channel info.
 * @action update Update channel details. Currently supports only KSQL channel.
 */
class channel{
	
	/**
	 * Insert new channel for partner. Currently supports only KSQL channel.
	 * @param channel Channel KSQL channel Object
	 * @return KalturaChannel
	 */
	static add(channel){
		let kparams = {};
		kparams.channel = channel;
		return new kaltura.RequestBuilder('channel', 'add', kparams);
	};
	
	/**
	 * Delete channel by its channel id.
	 * @param channelId int channel identifier
	 * @return bool
	 */
	static deleteAction(channelId){
		let kparams = {};
		kparams.channelId = channelId;
		return new kaltura.RequestBuilder('channel', 'delete', kparams);
	};
	
	/**
	 * Returns channel info.
	 * @param id int Channel Identifier
	 * @return KalturaChannel
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('channel', 'get', kparams);
	};
	
	/**
	 * Update channel details. Currently supports only KSQL channel.
	 * @param channelId int Channel identifier
	 * @param channel Channel KSQL channel Object
	 * @return KalturaChannel
	 */
	static update(channelId, channel){
		let kparams = {};
		kparams.channelId = channelId;
		kparams.channel = channel;
		return new kaltura.RequestBuilder('channel', 'update', kparams);
	};
}
module.exports.channel = channel;


/**
 *Class definition for the Kaltura service: coupon.
 * The available service actions:
 * @action get Returns information about a coupon.
 */
class coupon{
	
	/**
	 * Returns information about a coupon.
	 * @param code string Coupon code
	 * @return KalturaCoupon
	 */
	static get(code){
		let kparams = {};
		kparams.code = code;
		return new kaltura.RequestBuilder('coupon', 'get', kparams);
	};
}
module.exports.coupon = coupon;


/**
 *Class definition for the Kaltura service: entitlement.
 * The available service actions:
 * @action cancel Immediately cancel a subscription, PPV or collection. Cancel is possible only if within cancellation window and content not already consumed.
 * @action cancelRenewal Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal.
 * @action externalReconcile Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household.
 * @action forceCancel Immediately cancel a subscription, PPV or collection. Cancel applies regardless of cancellation window and content consumption status.
 * @action grant Grant household for an entitlement for a PPV or Subscription.
 * @action list Gets all the entitled media items for a household.
 */
class entitlement{
	
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel is possible only if within cancellation window and content not already consumed.
	 * @param assetId int The mediaFileID to cancel
	 * @param transactionType string The transaction type for the cancelation (enum: KalturaTransactionType)
	 * @return bool
	 */
	static cancel(assetId, transactionType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new kaltura.RequestBuilder('entitlement', 'cancel', kparams);
	};
	
	/**
	 * Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal.
	 * @param subscriptionId string Subscription Code
	 */
	static cancelRenewal(subscriptionId){
		let kparams = {};
		kparams.subscriptionId = subscriptionId;
		return new kaltura.RequestBuilder('entitlement', 'cancelRenewal', kparams);
	};
	
	/**
	 * Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household.
	 * @return bool
	 */
	static externalReconcile(){
		let kparams = {};
		return new kaltura.RequestBuilder('entitlement', 'externalReconcile', kparams);
	};
	
	/**
	 * Immediately cancel a subscription, PPV or collection. Cancel applies regardless of cancellation window and content consumption status.
	 * @param assetId int The mediaFileID to cancel
	 * @param transactionType string The transaction type for the cancelation (enum: KalturaTransactionType)
	 * @return bool
	 */
	static forceCancel(assetId, transactionType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new kaltura.RequestBuilder('entitlement', 'forceCancel', kparams);
	};
	
	/**
	 * Grant household for an entitlement for a PPV or Subscription.
	 * @param productId int Identifier for the product package from which this content is offered
	 * @param productType string Product package type. Possible values: PPV, Subscription, Collection (enum: KalturaTransactionType)
	 * @param history bool Controls if the new entitlements grant will appear in the user’s history. True – will add a history entry. False (or if ommited) – no history entry will be added
	 * @param contentId int Identifier for the content. Relevant only if Product type = PPV (optional)
	 * @return bool
	 */
	static grant(productId, productType, history, contentId = 0){
		let kparams = {};
		kparams.productId = productId;
		kparams.productType = productType;
		kparams.history = history;
		kparams.contentId = contentId;
		return new kaltura.RequestBuilder('entitlement', 'grant', kparams);
	};
	
	/**
	 * Gets all the entitled media items for a household.
	 * @param filter EntitlementFilter Request filter
	 * @param pager FilterPager Request pager (optional, default: null)
	 * @return KalturaEntitlementListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('entitlement', 'list', kparams);
	};
}
module.exports.entitlement = entitlement;


/**
 *Class definition for the Kaltura service: exportTask.
 * The available service actions:
 * @action add Adds a new bulk export task.
 * @action delete Deletes an existing bulk export task by task identifier.
 * @action get Gets an existing bulk export task by task identifier.
 * @action list Returns bulk export tasks by tasks identifiers.
 * @action update Updates an existing bulk export task by task identifier.
 */
class exportTask{
	
	/**
	 * Adds a new bulk export task.
	 * @param task ExportTask The task model to add
	 * @return KalturaExportTask
	 */
	static add(task){
		let kparams = {};
		kparams.task = task;
		return new kaltura.RequestBuilder('exporttask', 'add', kparams);
	};
	
	/**
	 * Deletes an existing bulk export task by task identifier.
	 * @param id int The identifier of the task to delete
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('exporttask', 'delete', kparams);
	};
	
	/**
	 * Gets an existing bulk export task by task identifier.
	 * @param id int The identifier of the task to get
	 * @return KalturaExportTask
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('exporttask', 'get', kparams);
	};
	
	/**
	 * Returns bulk export tasks by tasks identifiers.
	 * @param filter ExportTaskFilter Bulk export tasks filter (optional, default: null)
	 * @return KalturaExportTaskListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('exporttask', 'list', kparams);
	};
	
	/**
	 * Updates an existing bulk export task by task identifier.
	 * @param id int The task id to update
	 * @param task ExportTask The task model to update
	 * @return KalturaExportTask
	 */
	static update(id, task){
		let kparams = {};
		kparams.id = id;
		kparams.task = task;
		return new kaltura.RequestBuilder('exporttask', 'update', kparams);
	};
}
module.exports.exportTask = exportTask;


/**
 *Class definition for the Kaltura service: externalChannelProfile.
 * The available service actions:
 * @action add Insert new External channel for partner.
 * @action delete Delete External channel by External channel id.
 * @action list Returns all External channels for partner.
 * @action update Update External channel details.
 */
class externalChannelProfile{
	
	/**
	 * Insert new External channel for partner.
	 * @param externalChannel ExternalChannelProfile External channel Object
	 * @return KalturaExternalChannelProfile
	 */
	static add(externalChannel){
		let kparams = {};
		kparams.externalChannel = externalChannel;
		return new kaltura.RequestBuilder('externalchannelprofile', 'add', kparams);
	};
	
	/**
	 * Delete External channel by External channel id.
	 * @param externalChannelId int External channel identifier
	 * @return bool
	 */
	static deleteAction(externalChannelId){
		let kparams = {};
		kparams.externalChannelId = externalChannelId;
		return new kaltura.RequestBuilder('externalchannelprofile', 'delete', kparams);
	};
	
	/**
	 * Returns all External channels for partner.
	 * @return KalturaExternalChannelProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('externalchannelprofile', 'list', kparams);
	};
	
	/**
	 * Update External channel details.
	 * @param externalChannelId int External channel identifier
	 * @param externalChannel ExternalChannelProfile External channel Object
	 * @return KalturaExternalChannelProfile
	 */
	static update(externalChannelId, externalChannel){
		let kparams = {};
		kparams.externalChannelId = externalChannelId;
		kparams.externalChannel = externalChannel;
		return new kaltura.RequestBuilder('externalchannelprofile', 'update', kparams);
	};
}
module.exports.externalChannelProfile = externalChannelProfile;


/**
 *Class definition for the Kaltura service: favorite.
 * The available service actions:
 * @action add Add media to user&#39;s favorite list.
 * @action delete Remove media from user&#39;s favorite list.
 * @action list Retrieving users&#39; favorites.
 */
class favorite{
	
	/**
	 * Add media to user&#39;s favorite list.
	 * @param favorite Favorite Favorite details
	 * @return KalturaFavorite
	 */
	static add(favorite){
		let kparams = {};
		kparams.favorite = favorite;
		return new kaltura.RequestBuilder('favorite', 'add', kparams);
	};
	
	/**
	 * Remove media from user&#39;s favorite list.
	 * @param id int Media identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('favorite', 'delete', kparams);
	};
	
	/**
	 * Retrieving users&#39; favorites.
	 * @param filter FavoriteFilter Request filter (optional, default: null)
	 * @return KalturaFavoriteListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('favorite', 'list', kparams);
	};
}
module.exports.favorite = favorite;


/**
 *Class definition for the Kaltura service: followTvSeries.
 * The available service actions:
 * @action add Add a user&#39;s tv series follow.
 * Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
 * @action delete Delete a user&#39;s tv series follow.
 * Possible status codes: UserNotFollowing = 8012, NotFound = 500007, InvalidAssetId = 4024, AnnouncementNotFound = 8006.
 * @action list List user&#39;s tv series follows.
 * Possible status codes:.
 */
class followTvSeries{
	
	/**
	 * Add a user&#39;s tv series follow.
 * Possible status codes: UserAlreadyFollowing = 8013, NotFound = 500007, InvalidAssetId = 4024.
	 * @param followTvSeries FollowTvSeries 
	 * @return KalturaFollowTvSeries
	 */
	static add(followTvSeries){
		let kparams = {};
		kparams.followTvSeries = followTvSeries;
		return new kaltura.RequestBuilder('followtvseries', 'add', kparams);
	};
	
	/**
	 * Delete a user&#39;s tv series follow.
 * Possible status codes: UserNotFollowing = 8012, NotFound = 500007, InvalidAssetId = 4024, AnnouncementNotFound = 8006.
	 * @param assetId int 
	 * @return bool
	 */
	static deleteAction(assetId){
		let kparams = {};
		kparams.assetId = assetId;
		return new kaltura.RequestBuilder('followtvseries', 'delete', kparams);
	};
	
	/**
	 * List user&#39;s tv series follows.
 * Possible status codes:.
	 * @param filter FollowTvSeriesFilter 
	 * @param pager FilterPager  (optional, default: null)
	 * @return KalturaFollowTvSeriesListResponse
	 */
	static listAction(filter, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('followtvseries', 'list', kparams);
	};
}
module.exports.followTvSeries = followTvSeries;


/**
 *Class definition for the Kaltura service: homeNetwork.
 * The available service actions:
 * @action add Add a new home network to a household.
 * @action delete Delete household’s existing home network.
 * @action list Retrieve the household’s home networks.
 * @action update Update and existing home network for a household.
 */
class homeNetwork{
	
	/**
	 * Add a new home network to a household.
	 * @param homeNetwork HomeNetwork Home network to add
	 * @return KalturaHomeNetwork
	 */
	static add(homeNetwork){
		let kparams = {};
		kparams.homeNetwork = homeNetwork;
		return new kaltura.RequestBuilder('homenetwork', 'add', kparams);
	};
	
	/**
	 * Delete household’s existing home network.
	 * @param externalId string The network to update
	 * @return bool
	 */
	static deleteAction(externalId){
		let kparams = {};
		kparams.externalId = externalId;
		return new kaltura.RequestBuilder('homenetwork', 'delete', kparams);
	};
	
	/**
	 * Retrieve the household’s home networks.
	 * @return KalturaHomeNetworkListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('homenetwork', 'list', kparams);
	};
	
	/**
	 * Update and existing home network for a household.
	 * @param externalId string Home network identifier
	 * @param homeNetwork HomeNetwork Home network to update
	 * @return KalturaHomeNetwork
	 */
	static update(externalId, homeNetwork){
		let kparams = {};
		kparams.externalId = externalId;
		kparams.homeNetwork = homeNetwork;
		return new kaltura.RequestBuilder('homenetwork', 'update', kparams);
	};
}
module.exports.homeNetwork = homeNetwork;


/**
 *Class definition for the Kaltura service: household.
 * The available service actions:
 * @action add Creates a household for the user.
 * @action delete Fully delete a household. Delete all of the household information, including users, devices, transactions and assets.
 * @action get Returns the household model.
 * @action resetFrequency Reset a household’s time limitation for removing user or device.
 * @action resume Resumed a given household service to its previous service settings.
 * @action suspend Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
 * @action update Update the household name and description.
 */
class household{
	
	/**
	 * Creates a household for the user.
	 * @param household Household Household object
	 * @return KalturaHousehold
	 */
	static add(household){
		let kparams = {};
		kparams.household = household;
		return new kaltura.RequestBuilder('household', 'add', kparams);
	};
	
	/**
	 * Fully delete a household. Delete all of the household information, including users, devices, transactions and assets.
	 * @param id int Household identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('household', 'delete', kparams);
	};
	
	/**
	 * Returns the household model.
	 * @param id int Household identifier (optional, default: null)
	 * @return KalturaHousehold
	 */
	static get(id = null){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('household', 'get', kparams);
	};
	
	/**
	 * Reset a household’s time limitation for removing user or device.
	 * @param frequencyType string Possible values: devices – reset the device change frequency.
 * users – reset the user add/remove frequency (enum: KalturaHouseholdFrequencyType)
	 * @return KalturaHousehold
	 */
	static resetFrequency(frequencyType){
		let kparams = {};
		kparams.frequencyType = frequencyType;
		return new kaltura.RequestBuilder('household', 'resetFrequency', kparams);
	};
	
	/**
	 * Resumed a given household service to its previous service settings.
	 * @return bool
	 */
	static resume(){
		let kparams = {};
		return new kaltura.RequestBuilder('household', 'resume', kparams);
	};
	
	/**
	 * Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume.
	 * @return bool
	 */
	static suspend(){
		let kparams = {};
		return new kaltura.RequestBuilder('household', 'suspend', kparams);
	};
	
	/**
	 * Update the household name and description.
	 * @param household Household Household object
	 * @return KalturaHousehold
	 */
	static update(household){
		let kparams = {};
		kparams.household = household;
		return new kaltura.RequestBuilder('household', 'update', kparams);
	};
}
module.exports.household = household;


/**
 *Class definition for the Kaltura service: householdDevice.
 * The available service actions:
 * @action add Registers a device to a household using pin code.
 * @action addByPin Registers a device to a household using pin code.
 * @action delete Removes a device from household.
 * @action generatePin Generates device pin to use when adding a device to household by pin.
 * @action get Returns device registration status to the supplied household.
 * @action update Update the name of the device by UDID.
 * @action updateStatus Update the name of the device by UDID.
 */
class householdDevice{
	
	/**
	 * Registers a device to a household using pin code.
	 * @param device HouseholdDevice Device
	 * @return KalturaHouseholdDevice
	 */
	static add(device){
		let kparams = {};
		kparams.device = device;
		return new kaltura.RequestBuilder('householddevice', 'add', kparams);
	};
	
	/**
	 * Registers a device to a household using pin code.
	 * @param deviceName string Device name
	 * @param pin string Pin code
	 * @return KalturaHouseholdDevice
	 */
	static addByPin(deviceName, pin){
		let kparams = {};
		kparams.deviceName = deviceName;
		kparams.pin = pin;
		return new kaltura.RequestBuilder('householddevice', 'addByPin', kparams);
	};
	
	/**
	 * Removes a device from household.
	 * @param udid string device UDID
	 * @return bool
	 */
	static deleteAction(udid){
		let kparams = {};
		kparams.udid = udid;
		return new kaltura.RequestBuilder('householddevice', 'delete', kparams);
	};
	
	/**
	 * Generates device pin to use when adding a device to household by pin.
	 * @param udid string Device UDID
	 * @param brandId int Device brand identifier
	 * @return KalturaDevicePin
	 */
	static generatePin(udid, brandId){
		let kparams = {};
		kparams.udid = udid;
		kparams.brandId = brandId;
		return new kaltura.RequestBuilder('householddevice', 'generatePin', kparams);
	};
	
	/**
	 * Returns device registration status to the supplied household.
	 * @return KalturaHouseholdDevice
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('householddevice', 'get', kparams);
	};
	
	/**
	 * Update the name of the device by UDID.
	 * @param udid string Device UDID
	 * @param device HouseholdDevice Device object
	 * @return KalturaHouseholdDevice
	 */
	static update(udid, device){
		let kparams = {};
		kparams.udid = udid;
		kparams.device = device;
		return new kaltura.RequestBuilder('householddevice', 'update', kparams);
	};
	
	/**
	 * Update the name of the device by UDID.
	 * @param udid string Device UDID
	 * @param status string Device status (enum: KalturaDeviceStatus)
	 * @return bool
	 */
	static updateStatus(udid, status){
		let kparams = {};
		kparams.udid = udid;
		kparams.status = status;
		return new kaltura.RequestBuilder('householddevice', 'updateStatus', kparams);
	};
}
module.exports.householdDevice = householdDevice;


/**
 *Class definition for the Kaltura service: householdLimitations.
 * The available service actions:
 * @action get Get the limitation module by id.
 */
class householdLimitations{
	
	/**
	 * Get the limitation module by id.
	 * @param id int 
	 * @return KalturaHouseholdLimitations
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('householdlimitations', 'get', kparams);
	};
}
module.exports.householdLimitations = householdLimitations;


/**
 *Class definition for the Kaltura service: householdPaymentGateway.
 * The available service actions:
 * @action delete Disable payment-gateway on the household.
 * @action set Enable a payment-gateway provider for the household.
 * @action getChargeID Get a household’s billing account identifier (charge ID) for a given payment gateway.
 * @action invoke Gets the Payment Gateway Configuration for the payment gateway identifier given.
 * @action list Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
 * @action setChargeID Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
 */
class householdPaymentGateway{
	
	/**
	 * Disable payment-gateway on the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static deleteAction(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'delete', kparams);
	};
	
	/**
	 * Enable a payment-gateway provider for the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static set(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'set', kparams);
	};
	
	/**
	 * Get a household’s billing account identifier (charge ID) for a given payment gateway.
	 * @param paymentGatewayExternalId string External identifier for the payment gateway
	 * @return string
	 */
	static getChargeID(paymentGatewayExternalId){
		let kparams = {};
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'getChargeID', kparams);
	};
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param paymentGatewayId int The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway
	 * @param intent string Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter
	 * @param extraParameters array Additional parameters to send to the payment gateway adapter
	 * @return KalturaPaymentGatewayConfiguration
	 */
	static invoke(paymentGatewayId, intent, extraParameters){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'invoke', kparams);
	};
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
	 * @return KalturaHouseholdPaymentGatewayListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpaymentgateway', 'list', kparams);
	};
	
	/**
	 * Set user billing account identifier (charge ID), for a specific household and a specific payment gateway.
	 * @param paymentGatewayExternalId string External identifier for the payment gateway
	 * @param chargeId string The billing user account identifier for this household at the given payment gateway
	 * @return bool
	 */
	static setChargeID(paymentGatewayExternalId, chargeId){
		let kparams = {};
		kparams.paymentGatewayExternalId = paymentGatewayExternalId;
		kparams.chargeId = chargeId;
		return new kaltura.RequestBuilder('householdpaymentgateway', 'setChargeID', kparams);
	};
}
module.exports.householdPaymentGateway = householdPaymentGateway;


/**
 *Class definition for the Kaltura service: householdPaymentMethod.
 * The available service actions:
 * @action forceRemove Force remove of a payment method of the household.
 * @action list Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
 * @action remove Removes a payment method of the household.
 * @action setAsDefault Set a payment method as default for the household.
 */
class householdPaymentMethod{
	
	/**
	 * Force remove of a payment method of the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static forceRemove(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'forceRemove', kparams);
	};
	
	/**
	 * Get a list of all configured Payment Gateways providers available for the account. For each payment is provided with the household associated payment methods.
	 * @return KalturaHouseholdPaymentMethodListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpaymentmethod', 'list', kparams);
	};
	
	/**
	 * Removes a payment method of the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static remove(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'remove', kparams);
	};
	
	/**
	 * Set a payment method as default for the household.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentMethodId int Payment method Identifier
	 * @return bool
	 */
	static setAsDefault(paymentGatewayId, paymentMethodId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('householdpaymentmethod', 'setAsDefault', kparams);
	};
}
module.exports.householdPaymentMethod = householdPaymentMethod;


/**
 *Class definition for the Kaltura service: householdPremiumService.
 * The available service actions:
 * @action list Returns all the premium services allowed for the household.
 */
class householdPremiumService{
	
	/**
	 * Returns all the premium services allowed for the household.
	 * @return KalturaHouseholdPremiumServiceListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdpremiumservice', 'list', kparams);
	};
}
module.exports.householdPremiumService = householdPremiumService;


/**
 *Class definition for the Kaltura service: householdQuota.
 * The available service actions:
 * @action get Returns the household&#39;s quota data.
 */
class householdQuota{
	
	/**
	 * Returns the household&#39;s quota data.
	 * @return KalturaHouseholdQuota
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('householdquota', 'get', kparams);
	};
}
module.exports.householdQuota = householdQuota;


/**
 *Class definition for the Kaltura service: householdUser.
 * The available service actions:
 * @action add Adds a user to household.
 * @action delete Removes a user from household.
 */
class householdUser{
	
	/**
	 * Adds a user to household.
	 * @param householdUser HouseholdUser User details to add
	 * @return KalturaHouseholdUser
	 */
	static add(householdUser){
		let kparams = {};
		kparams.householdUser = householdUser;
		return new kaltura.RequestBuilder('householduser', 'add', kparams);
	};
	
	/**
	 * Removes a user from household.
	 * @param userId string The identifier of the user to delete
	 * @return bool
	 */
	static deleteAction(userId){
		let kparams = {};
		kparams.userId = userId;
		return new kaltura.RequestBuilder('householduser', 'delete', kparams);
	};
}
module.exports.householdUser = householdUser;


/**
 *Class definition for the Kaltura service: inboxMessage.
 * The available service actions:
 * @action get TBD.
 * @action list List inbox messages.
 * @action updateStatus TBD.
 */
class inboxMessage{
	
	/**
	 * TBD.
	 * @param id string message id
	 * @return KalturaInboxMessage
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('inboxmessage', 'get', kparams);
	};
	
	/**
	 * List inbox messages.
	 * @param filter InboxMessageFilter filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaInboxMessageListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('inboxmessage', 'list', kparams);
	};
	
	/**
	 * TBD.
	 * @param id string 
	 * @param status string  (enum: KalturaInboxMessageStatus)
	 * @return bool
	 */
	static updateStatus(id, status){
		let kparams = {};
		kparams.id = id;
		kparams.status = status;
		return new kaltura.RequestBuilder('inboxmessage', 'updateStatus', kparams);
	};
}
module.exports.inboxMessage = inboxMessage;


/**
 *Class definition for the Kaltura service: licensedUrl.
 * The available service actions:
 * @action get Get the URL for playing an asset - EPG or media (not available for recording for now).
 */
class licensedUrl{
	
	/**
	 * Get the URL for playing an asset - EPG or media (not available for recording for now).
	 * @param request LicensedUrlBaseRequest 
	 * @return KalturaLicensedUrl
	 */
	static get(request){
		let kparams = {};
		kparams.request = request;
		return new kaltura.RequestBuilder('licensedurl', 'get', kparams);
	};
}
module.exports.licensedUrl = licensedUrl;


/**
 *Class definition for the Kaltura service: messageTemplate.
 * The available service actions:
 * @action get Retrieve a message template used in push notifications and inbox.
 * @action update Set the account’s push notifications and inbox messages templates.
 */
class messageTemplate{
	
	/**
	 * Retrieve a message template used in push notifications and inbox.
	 * @param assetType int possible values: Asset type – Series (enum: KalturaOTTAssetType)
	 * @return KalturaMessageTemplate
	 */
	static get(assetType){
		let kparams = {};
		kparams.assetType = assetType;
		return new kaltura.RequestBuilder('messagetemplate', 'get', kparams);
	};
	
	/**
	 * Set the account’s push notifications and inbox messages templates.
	 * @param assetType int The asset type to update its template (enum: KalturaOTTAssetType)
	 * @param template MessageTemplate The actual message with placeholders to be presented to the user
	 * @return KalturaMessageTemplate
	 */
	static update(assetType, template){
		let kparams = {};
		kparams.assetType = assetType;
		kparams.template = template;
		return new kaltura.RequestBuilder('messagetemplate', 'update', kparams);
	};
}
module.exports.messageTemplate = messageTemplate;


/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action initiateCleanup TBD.
 * @action register TBD.
 * @action setDevicePushToken Registers the device push token to the push service.
 */
class notification{
	
	/**
	 * TBD.
	 * @return bool
	 */
	static initiateCleanup(){
		let kparams = {};
		return new kaltura.RequestBuilder('notification', 'initiateCleanup', kparams);
	};
	
	/**
	 * TBD.
	 * @param identifier string In case type is "announcement", identifier should be the announcement ID. In case type is "system", identifier should be "login" (the login topic)
	 * @param type string "announcement" - TV-Series topic, "system" - login topic (enum: KalturaNotificationType)
	 * @return KalturaRegistryResponse
	 */
	static register(identifier, type){
		let kparams = {};
		kparams.identifier = identifier;
		kparams.type = type;
		return new kaltura.RequestBuilder('notification', 'register', kparams);
	};
	
	/**
	 * Registers the device push token to the push service.
	 * @param pushToken string The device-application pair authentication for push delivery
	 * @return bool
	 */
	static setDevicePushToken(pushToken){
		let kparams = {};
		kparams.pushToken = pushToken;
		return new kaltura.RequestBuilder('notification', 'setDevicePushToken', kparams);
	};
}
module.exports.notification = notification;


/**
 *Class definition for the Kaltura service: notificationsPartnerSettings.
 * The available service actions:
 * @action get Retrieve the partner notification settings.
 * @action update Update the account notification settings.
 */
class notificationsPartnerSettings{
	
	/**
	 * Retrieve the partner notification settings.
	 * @return KalturaNotificationsPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('notificationspartnersettings', 'get', kparams);
	};
	
	/**
	 * Update the account notification settings.
	 * @param settings NotificationsPartnerSettings Account notification settings model
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('notificationspartnersettings', 'update', kparams);
	};
}
module.exports.notificationsPartnerSettings = notificationsPartnerSettings;


/**
 *Class definition for the Kaltura service: notificationsSettings.
 * The available service actions:
 * @action get Retrieve the user’s notification settings.
 * @action update Update the user’s notification settings.
 */
class notificationsSettings{
	
	/**
	 * Retrieve the user’s notification settings.
	 * @return KalturaNotificationsSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('notificationssettings', 'get', kparams);
	};
	
	/**
	 * Update the user’s notification settings.
	 * @param settings NotificationsSettings 
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('notificationssettings', 'update', kparams);
	};
}
module.exports.notificationsSettings = notificationsSettings;


/**
 *Class definition for the Kaltura service: ossAdapterProfile.
 * The available service actions:
 * @action add Insert new OSS adapter for partner.
 * @action delete Delete OSS adapter by OSS adapter id.
 * @action generateSharedSecret Generate oss adapter shared secret.
 * @action update Update OSS adapter details.
 */
class ossAdapterProfile{
	
	/**
	 * Insert new OSS adapter for partner.
	 * @param ossAdapter OSSAdapterProfile OSS adapter Object
	 * @return KalturaOSSAdapterProfile
	 */
	static add(ossAdapter){
		let kparams = {};
		kparams.ossAdapter = ossAdapter;
		return new kaltura.RequestBuilder('ossadapterprofile', 'add', kparams);
	};
	
	/**
	 * Delete OSS adapter by OSS adapter id.
	 * @param ossAdapterId int OSS adapter identifier
	 * @return bool
	 */
	static deleteAction(ossAdapterId){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		return new kaltura.RequestBuilder('ossadapterprofile', 'delete', kparams);
	};
	
	/**
	 * Generate oss adapter shared secret.
	 * @param ossAdapterId int OSS adapter identifier
	 * @return KalturaOSSAdapterProfile
	 */
	static generateSharedSecret(ossAdapterId){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		return new kaltura.RequestBuilder('ossadapterprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Update OSS adapter details.
	 * @param ossAdapterId int OSS adapter identifier
	 * @param ossAdapter OSSAdapterProfile OSS adapter Object
	 * @return KalturaOSSAdapterProfile
	 */
	static update(ossAdapterId, ossAdapter){
		let kparams = {};
		kparams.ossAdapterId = ossAdapterId;
		kparams.ossAdapter = ossAdapter;
		return new kaltura.RequestBuilder('ossadapterprofile', 'update', kparams);
	};
}
module.exports.ossAdapterProfile = ossAdapterProfile;


/**
 *Class definition for the Kaltura service: ottCategory.
 * The available service actions:
 * @action get Retrieve the list of categories (hierarchical) and their associated channels.
 */
class ottCategory{
	
	/**
	 * Retrieve the list of categories (hierarchical) and their associated channels.
	 * @param id int Category Identifier
	 * @return KalturaOTTCategory
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ottcategory', 'get', kparams);
	};
}
module.exports.ottCategory = ottCategory;


/**
 *Class definition for the Kaltura service: ottUser.
 * The available service actions:
 * @action activate Activate the account by activation token.
 * @action addRole Edit user details.
 * @action anonymousLogin Returns tokens (KS and refresh token) for anonymous access.
 * @action delete Permanently delete a user. User to delete cannot be an exclusive household master, and cannot be default user.
 * @action get Retrieving users&#39; data.
 * @action getEncryptedUserId Resend the activation token to a user.
 * @action list Retrieve user by external identifier or username.
 * @action login User sign-in via a time-expired sign-in PIN.
 * @action loginWithPin User sign-in via a time-expired sign-in PIN.
 * @action logout Logout the calling user.
 * @action refreshSession Returns new Kaltura session (ks) for the user, using the supplied refresh_token (only if it&#39;s valid and not expired).
 * @action register Sign up a new user.
 * @action resendActivationToken Resend the activation token to a user.
 * @action resetPassword Send an e-mail with URL to enable the user to set new password.
 * @action setInitialPassword Renew the user&#39;s password after validating the token that sent as part of URL in e-mail.
 * @action update Given a user name and existing password, change to a new password.
 * @action updateLoginData Given a user name and existing password, change to a new password.
 */
class ottUser{
	
	/**
	 * Activate the account by activation token.
	 * @param partnerId int The partner ID
	 * @param username string Username of the user to activate
	 * @param activationToken string Activation token of the user
	 * @return KalturaOTTUser
	 */
	static activate(partnerId, username, activationToken){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.activationToken = activationToken;
		return new kaltura.RequestBuilder('ottuser', 'activate', kparams);
	};
	
	/**
	 * Edit user details.
	 * @param roleId int The role identifier to add
	 * @return bool
	 */
	static addRole(roleId){
		let kparams = {};
		kparams.roleId = roleId;
		return new kaltura.RequestBuilder('ottuser', 'addRole', kparams);
	};
	
	/**
	 * Returns tokens (KS and refresh token) for anonymous access.
	 * @param partnerId int The partner ID
	 * @param udid string The caller device's UDID (optional, default: null)
	 * @return KalturaLoginSession
	 */
	static anonymousLogin(partnerId, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'anonymousLogin', kparams);
	};
	
	/**
	 * Permanently delete a user. User to delete cannot be an exclusive household master, and cannot be default user.
	 * @return bool
	 */
	static deleteAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'delete', kparams);
	};
	
	/**
	 * Retrieving users&#39; data.
	 * @return KalturaOTTUser
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'get', kparams);
	};
	
	/**
	 * Resend the activation token to a user.
	 * @return KalturaStringValue
	 */
	static getEncryptedUserId(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'getEncryptedUserId', kparams);
	};
	
	/**
	 * Retrieve user by external identifier or username.
	 * @param filter OTTUserFilter Filter request
	 * @return KalturaOTTUserListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('ottuser', 'list', kparams);
	};
	
	/**
	 * User sign-in via a time-expired sign-in PIN.
	 * @param partnerId int Partner Identifier
	 * @param username string user name (optional, default: null)
	 * @param password string password (optional, default: null)
	 * @param extraParams map extra params (optional, default: null)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static login(partnerId, username = null, password = null, extraParams = null, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		kparams.password = password;
		kparams.extraParams = extraParams;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'login', kparams);
	};
	
	/**
	 * User sign-in via a time-expired sign-in PIN.
	 * @param partnerId int Partner Identifier
	 * @param pin string pin code
	 * @param udid string Device UDID (optional, default: null)
	 * @param secret string Additional security parameter to validate the login (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static loginWithPin(partnerId, pin, udid = null, secret = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.pin = pin;
		kparams.udid = udid;
		kparams.secret = secret;
		return new kaltura.RequestBuilder('ottuser', 'loginWithPin', kparams);
	};
	
	/**
	 * Logout the calling user.
	 * @return bool
	 */
	static logout(){
		let kparams = {};
		return new kaltura.RequestBuilder('ottuser', 'logout', kparams);
	};
	
	/**
	 * Returns new Kaltura session (ks) for the user, using the supplied refresh_token (only if it&#39;s valid and not expired).
	 * @param refreshToken string Refresh token
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginSession
	 */
	static refreshSession(refreshToken, udid = null){
		let kparams = {};
		kparams.refreshToken = refreshToken;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('ottuser', 'refreshSession', kparams);
	};
	
	/**
	 * Sign up a new user.
	 * @param partnerId int Partner identifier
	 * @param user OTTUser The user model to add
	 * @param password string password
	 * @return KalturaOTTUser
	 */
	static register(partnerId, user, password){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.user = user;
		kparams.password = password;
		return new kaltura.RequestBuilder('ottuser', 'register', kparams);
	};
	
	/**
	 * Resend the activation token to a user.
	 * @param partnerId int The partner ID
	 * @param username string Username of the user to activate
	 * @return bool
	 */
	static resendActivationToken(partnerId, username){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		return new kaltura.RequestBuilder('ottuser', 'resendActivationToken', kparams);
	};
	
	/**
	 * Send an e-mail with URL to enable the user to set new password.
	 * @param partnerId int Partner Identifier
	 * @param username string user name
	 * @return bool
	 */
	static resetPassword(partnerId, username){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.username = username;
		return new kaltura.RequestBuilder('ottuser', 'resetPassword', kparams);
	};
	
	/**
	 * Renew the user&#39;s password after validating the token that sent as part of URL in e-mail.
	 * @param partnerId int Partner Identifier
	 * @param token string Token that sent by e-mail
	 * @param password string New password
	 * @return KalturaOTTUser
	 */
	static setInitialPassword(partnerId, token, password){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.password = password;
		return new kaltura.RequestBuilder('ottuser', 'setInitialPassword', kparams);
	};
	
	/**
	 * Given a user name and existing password, change to a new password.
	 * @param user OTTUser UserData Object (include basic and dynamic data)
	 * @return KalturaOTTUser
	 */
	static update(user){
		let kparams = {};
		kparams.user = user;
		return new kaltura.RequestBuilder('ottuser', 'update', kparams);
	};
	
	/**
	 * Given a user name and existing password, change to a new password.
	 * @param username string user name
	 * @param oldPassword string old password
	 * @param newPassword string new password
	 * @return bool
	 */
	static updateLoginData(username, oldPassword, newPassword){
		let kparams = {};
		kparams.username = username;
		kparams.oldPassword = oldPassword;
		kparams.newPassword = newPassword;
		return new kaltura.RequestBuilder('ottuser', 'updateLoginData', kparams);
	};
}
module.exports.ottUser = ottUser;


/**
 *Class definition for the Kaltura service: parentalRule.
 * The available service actions:
 * @action disable Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level.
 * @action disableDefault Disables a parental rule that was defined at account level. Disable can be at specific user or household level.
 * @action enable Enable a parental rules for a user.
 * @action list Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 * Association level is also specified in the response.
 */
class parentalRule{
	
	/**
	 * Disables a parental rule that was previously defined by the household master. Disable can be at specific user or household level.
	 * @param ruleId int Rule Identifier
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static disable(ruleId, entityReference){
		let kparams = {};
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'disable', kparams);
	};
	
	/**
	 * Disables a parental rule that was defined at account level. Disable can be at specific user or household level.
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static disableDefault(entityReference){
		let kparams = {};
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'disableDefault', kparams);
	};
	
	/**
	 * Enable a parental rules for a user.
	 * @param ruleId int Rule Identifier
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return bool
	 */
	static enable(ruleId, entityReference){
		let kparams = {};
		kparams.ruleId = ruleId;
		kparams.entityReference = entityReference;
		return new kaltura.RequestBuilder('parentalrule', 'enable', kparams);
	};
	
	/**
	 * Return the parental rules that applies for the user or household. Can include rules that have been associated in account, household, or user level.
 * Association level is also specified in the response.
	 * @param filter ParentalRuleFilter Filter
	 * @return KalturaParentalRuleListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('parentalrule', 'list', kparams);
	};
}
module.exports.parentalRule = parentalRule;


/**
 *Class definition for the Kaltura service: partnerConfiguration.
 * The available service actions:
 * @action update Update Partner Configuration.
 */
class partnerConfiguration{
	
	/**
	 * Update Partner Configuration.
	 * @param configuration PartnerConfiguration Partner Configuration
 * possible configuration type:
 * "configuration": { "value": 0, "partner_configuration_type": { "type": "OSSAdapter", "objectType": "KalturaPartnerConfigurationHolder" },
 * "objectType": "KalturaBillingPartnerConfig"}
	 * @return bool
	 */
	static update(configuration){
		let kparams = {};
		kparams.configuration = configuration;
		return new kaltura.RequestBuilder('partnerconfiguration', 'update', kparams);
	};
}
module.exports.partnerConfiguration = partnerConfiguration;


/**
 *Class definition for the Kaltura service: paymentGatewayProfile.
 * The available service actions:
 * @action add Insert new payment gateway for partner.
 * @action delete Delete payment gateway by payment gateway id.
 * @action generateSharedSecret Generate payment gateway shared secret.
 * @action getConfiguration Gets the Payment Gateway Configuration for the payment gateway identifier given.
 * @action list Returns all payment gateways for partner : id + name.
 * @action update Update payment gateway details.
 */
class paymentGatewayProfile{
	
	/**
	 * Insert new payment gateway for partner.
	 * @param paymentGateway PaymentGatewayProfile Payment Gateway Object
	 * @return KalturaPaymentGatewayProfile
	 */
	static add(paymentGateway){
		let kparams = {};
		kparams.paymentGateway = paymentGateway;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'add', kparams);
	};
	
	/**
	 * Delete payment gateway by payment gateway id.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @return bool
	 */
	static deleteAction(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'delete', kparams);
	};
	
	/**
	 * Generate payment gateway shared secret.
	 * @param paymentGatewayId int Payment gateway identifier
	 * @return KalturaPaymentGatewayProfile
	 */
	static generateSharedSecret(paymentGatewayId){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Gets the Payment Gateway Configuration for the payment gateway identifier given.
	 * @param alias string The payemnt gateway for which to return the registration URL/s for the household. If omitted – return the regisration URL for the household for the default payment gateway
	 * @param intent string Represent the client’s intent for working with the payment gateway. Intent options to be coordinated with the applicable payment gateway adapter
	 * @param extraParameters array Additional parameters to send to the payment gateway adapter
	 * @return KalturaPaymentGatewayConfiguration
	 */
	static getConfiguration(alias, intent, extraParameters){
		let kparams = {};
		kparams.alias = alias;
		kparams.intent = intent;
		kparams.extraParameters = extraParameters;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'getConfiguration', kparams);
	};
	
	/**
	 * Returns all payment gateways for partner : id + name.
	 * @return KalturaPaymentGatewayProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'list', kparams);
	};
	
	/**
	 * Update payment gateway details.
	 * @param paymentGatewayId int Payment Gateway Identifier
	 * @param paymentGateway PaymentGatewayProfile Payment Gateway Object
	 * @return KalturaPaymentGatewayProfile
	 */
	static update(paymentGatewayId, paymentGateway){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.paymentGateway = paymentGateway;
		return new kaltura.RequestBuilder('paymentgatewayprofile', 'update', kparams);
	};
}
module.exports.paymentGatewayProfile = paymentGatewayProfile;


/**
 *Class definition for the Kaltura service: paymentMethodProfile.
 * The available service actions:
 * @action add TBD.
 * @action delete Delete payment method profile.
 * @action list TBD.
 * @action update Update payment method.
 */
class paymentMethodProfile{
	
	/**
	 * TBD.
	 * @param paymentMethod PaymentMethodProfile Payment method to add
	 * @return KalturaPaymentMethodProfile
	 */
	static add(paymentMethod){
		let kparams = {};
		kparams.paymentMethod = paymentMethod;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'add', kparams);
	};
	
	/**
	 * Delete payment method profile.
	 * @param paymentMethodId int Payment method identifier to delete
	 * @return bool
	 */
	static deleteAction(paymentMethodId){
		let kparams = {};
		kparams.paymentMethodId = paymentMethodId;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'delete', kparams);
	};
	
	/**
	 * TBD.
	 * @param filter PaymentMethodProfileFilter Payment gateway method profile filter
	 * @return KalturaPaymentMethodProfileListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'list', kparams);
	};
	
	/**
	 * Update payment method.
	 * @param paymentMethodId int Payment method identifier to update
	 * @param paymentMethod PaymentMethodProfile Payment method to update
	 * @return KalturaPaymentMethodProfile
	 */
	static update(paymentMethodId, paymentMethod){
		let kparams = {};
		kparams.paymentMethodId = paymentMethodId;
		kparams.paymentMethod = paymentMethod;
		return new kaltura.RequestBuilder('paymentmethodprofile', 'update', kparams);
	};
}
module.exports.paymentMethodProfile = paymentMethodProfile;


/**
 *Class definition for the Kaltura service: personalFeed.
 * The available service actions:
 * @action list List user&#39;s feeds.
 * Possible status codes:.
 */
class personalFeed{
	
	/**
	 * List user&#39;s feeds.
 * Possible status codes:.
	 * @param filter PersonalFeedFilter Required sort option to apply for the identified assets. If omitted – will use relevancy.
 * Possible values: relevancy, a_to_z, z_to_a, views, ratings, votes, newest (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaPersonalFeedListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('personalfeed', 'list', kparams);
	};
}
module.exports.personalFeed = personalFeed;


/**
 *Class definition for the Kaltura service: pin.
 * The available service actions:
 * @action get Retrieve the parental or purchase PIN that applies for the household or user. Includes specification of where the PIN was defined at – account, household or user  level.
 * @action update Set the parental or purchase PIN that applies for the user or the household.
 * @action validate Validate a purchase or parental PIN for a user.
 */
class pin{
	
	/**
	 * Retrieve the parental or purchase PIN that applies for the household or user. Includes specification of where the PIN was defined at – account, household or user  level.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return KalturaPin
	 */
	static get(by, type, ruleId = null){
		let kparams = {};
		kparams.by = by;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'get', kparams);
	};
	
	/**
	 * Set the parental or purchase PIN that applies for the user or the household.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param pin Pin PIN to set
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return KalturaPin
	 */
	static update(by, type, pin, ruleId = null){
		let kparams = {};
		kparams.by = by;
		kparams.type = type;
		kparams.pin = pin;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'update', kparams);
	};
	
	/**
	 * Validate a purchase or parental PIN for a user.
	 * @param pin string PIN to validate
	 * @param type string The PIN type to retrieve (enum: KalturaPinType)
	 * @param ruleId int Rule ID - for PIN per rule (MediaCorp): BEO-1923 (optional, default: null)
	 * @return bool
	 */
	static validate(pin, type, ruleId = null){
		let kparams = {};
		kparams.pin = pin;
		kparams.type = type;
		kparams.ruleId = ruleId;
		return new kaltura.RequestBuilder('pin', 'validate', kparams);
	};
}
module.exports.pin = pin;


/**
 *Class definition for the Kaltura service: ppv.
 * The available service actions:
 * @action get Returns ppv object by internal identifier.
 */
class ppv{
	
	/**
	 * Returns ppv object by internal identifier.
	 * @param id int ppv identifier
	 * @return KalturaPpv
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('ppv', 'get', kparams);
	};
}
module.exports.ppv = ppv;


/**
 *Class definition for the Kaltura service: productPrice.
 * The available service actions:
 * @action list Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed).
 */
class productPrice{
	
	/**
	 * Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed).
	 * @param filter ProductPriceFilter Request filter
	 * @return KalturaProductPriceListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('productprice', 'list', kparams);
	};
}
module.exports.productPrice = productPrice;


/**
 *Class definition for the Kaltura service: purchaseSettings.
 * The available service actions:
 * @action get Retrieve the purchase settings.
 * Includes specification of where these settings were defined – account, household or user.
 * @action update Set a purchase PIN for the household or user.
 */
class purchaseSettings{
	
	/**
	 * Retrieve the purchase settings.
 * Includes specification of where these settings were defined – account, household or user.
	 * @param by string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @return KalturaPurchaseSettings
	 */
	static get(by){
		let kparams = {};
		kparams.by = by;
		return new kaltura.RequestBuilder('purchasesettings', 'get', kparams);
	};
	
	/**
	 * Set a purchase PIN for the household or user.
	 * @param entityReference string Reference type to filter by (enum: KalturaEntityReferenceBy)
	 * @param settings PurchaseSettings New settings to apply
	 * @return KalturaPurchaseSettings
	 */
	static update(entityReference, settings){
		let kparams = {};
		kparams.entityReference = entityReference;
		kparams.settings = settings;
		return new kaltura.RequestBuilder('purchasesettings', 'update', kparams);
	};
}
module.exports.purchaseSettings = purchaseSettings;


/**
 *Class definition for the Kaltura service: recommendationProfile.
 * The available service actions:
 * @action add Insert new recommendation engine for partner.
 * @action delete Delete recommendation engine by recommendation engine id.
 * @action generateSharedSecret Generate recommendation engine  shared secret.
 * @action list Returns all recommendation engines for partner.
 * @action update Update recommendation engine details.
 */
class recommendationProfile{
	
	/**
	 * Insert new recommendation engine for partner.
	 * @param recommendationEngine RecommendationProfile recommendation engine Object
	 * @return KalturaRecommendationProfile
	 */
	static add(recommendationEngine){
		let kparams = {};
		kparams.recommendationEngine = recommendationEngine;
		return new kaltura.RequestBuilder('recommendationprofile', 'add', kparams);
	};
	
	/**
	 * Delete recommendation engine by recommendation engine id.
	 * @param id int recommendation engine Identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recommendationprofile', 'delete', kparams);
	};
	
	/**
	 * Generate recommendation engine  shared secret.
	 * @param recommendationEngineId int recommendation engine Identifier
	 * @return KalturaRecommendationProfile
	 */
	static generateSharedSecret(recommendationEngineId){
		let kparams = {};
		kparams.recommendationEngineId = recommendationEngineId;
		return new kaltura.RequestBuilder('recommendationprofile', 'generateSharedSecret', kparams);
	};
	
	/**
	 * Returns all recommendation engines for partner.
	 * @return KalturaRecommendationProfileListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('recommendationprofile', 'list', kparams);
	};
	
	/**
	 * Update recommendation engine details.
	 * @param recommendationEngineId int recommendation engine identifier
	 * @param recommendationEngine RecommendationProfile recommendation engine Object
	 * @return KalturaRecommendationProfile
	 */
	static update(recommendationEngineId, recommendationEngine){
		let kparams = {};
		kparams.recommendationEngineId = recommendationEngineId;
		kparams.recommendationEngine = recommendationEngine;
		return new kaltura.RequestBuilder('recommendationprofile', 'update', kparams);
	};
}
module.exports.recommendationProfile = recommendationProfile;


/**
 *Class definition for the Kaltura service: recording.
 * The available service actions:
 * @action add Issue a record request for a program.
 * @action cancel Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only.
 * @action delete Delete one or more user recording(s). Delete recording can be called only for recordings in status Recorded.
 * @action get Returns recording object by internal identifier.
 * @action list Return a list of recordings for the household with optional filter by status and KSQL.
 * @action protect Protects an existing recording from the cleanup process for the defined protection period.
 */
class recording{
	
	/**
	 * Issue a record request for a program.
	 * @param recording Recording Recording Object
	 * @return KalturaRecording
	 */
	static add(recording){
		let kparams = {};
		kparams.recording = recording;
		return new kaltura.RequestBuilder('recording', 'add', kparams);
	};
	
	/**
	 * Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static cancel(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'cancel', kparams);
	};
	
	/**
	 * Delete one or more user recording(s). Delete recording can be called only for recordings in status Recorded.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'delete', kparams);
	};
	
	/**
	 * Returns recording object by internal identifier.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'get', kparams);
	};
	
	/**
	 * Return a list of recordings for the household with optional filter by status and KSQL.
	 * @param filter RecordingFilter Filter parameters for filtering out the result (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaRecordingListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('recording', 'list', kparams);
	};
	
	/**
	 * Protects an existing recording from the cleanup process for the defined protection period.
	 * @param id int Recording identifier
	 * @return KalturaRecording
	 */
	static protect(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('recording', 'protect', kparams);
	};
}
module.exports.recording = recording;


/**
 *Class definition for the Kaltura service: region.
 * The available service actions:
 * @action list Returns all regions for the partner.
 */
class region{
	
	/**
	 * Returns all regions for the partner.
	 * @param filter RegionFilter 
	 * @return KalturaRegionListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('region', 'list', kparams);
	};
}
module.exports.region = region;


/**
 *Class definition for the Kaltura service: registrySettings.
 * The available service actions:
 * @action list Retrieve the registry settings.
 */
class registrySettings{
	
	/**
	 * Retrieve the registry settings.
	 * @return KalturaRegistrySettingsListResponse
	 */
	static listAction(){
		let kparams = {};
		return new kaltura.RequestBuilder('registrysettings', 'list', kparams);
	};
}
module.exports.registrySettings = registrySettings;


/**
 *Class definition for the Kaltura service: seriesRecording.
 * The available service actions:
 * @action add Issue a record request for a complete season or series.
 * @action cancel Cancel a previously requested series recording. Cancel series recording can be called for recording in status Scheduled or Recording Only.
 * @action cancelByEpgId Cancel EPG recording that was recorded as part of series.
 * @action cancelBySeasonNumber Cancel Season recording epgs that was recorded as part of series.
 * @action delete Delete series recording(s). Delete series recording can be called recordings in any status.
 * @action deleteBySeasonNumber Delete Season recording epgs that was recorded as part of series.
 * @action list Return a list of series recordings for the household with optional filter by status and KSQL.
 */
class seriesRecording{
	
	/**
	 * Issue a record request for a complete season or series.
	 * @param recording SeriesRecording SeriesRecording Object
	 * @return KalturaSeriesRecording
	 */
	static add(recording){
		let kparams = {};
		kparams.recording = recording;
		return new kaltura.RequestBuilder('seriesrecording', 'add', kparams);
	};
	
	/**
	 * Cancel a previously requested series recording. Cancel series recording can be called for recording in status Scheduled or Recording Only.
	 * @param id int Series Recording identifier
	 * @return KalturaSeriesRecording
	 */
	static cancel(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('seriesrecording', 'cancel', kparams);
	};
	
	/**
	 * Cancel EPG recording that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param epgId int epg program identifier
	 * @return KalturaSeriesRecording
	 */
	static cancelByEpgId(id, epgId){
		let kparams = {};
		kparams.id = id;
		kparams.epgId = epgId;
		return new kaltura.RequestBuilder('seriesrecording', 'cancelByEpgId', kparams);
	};
	
	/**
	 * Cancel Season recording epgs that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param seasonNumber int Season Number
	 * @return KalturaSeriesRecording
	 */
	static cancelBySeasonNumber(id, seasonNumber){
		let kparams = {};
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new kaltura.RequestBuilder('seriesrecording', 'cancelBySeasonNumber', kparams);
	};
	
	/**
	 * Delete series recording(s). Delete series recording can be called recordings in any status.
	 * @param id int Series Recording identifier
	 * @return KalturaSeriesRecording
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('seriesrecording', 'delete', kparams);
	};
	
	/**
	 * Delete Season recording epgs that was recorded as part of series.
	 * @param id int Series Recording identifier
	 * @param seasonNumber int Season Number
	 * @return KalturaSeriesRecording
	 */
	static deleteBySeasonNumber(id, seasonNumber){
		let kparams = {};
		kparams.id = id;
		kparams.seasonNumber = seasonNumber;
		return new kaltura.RequestBuilder('seriesrecording', 'deleteBySeasonNumber', kparams);
	};
	
	/**
	 * Return a list of series recordings for the household with optional filter by status and KSQL.
	 * @param filter SeriesRecordingFilter Filter parameters for filtering out the result - support order by only - START_DATE_ASC, START_DATE_DESC, ID_ASC,ID_DESC,SERIES_ID_ASC, SERIES_ID_DESC (optional, default: null)
	 * @return KalturaSeriesRecordingListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('seriesrecording', 'list', kparams);
	};
}
module.exports.seriesRecording = seriesRecording;


/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action get Parses KS.
 * @action switchUser Switching the user in the session by generating a new session for a new user within the same household.
 */
class session{
	
	/**
	 * Parses KS.
	 * @param session string Additional KS to parse, if not passed the user's KS will be parsed (optional, default: null)
	 * @return KalturaSession
	 */
	static get(session = null){
		let kparams = {};
		kparams.session = session;
		return new kaltura.RequestBuilder('session', 'get', kparams);
	};
	
	/**
	 * Switching the user in the session by generating a new session for a new user within the same household.
	 * @param userIdToSwitch string The identifier of the user to change
	 * @return KalturaLoginSession
	 */
	static switchUser(userIdToSwitch){
		let kparams = {};
		kparams.userIdToSwitch = userIdToSwitch;
		return new kaltura.RequestBuilder('session', 'switchUser', kparams);
	};
}
module.exports.session = session;


/**
 *Class definition for the Kaltura service: social.
 * The available service actions:
 * @action get Return the user object with social information according to a provided external social token.
 * @action getByToken Return the user object with social information according to a provided external social token.
 * @action getConfiguration Retrieve the social network’s configuration information.
 * @action login Login using social token.
 * @action merge Connect an existing user in the system to an external social network user.
 * @action register Create a new user in the system using a provided external social token.
 * @action unmerge Disconnect an existing user in the system from its external social network user.
 */
class social{
	
	/**
	 * Return the user object with social information according to a provided external social token.
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static get(type){
		let kparams = {};
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'get', kparams);
	};
	
	/**
	 * Return the user object with social information according to a provided external social token.
	 * @param partnerId int Partner identifier
	 * @param token string Social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static getByToken(partnerId, token, type){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'getByToken', kparams);
	};
	
	/**
	 * Retrieve the social network’s configuration information.
	 * @param partnerId int Partner identifier
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocialConfig
	 */
	static getConfiguration(partnerId, type){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'getConfiguration', kparams);
	};
	
	/**
	 * Login using social token.
	 * @param partnerId int Partner identifier
	 * @param token string Social token
	 * @param type string Social network (enum: KalturaSocialNetwork)
	 * @param udid string Device UDID (optional, default: null)
	 * @return KalturaLoginResponse
	 */
	static login(partnerId, token, type, udid = null){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		kparams.udid = udid;
		return new kaltura.RequestBuilder('social', 'login', kparams);
	};
	
	/**
	 * Connect an existing user in the system to an external social network user.
	 * @param token string social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static merge(token, type){
		let kparams = {};
		kparams.token = token;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'merge', kparams);
	};
	
	/**
	 * Create a new user in the system using a provided external social token.
	 * @param partnerId int Partner identifier
	 * @param token string social token
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static register(partnerId, token, type){
		let kparams = {};
		kparams.partnerId = partnerId;
		kparams.token = token;
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'register', kparams);
	};
	
	/**
	 * Disconnect an existing user in the system from its external social network user.
	 * @param type string Social network type (enum: KalturaSocialNetwork)
	 * @return KalturaSocial
	 */
	static unmerge(type){
		let kparams = {};
		kparams.type = type;
		return new kaltura.RequestBuilder('social', 'unmerge', kparams);
	};
}
module.exports.social = social;


/**
 *Class definition for the Kaltura service: subscription.
 * The available service actions:
 * @action list Returns a list of subscriptions requested by Subscription ID or file ID.
 */
class subscription{
	
	/**
	 * Returns a list of subscriptions requested by Subscription ID or file ID.
	 * @param filter SubscriptionFilter Filter request
	 * @return KalturaSubscriptionListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('subscription', 'list', kparams);
	};
}
module.exports.subscription = subscription;


/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action getCountry Returns country details by the provided IP, if not provided - by the client IP.
 * @action getTime Returns current server timestamp.
 * @action getVersion Returns current server version.
 * @action ping Returns true.
 */
class system{
	
	/**
	 * Returns country details by the provided IP, if not provided - by the client IP.
	 * @param ip string IP (optional, default: null)
	 * @return KalturaCountry
	 */
	static getCountry(ip = null){
		let kparams = {};
		kparams.ip = ip;
		return new kaltura.RequestBuilder('system', 'getCountry', kparams);
	};
	
	/**
	 * Returns current server timestamp.
	 * @return bigint
	 */
	static getTime(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getTime', kparams);
	};
	
	/**
	 * Returns current server version.
	 * @return string
	 */
	static getVersion(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'getVersion', kparams);
	};
	
	/**
	 * Returns true.
	 * @return bool
	 */
	static ping(){
		let kparams = {};
		return new kaltura.RequestBuilder('system', 'ping', kparams);
	};
}
module.exports.system = system;


/**
 *Class definition for the Kaltura service: timeShiftedTvPartnerSettings.
 * The available service actions:
 * @action get Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
 * @action update Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
 */
class timeShiftedTvPartnerSettings{
	
	/**
	 * Retrieve the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @return KalturaTimeShiftedTvPartnerSettings
	 */
	static get(){
		let kparams = {};
		return new kaltura.RequestBuilder('timeshiftedtvpartnersettings', 'get', kparams);
	};
	
	/**
	 * Configure the account’s time-shifted TV settings (catch-up and C-DVR, Trick-play, Start-over).
	 * @param settings TimeShiftedTvPartnerSettings 
	 * @return bool
	 */
	static update(settings){
		let kparams = {};
		kparams.settings = settings;
		return new kaltura.RequestBuilder('timeshiftedtvpartnersettings', 'update', kparams);
	};
}
module.exports.timeShiftedTvPartnerSettings = timeShiftedTvPartnerSettings;


/**
 *Class definition for the Kaltura service: topic.
 * The available service actions:
 * @action delete TBD.
 * @action get TBD.
 * @action list TBD.
 * @action updateStatus TBD.
 */
class topic{
	
	/**
	 * TBD.
	 * @param id int Topic identifier
	 * @return bool
	 */
	static deleteAction(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topic', 'delete', kparams);
	};
	
	/**
	 * TBD.
	 * @param id int topic id
	 * @return KalturaTopic
	 */
	static get(id){
		let kparams = {};
		kparams.id = id;
		return new kaltura.RequestBuilder('topic', 'get', kparams);
	};
	
	/**
	 * TBD.
	 * @param filter TopicFilter Topics filter (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaTopicListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('topic', 'list', kparams);
	};
	
	/**
	 * TBD.
	 * @param id int 
	 * @param automaticIssueNotification string  (enum: KalturaTopicAutomaticIssueNotification)
	 * @return bool
	 */
	static updateStatus(id, automaticIssueNotification){
		let kparams = {};
		kparams.id = id;
		kparams.automaticIssueNotification = automaticIssueNotification;
		return new kaltura.RequestBuilder('topic', 'updateStatus', kparams);
	};
}
module.exports.topic = topic;


/**
 *Class definition for the Kaltura service: transaction.
 * The available service actions:
 * @action getPurchaseSessionId Retrieve the purchase session identifier.
 * @action purchase Purchase specific product or subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
 * @action setWaiver This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date.
 * @action updateStatus Updates a pending purchase transaction state.
 * @action validateReceipt Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user.
 */
class transaction{
	
	/**
	 * Retrieve the purchase session identifier.
	 * @param purchaseSession PurchaseSession Purchase properties
	 * @return bigint
	 */
	static getPurchaseSessionId(purchaseSession){
		let kparams = {};
		kparams.purchaseSession = purchaseSession;
		return new kaltura.RequestBuilder('transaction', 'getPurchaseSessionId', kparams);
	};
	
	/**
	 * Purchase specific product or subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted.
	 * @param purchase Purchase Purchase properties
	 * @return KalturaTransaction
	 */
	static purchase(purchase){
		let kparams = {};
		kparams.purchase = purchase;
		return new kaltura.RequestBuilder('transaction', 'purchase', kparams);
	};
	
	/**
	 * This method shall set the waiver flag on the user entitlement table and the waiver date field to the current date.
	 * @param assetId int Asset identifier
	 * @param transactionType string The transaction type (enum: KalturaTransactionType)
	 * @return bool
	 */
	static setWaiver(assetId, transactionType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.transactionType = transactionType;
		return new kaltura.RequestBuilder('transaction', 'setWaiver', kparams);
	};
	
	/**
	 * Updates a pending purchase transaction state.
	 * @param paymentGatewayId string Payment gateway identifier
	 * @param externalTransactionId string external transaction identifier
	 * @param signature string Security signature to validate the caller is a payment gateway adapter application
	 * @param status TransactionStatus Status properties
	 */
	static updateStatus(paymentGatewayId, externalTransactionId, signature, status){
		let kparams = {};
		kparams.paymentGatewayId = paymentGatewayId;
		kparams.externalTransactionId = externalTransactionId;
		kparams.signature = signature;
		kparams.status = status;
		return new kaltura.RequestBuilder('transaction', 'updateStatus', kparams);
	};
	
	/**
	 * Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user.
	 * @param externalReceipt ExternalReceipt Receipt properties
	 * @return KalturaTransaction
	 */
	static validateReceipt(externalReceipt){
		let kparams = {};
		kparams.externalReceipt = externalReceipt;
		return new kaltura.RequestBuilder('transaction', 'validateReceipt', kparams);
	};
}
module.exports.transaction = transaction;


/**
 *Class definition for the Kaltura service: transactionHistory.
 * The available service actions:
 * @action list Gets user or household transaction history.
 */
class transactionHistory{
	
	/**
	 * Gets user or household transaction history.
	 * @param filter TransactionHistoryFilter Filter by household or user (optional, default: null)
	 * @param pager FilterPager Page size and index (optional, default: null)
	 * @return KalturaBillingTransactionListResponse
	 */
	static listAction(filter = null, pager = null){
		let kparams = {};
		kparams.filter = filter;
		kparams.pager = pager;
		return new kaltura.RequestBuilder('transactionhistory', 'list', kparams);
	};
}
module.exports.transactionHistory = transactionHistory;


/**
 *Class definition for the Kaltura service: userAssetRule.
 * The available service actions:
 * @action list Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset.
 */
class userAssetRule{
	
	/**
	 * Retrieve all the rules (parental, geo, device or user-type) that applies for this user and asset.
	 * @param filter UserAssetRuleFilter Filter
	 * @return KalturaUserAssetRuleListResponse
	 */
	static listAction(filter){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('userassetrule', 'list', kparams);
	};
}
module.exports.userAssetRule = userAssetRule;


/**
 *Class definition for the Kaltura service: userAssetsListItem.
 * The available service actions:
 * @action add Adds a new item to user’s private asset list.
 * @action delete Deletes an item from user’s private asset list.
 * @action get Get an item from user’s private asset list.
 */
class userAssetsListItem{
	
	/**
	 * Adds a new item to user’s private asset list.
	 * @param userAssetsListItem UserAssetsListItem A list item to add
	 * @return KalturaUserAssetsListItem
	 */
	static add(userAssetsListItem){
		let kparams = {};
		kparams.userAssetsListItem = userAssetsListItem;
		return new kaltura.RequestBuilder('userassetslistitem', 'add', kparams);
	};
	
	/**
	 * Deletes an item from user’s private asset list.
	 * @param assetId string Asset id to delete
	 * @param listType string Asset list type to delete from (enum: KalturaUserAssetsListType)
	 * @return bool
	 */
	static deleteAction(assetId, listType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.listType = listType;
		return new kaltura.RequestBuilder('userassetslistitem', 'delete', kparams);
	};
	
	/**
	 * Get an item from user’s private asset list.
	 * @param assetId string Asset id to get
	 * @param listType string Asset list type to get from (enum: KalturaUserAssetsListType)
	 * @param itemType string item type to get (enum: KalturaUserAssetsListItemType)
	 * @return KalturaUserAssetsListItem
	 */
	static get(assetId, listType, itemType){
		let kparams = {};
		kparams.assetId = assetId;
		kparams.listType = listType;
		kparams.itemType = itemType;
		return new kaltura.RequestBuilder('userassetslistitem', 'get', kparams);
	};
}
module.exports.userAssetsListItem = userAssetsListItem;


/**
 *Class definition for the Kaltura service: userLoginPin.
 * The available service actions:
 * @action add Generate a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
 * @action delete Immediately expire all active login-PINs for a user.
 * @action deleteAll Immediately expire all active login-PINs for a user.
 * @action update Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
 */
class userLoginPin{
	
	/**
	 * Generate a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param secret string Additional security parameter for optional enhanced security (optional, default: null)
	 * @return KalturaUserLoginPin
	 */
	static add(secret = null){
		let kparams = {};
		kparams.secret = secret;
		return new kaltura.RequestBuilder('userloginpin', 'add', kparams);
	};
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 * @param pinCode string Login pin code to expire
	 * @return bool
	 */
	static deleteAction(pinCode){
		let kparams = {};
		kparams.pinCode = pinCode;
		return new kaltura.RequestBuilder('userloginpin', 'delete', kparams);
	};
	
	/**
	 * Immediately expire all active login-PINs for a user.
	 * @return bool
	 */
	static deleteAll(){
		let kparams = {};
		return new kaltura.RequestBuilder('userloginpin', 'deleteAll', kparams);
	};
	
	/**
	 * Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN.
	 * @param pinCode string Device Identifier
	 * @param secret string Additional security parameter to validate the login (optional, default: null)
	 * @return KalturaUserLoginPin
	 */
	static update(pinCode, secret = null){
		let kparams = {};
		kparams.pinCode = pinCode;
		kparams.secret = secret;
		return new kaltura.RequestBuilder('userloginpin', 'update', kparams);
	};
}
module.exports.userLoginPin = userLoginPin;


/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action list Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
 */
class userRole{
	
	/**
	 * Retrieving user roles by identifiers, if filter is empty, returns all partner roles.
	 * @param filter UserRoleFilter  (optional, default: null)
	 * @return KalturaUserRoleListResponse
	 */
	static listAction(filter = null){
		let kparams = {};
		kparams.filter = filter;
		return new kaltura.RequestBuilder('userrole', 'list', kparams);
	};
}
module.exports.userRole = userRole;

