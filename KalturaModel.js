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
 *
 */
class Announcement extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncement';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string 
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getEnabled() {
	 	return this.enabled;
	 }
	
	/**
	 * @param enabled bool 
	 */
	 setEnabled(enabled) {
	 	this.enabled = enabled;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime int 
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTimezone() {
	 	return this.timezone;
	 }
	
	/**
	 * @param timezone string 
	 */
	 setTimezone(timezone) {
	 	this.timezone = timezone;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecipients() {
	 	return this.recipients;
	 }
	
	/**
	 * @param recipients string 
	 */
	 setRecipients(recipients) {
	 	this.recipients = recipients;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
}
module.exports.Announcement = Announcement;

/**
 *
 */
class Filter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy int 
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.Filter = Filter;

/**
 *
 */
class AnnouncementFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncementFilter';
	}
}
module.exports.AnnouncementFilter = AnnouncementFilter;

/**
 *
 */
class FilterPager extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilterPager';
	}
	
	/**
	 * The number of objects to retrieve. Possible range 1 ≤ value ≤ 50. If omitted or value &lt; 1 - will be set to 25. If a value &gt; 50 provided – will be set to 50
	 * @return int
	 */
	 getPageSize() {
	 	return this.pageSize;
	 }
	
	/**
	 * @param pageSize int The number of objects to retrieve. Possible range 1 ≤ value ≤ 50. If omitted or value &lt; 1 - will be set to 25. If a value &gt; 50 provided – will be set to 50
	 */
	 setPageSize(pageSize) {
	 	this.pageSize = pageSize;
	 }
	
	/**
	 * The page number for which {pageSize} of objects should be retrieved
	 * @return int
	 */
	 getPageIndex() {
	 	return this.pageIndex;
	 }
	
	/**
	 * @param pageIndex int The page number for which {pageSize} of objects should be retrieved
	 */
	 setPageIndex(pageIndex) {
	 	this.pageIndex = pageIndex;
	 }
}
module.exports.FilterPager = FilterPager;

/**
 *
 */
class ListResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaListResponse';
	}
	
	/**
	 * Total items
	 * @return int
	 */
	 getTotalCount() {
	 	return this.totalCount;
	 }
	
	/**
	 * @param totalCount int Total items
	 */
	 setTotalCount(totalCount) {
	 	this.totalCount = totalCount;
	 }
}
module.exports.ListResponse = ListResponse;

/**
 *
 */
class RegionalChannel extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionalChannel';
	}
	
	/**
	 * The identifier of the linear media representing the channel
	 * @return int
	 */
	 getLinearChannelId() {
	 	return this.linearChannelId;
	 }
	
	/**
	 * @param linearChannelId int The identifier of the linear media representing the channel
	 */
	 setLinearChannelId(linearChannelId) {
	 	this.linearChannelId = linearChannelId;
	 }
	
	/**
	 * The number of the channel
	 * @return int
	 */
	 getChannelNumber() {
	 	return this.channelNumber;
	 }
	
	/**
	 * @param channelNumber int The number of the channel
	 */
	 setChannelNumber(channelNumber) {
	 	this.channelNumber = channelNumber;
	 }
}
module.exports.RegionalChannel = RegionalChannel;

/**
 *
 */
class Region extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegion';
	}
	
	/**
	 * Region identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int Region identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Region name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Region name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Region external identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Region external identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Indicates whether this is the default region for the partner
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Indicates whether this is the default region for the partner
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * List of associated linear channels
	 * @return array
	 */
	 getLinearChannels() {
	 	return this.linearChannels;
	 }
	
	/**
	 * @param linearChannels array List of associated linear channels
	 */
	 setLinearChannels(linearChannels) {
	 	this.linearChannels = linearChannels;
	 }
}
module.exports.Region = Region;

/**
 *
 */
class RegionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionListResponse';
	}
	
	/**
	 * A list of regions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of regions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RegionListResponse = RegionListResponse;

/**
 *
 */
class UserAssetRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRule';
	}
	
	/**
	 * Unique rule identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Rule type - possible values: Rule type – Parental, Geo, UserType, Device
	 * @return string
	 */
	 getRuleType() {
	 	return this.ruleType;
	 }
	
	/**
	 * @param ruleType string Rule type - possible values: Rule type – Parental, Geo, UserType, Device
	 */
	 setRuleType(ruleType) {
	 	this.ruleType = ruleType;
	 }
	
	/**
	 * Rule display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Rule display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Additional description for the specific rule
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Additional description for the specific rule
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.UserAssetRule = UserAssetRule;

/**
 *
 */
class UserAssetRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRuleListResponse';
	}
	
	/**
	 * A list of generic rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of generic rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserAssetRuleListResponse = UserAssetRuleListResponse;

/**
 *
 */
class Value extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.Value = Value;

/**
 *
 */
class LongValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLongValue';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.LongValue = LongValue;

/**
 *
 */
class DoubleValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDoubleValue';
	}
	
	/**
	 * 
	 * @return float
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value float 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.DoubleValue = DoubleValue;

/**
 *
 */
class BooleanValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBooleanValue';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value bool 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.BooleanValue = BooleanValue;

/**
 *
 */
class IntegerValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegerValue';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.IntegerValue = IntegerValue;

/**
 *
 */
class StringValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.StringValue = StringValue;

/**
 *
 */
class CDNAdapterProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNAdapterProfile';
	}
	
	/**
	 * CDN adapter identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * CDNR adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string CDNR adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * CDN adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool CDN adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * CDN adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string CDN adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * CDN adapter base URL
	 * @return string
	 */
	 getBaseUrl() {
	 	return this.baseUrl;
	 }
	
	/**
	 * @param baseUrl string CDN adapter base URL
	 */
	 setBaseUrl(baseUrl) {
	 	this.baseUrl = baseUrl;
	 }
	
	/**
	 * CDN adapter settings
	 * @return map
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings map CDN adapter settings
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * CDN adapter alias
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string CDN adapter alias
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * CDN shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.CDNAdapterProfile = CDNAdapterProfile;

/**
 *
 */
class CDNAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNAdapterProfileListResponse';
	}
	
	/**
	 * Adapters
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Adapters
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CDNAdapterProfileListResponse = CDNAdapterProfileListResponse;

/**
 *
 */
class SlimAsset extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSlimAsset';
	}
	
	/**
	 * Internal identifier of the asset
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Internal identifier of the asset
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * The type of the asset. Possible values: media, recording, epg
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the asset. Possible values: media, recording, epg
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.SlimAsset = SlimAsset;

/**
 *
 */
class BaseOTTUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseOTTUser';
	}
	
	/**
	 * User identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Username
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string Username
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * First name
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string First name
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * Last name
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string Last name
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
}
module.exports.BaseOTTUser = BaseOTTUser;

/**
 *
 */
class Country extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountry';
	}
	
	/**
	 * Country identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Country name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Country name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Country code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Country code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.Country = Country;

/**
 *
 */
class OTTUserType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserType';
	}
	
	/**
	 * User type identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * User type description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string User type description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.OTTUserType = OTTUserType;

/**
 *
 */
class OTTUser extends BaseOTTUser{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUser';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * Email
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string Email
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * Address
	 * @return string
	 */
	 getAddress() {
	 	return this.address;
	 }
	
	/**
	 * @param address string Address
	 */
	 setAddress(address) {
	 	this.address = address;
	 }
	
	/**
	 * City
	 * @return string
	 */
	 getCity() {
	 	return this.city;
	 }
	
	/**
	 * @param city string City
	 */
	 setCity(city) {
	 	this.city = city;
	 }
	
	/**
	 * Country
	 * @return Country
	 */
	 getCountry() {
	 	return this.country;
	 }
	
	/**
	 * @param country Country Country
	 */
	 setCountry(country) {
	 	this.country = country;
	 }
	
	/**
	 * Zip code
	 * @return string
	 */
	 getZip() {
	 	return this.zip;
	 }
	
	/**
	 * @param zip string Zip code
	 */
	 setZip(zip) {
	 	this.zip = zip;
	 }
	
	/**
	 * Phone
	 * @return string
	 */
	 getPhone() {
	 	return this.phone;
	 }
	
	/**
	 * @param phone string Phone
	 */
	 setPhone(phone) {
	 	this.phone = phone;
	 }
	
	/**
	 * Affiliate code
	 * @return string
	 */
	 getAffiliateCode() {
	 	return this.affiliateCode;
	 }
	
	/**
	 * @param affiliateCode string Affiliate code
	 */
	 setAffiliateCode(affiliateCode) {
	 	this.affiliateCode = affiliateCode;
	 }
	
	/**
	 * External user identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External user identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * User type
	 * @return OTTUserType
	 */
	 getUserType() {
	 	return this.userType;
	 }
	
	/**
	 * @param userType OTTUserType User type
	 */
	 setUserType(userType) {
	 	this.userType = userType;
	 }
	
	/**
	 * Dynamic data
	 * @return map
	 */
	 getDynamicData() {
	 	return this.dynamicData;
	 }
	
	/**
	 * @param dynamicData map Dynamic data
	 */
	 setDynamicData(dynamicData) {
	 	this.dynamicData = dynamicData;
	 }
	
	/**
	 * Is the user the household master
	 * @return bool
	 */
	 getIsHouseholdMaster() {
	 	return this.isHouseholdMaster;
	 }
	
	/**
	 * Suspention state
	 * @return string
	 */
	 getSuspentionState() {
	 	return this.suspentionState;
	 }
	
	/**
	 * User state
	 * @return string
	 */
	 getUserState() {
	 	return this.userState;
	 }
}
module.exports.OTTUser = OTTUser;

/**
 *
 */
class BookmarkPlayerData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkPlayerData';
	}
	
	/**
	 * Action
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string Action
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * Average Bitrate
	 * @return int
	 */
	 getAverageBitrate() {
	 	return this.averageBitrate;
	 }
	
	/**
	 * @param averageBitrate int Average Bitrate
	 */
	 setAverageBitrate(averageBitrate) {
	 	this.averageBitrate = averageBitrate;
	 }
	
	/**
	 * Total Bitrate
	 * @return int
	 */
	 getTotalBitrate() {
	 	return this.totalBitrate;
	 }
	
	/**
	 * @param totalBitrate int Total Bitrate
	 */
	 setTotalBitrate(totalBitrate) {
	 	this.totalBitrate = totalBitrate;
	 }
	
	/**
	 * Current Bitrate
	 * @return int
	 */
	 getCurrentBitrate() {
	 	return this.currentBitrate;
	 }
	
	/**
	 * @param currentBitrate int Current Bitrate
	 */
	 setCurrentBitrate(currentBitrate) {
	 	this.currentBitrate = currentBitrate;
	 }
	
	/**
	 * Identifier of the file
	 * @return int
	 */
	 getFileId() {
	 	return this.fileId;
	 }
	
	/**
	 * @param fileId int Identifier of the file
	 */
	 setFileId(fileId) {
	 	this.fileId = fileId;
	 }
}
module.exports.BookmarkPlayerData = BookmarkPlayerData;

/**
 *
 */
class Bookmark extends SlimAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmark';
	}
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The position of the user in the specific asset (in seconds)
	 * @return int
	 */
	 getPosition() {
	 	return this.position;
	 }
	
	/**
	 * @param position int The position of the user in the specific asset (in seconds)
	 */
	 setPosition(position) {
	 	this.position = position;
	 }
	
	/**
	 * Indicates who is the owner of this position
	 * @return string
	 */
	 getPositionOwner() {
	 	return this.positionOwner;
	 }
	
	/**
	 * @param positionOwner string Indicates who is the owner of this position
	 */
	 setPositionOwner(positionOwner) {
	 	this.positionOwner = positionOwner;
	 }
	
	/**
	 * Specifies whether the user&#39;s current position exceeded 95% of the duration
	 * @return bool
	 */
	 getFinishedWatching() {
	 	return this.finishedWatching;
	 }
	
	/**
	 * @param finishedWatching bool Specifies whether the user&#39;s current position exceeded 95% of the duration
	 */
	 setFinishedWatching(finishedWatching) {
	 	this.finishedWatching = finishedWatching;
	 }
	
	/**
	 * Insert only player data
	 * @return BookmarkPlayerData
	 */
	 getPlayerData() {
	 	return this.playerData;
	 }
	
	/**
	 * @param playerData BookmarkPlayerData Insert only player data
	 */
	 setPlayerData(playerData) {
	 	this.playerData = playerData;
	 }
}
module.exports.Bookmark = Bookmark;

/**
 *
 */
class BookmarkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BookmarkListResponse = BookmarkListResponse;

/**
 *
 */
class StringValueArray extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringValueArray';
	}
	
	/**
	 * List of string values
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array List of string values
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.StringValueArray = StringValueArray;

/**
 *
 */
class MediaImage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaImage';
	}
	
	/**
	 * Image aspect ratio
	 * @return string
	 */
	 getRatio() {
	 	return this.ratio;
	 }
	
	/**
	 * @param ratio string Image aspect ratio
	 */
	 setRatio(ratio) {
	 	this.ratio = ratio;
	 }
	
	/**
	 * Image width
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int Image width
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * Image height
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int Image height
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * Image URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Image URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Image Version
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version int Image Version
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
	
	/**
	 * Image ID
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Determined whether image was taken from default configuration or not
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Determined whether image was taken from default configuration or not
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
}
module.exports.MediaImage = MediaImage;

/**
 *
 */
class MediaFile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFile';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Unique identifier for the asset
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * File unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Device types as defined in the system
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Device types as defined in the system
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * URL of the media file to be played
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL of the media file to be played
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Duration of the media file
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int Duration of the media file
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
	
	/**
	 * External identifier for the media file
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External identifier for the media file
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
}
module.exports.MediaFile = MediaFile;

/**
 *
 */
class BuzzScore extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBuzzScore';
	}
	
	/**
	 * Normalized average score
	 * @return float
	 */
	 getNormalizedAvgScore() {
	 	return this.normalizedAvgScore;
	 }
	
	/**
	 * @param normalizedAvgScore float Normalized average score
	 */
	 setNormalizedAvgScore(normalizedAvgScore) {
	 	this.normalizedAvgScore = normalizedAvgScore;
	 }
	
	/**
	 * Update date
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * @param updateDate int Update date
	 */
	 setUpdateDate(updateDate) {
	 	this.updateDate = updateDate;
	 }
	
	/**
	 * Average score
	 * @return float
	 */
	 getAvgScore() {
	 	return this.avgScore;
	 }
	
	/**
	 * @param avgScore float Average score
	 */
	 setAvgScore(avgScore) {
	 	this.avgScore = avgScore;
	 }
}
module.exports.BuzzScore = BuzzScore;

/**
 *
 */
class AssetStatistics extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatistics';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Unique identifier for the asset
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Total number of likes for this asset
	 * @return int
	 */
	 getLikes() {
	 	return this.likes;
	 }
	
	/**
	 * @param likes int Total number of likes for this asset
	 */
	 setLikes(likes) {
	 	this.likes = likes;
	 }
	
	/**
	 * Total number of views for this asset
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * @param views int Total number of views for this asset
	 */
	 setViews(views) {
	 	this.views = views;
	 }
	
	/**
	 * Number of people that rated the asset
	 * @return int
	 */
	 getRatingCount() {
	 	return this.ratingCount;
	 }
	
	/**
	 * @param ratingCount int Number of people that rated the asset
	 */
	 setRatingCount(ratingCount) {
	 	this.ratingCount = ratingCount;
	 }
	
	/**
	 * Average rating for the asset
	 * @return float
	 */
	 getRating() {
	 	return this.rating;
	 }
	
	/**
	 * @param rating float Average rating for the asset
	 */
	 setRating(rating) {
	 	this.rating = rating;
	 }
	
	/**
	 * Buzz score
	 * @return BuzzScore
	 */
	 getBuzzScore() {
	 	return this.buzzScore;
	 }
	
	/**
	 * @param buzzScore BuzzScore Buzz score
	 */
	 setBuzzScore(buzzScore) {
	 	this.buzzScore = buzzScore;
	 }
}
module.exports.AssetStatistics = AssetStatistics;

/**
 *
 */
class BaseAssetInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseAssetInfo';
	}
	
	/**
	 * Unique identifier for the asset
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Identifies the asset type (EPG, Movie, TV Series, etc).
 * Possible values: 0 – EPG linear programs, or any asset type ID according to the asset types IDs defined in the system
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int Identifies the asset type (EPG, Movie, TV Series, etc).
 * Possible values: 0 – EPG linear programs, or any asset type ID according to the asset types IDs defined in the system
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Asset name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Asset name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Asset description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Asset description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Collection of images details that can be used to represent this asset
	 * @return array
	 */
	 getImages() {
	 	return this.images;
	 }
	
	/**
	 * @param images array Collection of images details that can be used to represent this asset
	 */
	 setImages(images) {
	 	this.images = images;
	 }
	
	/**
	 * Files
	 * @return array
	 */
	 getMediaFiles() {
	 	return this.mediaFiles;
	 }
	
	/**
	 * @param mediaFiles array Files
	 */
	 setMediaFiles(mediaFiles) {
	 	this.mediaFiles = mediaFiles;
	 }
}
module.exports.BaseAssetInfo = BaseAssetInfo;

/**
 *
 */
class Asset extends BaseAssetInfo{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAsset';
	}
	
	/**
	 * Dynamic collection of key-value pairs according to the String Meta defined in the system
	 * @return map
	 */
	 getMetas() {
	 	return this.metas;
	 }
	
	/**
	 * @param metas map Dynamic collection of key-value pairs according to the String Meta defined in the system
	 */
	 setMetas(metas) {
	 	this.metas = metas;
	 }
	
	/**
	 * Dynamic collection of key-value pairs according to the Tag Types defined in the system
	 * @return map
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags map Dynamic collection of key-value pairs according to the Tag Types defined in the system
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Date and time represented as epoch. For VOD – since when the asset is available in the catalog. For EPG/Linear – when the program is aired (can be in the future)
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Date and time represented as epoch. For VOD – since when the asset is available in the catalog. For EPG/Linear – when the program is aired (can be in the future)
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * Date and time represented as epoch. For VOD – till when the asset be available in the catalog. For EPG/Linear – program end time and date
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int Date and time represented as epoch. For VOD – till when the asset be available in the catalog. For EPG/Linear – program end time and date
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Enable cDVR
	 * @return bool
	 */
	 getEnableCdvr() {
	 	return this.enableCdvr;
	 }
	
	/**
	 * @param enableCdvr bool Enable cDVR
	 */
	 setEnableCdvr(enableCdvr) {
	 	this.enableCdvr = enableCdvr;
	 }
	
	/**
	 * Enable catch-up
	 * @return bool
	 */
	 getEnableCatchUp() {
	 	return this.enableCatchUp;
	 }
	
	/**
	 * @param enableCatchUp bool Enable catch-up
	 */
	 setEnableCatchUp(enableCatchUp) {
	 	this.enableCatchUp = enableCatchUp;
	 }
	
	/**
	 * Enable start over
	 * @return bool
	 */
	 getEnableStartOver() {
	 	return this.enableStartOver;
	 }
	
	/**
	 * @param enableStartOver bool Enable start over
	 */
	 setEnableStartOver(enableStartOver) {
	 	this.enableStartOver = enableStartOver;
	 }
	
	/**
	 * Enable trick-play
	 * @return bool
	 */
	 getEnableTrickPlay() {
	 	return this.enableTrickPlay;
	 }
	
	/**
	 * @param enableTrickPlay bool Enable trick-play
	 */
	 setEnableTrickPlay(enableTrickPlay) {
	 	this.enableTrickPlay = enableTrickPlay;
	 }
}
module.exports.Asset = Asset;

/**
 *
 */
class AssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetListResponse = AssetListResponse;

/**
 *
 */
class ProgramAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProgramAsset';
	}
	
	/**
	 * EPG channel identifier
	 * @return int
	 */
	 getEpgChannelId() {
	 	return this.epgChannelId;
	 }
	
	/**
	 * @param epgChannelId int EPG channel identifier
	 */
	 setEpgChannelId(epgChannelId) {
	 	this.epgChannelId = epgChannelId;
	 }
	
	/**
	 * EPG identifier
	 * @return string
	 */
	 getEpgId() {
	 	return this.epgId;
	 }
	
	/**
	 * @param epgId string EPG identifier
	 */
	 setEpgId(epgId) {
	 	this.epgId = epgId;
	 }
	
	/**
	 * Ralated media identifier
	 * @return int
	 */
	 getRelatedMediaId() {
	 	return this.relatedMediaId;
	 }
	
	/**
	 * @param relatedMediaId int Ralated media identifier
	 */
	 setRelatedMediaId(relatedMediaId) {
	 	this.relatedMediaId = relatedMediaId;
	 }
	
	/**
	 * Unique identifier for the program
	 * @return string
	 */
	 getCrid() {
	 	return this.crid;
	 }
	
	/**
	 * @param crid string Unique identifier for the program
	 */
	 setCrid(crid) {
	 	this.crid = crid;
	 }
}
module.exports.ProgramAsset = ProgramAsset;

/**
 *
 */
class MediaAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaAsset';
	}
	
	/**
	 * Date and time represented as epoch
	 * @return int
	 */
	 getSystemStartDate() {
	 	return this.systemStartDate;
	 }
	
	/**
	 * @param systemStartDate int Date and time represented as epoch
	 */
	 setSystemStartDate(systemStartDate) {
	 	this.systemStartDate = systemStartDate;
	 }
	
	/**
	 * Date and time represented as epoch
	 * @return int
	 */
	 getSystemFinalDate() {
	 	return this.systemFinalDate;
	 }
	
	/**
	 * @param systemFinalDate int Date and time represented as epoch
	 */
	 setSystemFinalDate(systemFinalDate) {
	 	this.systemFinalDate = systemFinalDate;
	 }
	
	/**
	 * External identifiers
	 * @return string
	 */
	 getExternalIds() {
	 	return this.externalIds;
	 }
	
	/**
	 * @param externalIds string External identifiers
	 */
	 setExternalIds(externalIds) {
	 	this.externalIds = externalIds;
	 }
	
	/**
	 * Catch-up buffer
	 * @return int
	 */
	 getCatchUpBuffer() {
	 	return this.catchUpBuffer;
	 }
	
	/**
	 * @param catchUpBuffer int Catch-up buffer
	 */
	 setCatchUpBuffer(catchUpBuffer) {
	 	this.catchUpBuffer = catchUpBuffer;
	 }
	
	/**
	 * Trick-play buffer
	 * @return int
	 */
	 getTrickPlayBuffer() {
	 	return this.trickPlayBuffer;
	 }
	
	/**
	 * @param trickPlayBuffer int Trick-play buffer
	 */
	 setTrickPlayBuffer(trickPlayBuffer) {
	 	this.trickPlayBuffer = trickPlayBuffer;
	 }
	
	/**
	 * Enable Recording playback for non entitled channel
	 * @return bool
	 */
	 getEnableRecordingPlaybackNonEntitledChannel() {
	 	return this.enableRecordingPlaybackNonEntitledChannel;
	 }
	
	/**
	 * Enable Recording playback for non existing channel
	 * @return bool
	 */
	 getEnableRecordingPlaybackNonExistingChannel() {
	 	return this.enableRecordingPlaybackNonExistingChannel;
	 }
}
module.exports.MediaAsset = MediaAsset;

/**
 *
 */
class AssetComment extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetComment';
	}
	
	/**
	 * Comment ID
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int Comment ID
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string Asset identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Asset Type
	 * @return string
	 */
	 getAssetType() {
	 	return this.assetType;
	 }
	
	/**
	 * @param assetType string Asset Type
	 */
	 setAssetType(assetType) {
	 	this.assetType = assetType;
	 }
	
	/**
	 * Header
	 * @return string
	 */
	 getHeader() {
	 	return this.header;
	 }
	
	/**
	 * @param header string Header
	 */
	 setHeader(header) {
	 	this.header = header;
	 }
	
	/**
	 * Sub Header
	 * @return string
	 */
	 getSubHeader() {
	 	return this.subHeader;
	 }
	
	/**
	 * @param subHeader string Sub Header
	 */
	 setSubHeader(subHeader) {
	 	this.subHeader = subHeader;
	 }
	
	/**
	 * Text
	 * @return string
	 */
	 getText() {
	 	return this.text;
	 }
	
	/**
	 * @param text string Text
	 */
	 setText(text) {
	 	this.text = text;
	 }
	
	/**
	 * CreateDate
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * @param createDate int CreateDate
	 */
	 setCreateDate(createDate) {
	 	this.createDate = createDate;
	 }
	
	/**
	 * Writer
	 * @return string
	 */
	 getWriter() {
	 	return this.writer;
	 }
	
	/**
	 * @param writer string Writer
	 */
	 setWriter(writer) {
	 	this.writer = writer;
	 }
}
module.exports.AssetComment = AssetComment;

/**
 *
 */
class AssetCommentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCommentListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetCommentListResponse = AssetCommentListResponse;

/**
 *
 */
class SeriesRecording extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecording';
	}
	
	/**
	 * Kaltura unique ID representing the series recording identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Kaltura EpgId
	 * @return int
	 */
	 getEpgId() {
	 	return this.epgId;
	 }
	
	/**
	 * @param epgId int Kaltura EpgId
	 */
	 setEpgId(epgId) {
	 	this.epgId = epgId;
	 }
	
	/**
	 * Kaltura ChannelId
	 * @return int
	 */
	 getChannelId() {
	 	return this.channelId;
	 }
	
	/**
	 * @param channelId int Kaltura ChannelId
	 */
	 setChannelId(channelId) {
	 	this.channelId = channelId;
	 }
	
	/**
	 * Kaltura SeriesId
	 * @return string
	 */
	 getSeriesId() {
	 	return this.seriesId;
	 }
	
	/**
	 * @param seriesId string Kaltura SeriesId
	 */
	 setSeriesId(seriesId) {
	 	this.seriesId = seriesId;
	 }
	
	/**
	 * Kaltura SeasonNumber
	 * @return int
	 */
	 getSeasonNumber() {
	 	return this.seasonNumber;
	 }
	
	/**
	 * @param seasonNumber int Kaltura SeasonNumber
	 */
	 setSeasonNumber(seasonNumber) {
	 	this.seasonNumber = seasonNumber;
	 }
	
	/**
	 * Recording Type: single/series/season
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Recording Type: single/series/season
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Specifies when was the series recording created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the series recording last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
	
	/**
	 * List of the season numbers to exclude
	 * @return array
	 */
	 getExcludedSeasons() {
	 	return this.excludedSeasons;
	 }
}
module.exports.SeriesRecording = SeriesRecording;

/**
 *
 */
class SeriesRecordingListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecordingListResponse';
	}
	
	/**
	 * Series Recordings
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Series Recordings
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SeriesRecordingListResponse = SeriesRecordingListResponse;

/**
 *
 */
class PremiumService extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPremiumService';
	}
	
	/**
	 * Service identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Service name / description
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Service name / description
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.PremiumService = PremiumService;

/**
 *
 */
class HouseholdPremiumService extends PremiumService{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPremiumService';
	}
}
module.exports.HouseholdPremiumService = HouseholdPremiumService;

/**
 *
 */
class HouseholdPremiumServiceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPremiumServiceListResponse';
	}
	
	/**
	 * A list of premium services
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of premium services
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPremiumServiceListResponse = HouseholdPremiumServiceListResponse;

/**
 *
 */
class CDVRAdapterProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDVRAdapterProfile';
	}
	
	/**
	 * C-DVR adapter identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * C-DVR adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string C-DVR adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * C-DVR adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool C-DVR adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * C-DVR adapter adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string C-DVR adapter adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * C-DVR adapter extra parameters
	 * @return map
	 */
	 getSettings() {
	 	return this.settings;
	 }
	
	/**
	 * @param settings map C-DVR adapter extra parameters
	 */
	 setSettings(settings) {
	 	this.settings = settings;
	 }
	
	/**
	 * C-DVR adapter external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string C-DVR adapter external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * C-DVR shared secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
	
	/**
	 * Indicates whether the C-DVR adapter supports dynamic URLs
	 * @return bool
	 */
	 getDynamicLinksSupport() {
	 	return this.dynamicLinksSupport;
	 }
	
	/**
	 * @param dynamicLinksSupport bool Indicates whether the C-DVR adapter supports dynamic URLs
	 */
	 setDynamicLinksSupport(dynamicLinksSupport) {
	 	this.dynamicLinksSupport = dynamicLinksSupport;
	 }
}
module.exports.CDVRAdapterProfile = CDVRAdapterProfile;

/**
 *
 */
class CDVRAdapterProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDVRAdapterProfileListResponse';
	}
	
	/**
	 * C-DVR adapter profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array C-DVR adapter profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.CDVRAdapterProfileListResponse = CDVRAdapterProfileListResponse;

/**
 *
 */
class ExportTask extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTask';
	}
	
	/**
	 * Task identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Alias for the task used to solicit an export using API
	 * @return string
	 */
	 getAlias() {
	 	return this.alias;
	 }
	
	/**
	 * @param alias string Alias for the task used to solicit an export using API
	 */
	 setAlias(alias) {
	 	this.alias = alias;
	 }
	
	/**
	 * Task display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Task display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The data type exported in this task
	 * @return string
	 */
	 getDataType() {
	 	return this.dataType;
	 }
	
	/**
	 * @param dataType string The data type exported in this task
	 */
	 setDataType(dataType) {
	 	this.dataType = dataType;
	 }
	
	/**
	 * Filter to apply on the export, utilize KSQL.
 * Note: KSQL currently applies to media assets only. It cannot be used for USERS filtering
	 * @return string
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter string Filter to apply on the export, utilize KSQL.
 * Note: KSQL currently applies to media assets only. It cannot be used for USERS filtering
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * Type of export batch – full or incremental
	 * @return string
	 */
	 getExportType() {
	 	return this.exportType;
	 }
	
	/**
	 * @param exportType string Type of export batch – full or incremental
	 */
	 setExportType(exportType) {
	 	this.exportType = exportType;
	 }
	
	/**
	 * How often the export should occur, reasonable minimum threshold should apply, configurable in minutes
	 * @return int
	 */
	 getFrequency() {
	 	return this.frequency;
	 }
	
	/**
	 * @param frequency int How often the export should occur, reasonable minimum threshold should apply, configurable in minutes
	 */
	 setFrequency(frequency) {
	 	this.frequency = frequency;
	 }
	
	/**
	 * The URL for sending a notification when the task&#39;s export process is done
	 * @return string
	 */
	 getNotificationUrl() {
	 	return this.notificationUrl;
	 }
	
	/**
	 * @param notificationUrl string The URL for sending a notification when the task&#39;s export process is done
	 */
	 setNotificationUrl(notificationUrl) {
	 	this.notificationUrl = notificationUrl;
	 }
	
	/**
	 * List of media type identifiers (as configured in TVM) to export. used only in case data_type = vod
	 * @return array
	 */
	 getVodTypes() {
	 	return this.vodTypes;
	 }
	
	/**
	 * @param vodTypes array List of media type identifiers (as configured in TVM) to export. used only in case data_type = vod
	 */
	 setVodTypes(vodTypes) {
	 	this.vodTypes = vodTypes;
	 }
	
	/**
	 * Indicates if the task is active or not
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Indicates if the task is active or not
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
}
module.exports.ExportTask = ExportTask;

/**
 *
 */
class ExportTaskListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTaskListResponse';
	}
	
	/**
	 * Export task items
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Export task items
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ExportTaskListResponse = ExportTaskListResponse;

/**
 *
 */
class ChannelEnrichmentHolder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelEnrichmentHolder';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.ChannelEnrichmentHolder = ChannelEnrichmentHolder;

/**
 *
 */
class ExternalChannelProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalChannelProfile';
	}
	
	/**
	 * External channel id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * External channel name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string External channel name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * External channel active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool External channel active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * External channel external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string External channel external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Filter expression
	 * @return string
	 */
	 getFilterExpression() {
	 	return this.filterExpression;
	 }
	
	/**
	 * @param filterExpression string Filter expression
	 */
	 setFilterExpression(filterExpression) {
	 	this.filterExpression = filterExpression;
	 }
	
	/**
	 * Recommendation engine id
	 * @return int
	 */
	 getRecommendationEngineId() {
	 	return this.recommendationEngineId;
	 }
	
	/**
	 * @param recommendationEngineId int Recommendation engine id
	 */
	 setRecommendationEngineId(recommendationEngineId) {
	 	this.recommendationEngineId = recommendationEngineId;
	 }
	
	/**
	 * Enrichments
	 * @return array
	 */
	 getEnrichments() {
	 	return this.enrichments;
	 }
	
	/**
	 * @param enrichments array Enrichments
	 */
	 setEnrichments(enrichments) {
	 	this.enrichments = enrichments;
	 }
}
module.exports.ExternalChannelProfile = ExternalChannelProfile;

/**
 *
 */
class ExternalChannelProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalChannelProfileListResponse';
	}
	
	/**
	 * External channel profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array External channel profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ExternalChannelProfileListResponse = ExternalChannelProfileListResponse;

/**
 *
 */
class RecommendationProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecommendationProfile';
	}
	
	/**
	 * recommendation engine id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * recommendation engine name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string recommendation engine name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * recommendation engine is active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool recommendation engine is active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * recommendation engine adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string recommendation engine adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * recommendation engine extra parameters
	 * @return map
	 */
	 getRecommendationEngineSettings() {
	 	return this.recommendationEngineSettings;
	 }
	
	/**
	 * @param recommendationEngineSettings map recommendation engine extra parameters
	 */
	 setRecommendationEngineSettings(recommendationEngineSettings) {
	 	this.recommendationEngineSettings = recommendationEngineSettings;
	 }
	
	/**
	 * recommendation engine external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string recommendation engine external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.RecommendationProfile = RecommendationProfile;

/**
 *
 */
class RecommendationProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecommendationProfileListResponse';
	}
	
	/**
	 * Recommendation profiles list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Recommendation profiles list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RecommendationProfileListResponse = RecommendationProfileListResponse;

/**
 *
 */
class RegistrySettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistrySettings';
	}
	
	/**
	 * Permission item identifier
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Permission item identifier
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * Permission item name
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Permission item name
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.RegistrySettings = RegistrySettings;

/**
 *
 */
class RegistrySettingsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistrySettingsListResponse';
	}
	
	/**
	 * Registry settings list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Registry settings list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RegistrySettingsListResponse = RegistrySettingsListResponse;

/**
 *
 */
class HouseholdPaymentMethod extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentMethod';
	}
	
	/**
	 * Household payment method identifier (internal)
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Payment-gateway identifier
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Payment-gateway identifier
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Payment method name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Payment method name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Indicates whether the payment method allow multiple instances
	 * @return bool
	 */
	 getAllowMultiInstance() {
	 	return this.allowMultiInstance;
	 }
	
	/**
	 * @param allowMultiInstance bool Indicates whether the payment method allow multiple instances
	 */
	 setAllowMultiInstance(allowMultiInstance) {
	 	this.allowMultiInstance = allowMultiInstance;
	 }
}
module.exports.HouseholdPaymentMethod = HouseholdPaymentMethod;

/**
 *
 */
class HouseholdPaymentMethodListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentMethodListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPaymentMethodListResponse = HouseholdPaymentMethodListResponse;

/**
 *
 */
class PaymentMethodProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfile';
	}
	
	/**
	 * Payment method identifier (internal)
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Payment gateway identifier (internal)
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Payment gateway identifier (internal)
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Payment method name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Payment method name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Indicates whether the payment method allow multiple instances
	 * @return bool
	 */
	 getAllowMultiInstance() {
	 	return this.allowMultiInstance;
	 }
	
	/**
	 * @param allowMultiInstance bool Indicates whether the payment method allow multiple instances
	 */
	 setAllowMultiInstance(allowMultiInstance) {
	 	this.allowMultiInstance = allowMultiInstance;
	 }
}
module.exports.PaymentMethodProfile = PaymentMethodProfile;

/**
 *
 */
class PaymentMethodProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfileListResponse';
	}
	
	/**
	 * Payment method profiles list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Payment method profiles list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PaymentMethodProfileListResponse = PaymentMethodProfileListResponse;

/**
 *
 */
class Price extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPrice';
	}
	
	/**
	 * Price
	 * @return float
	 */
	 getAmount() {
	 	return this.amount;
	 }
	
	/**
	 * @param amount float Price
	 */
	 setAmount(amount) {
	 	this.amount = amount;
	 }
	
	/**
	 * Currency
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Currency
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Currency Sign
	 * @return string
	 */
	 getCurrencySign() {
	 	return this.currencySign;
	 }
	
	/**
	 * @param currencySign string Currency Sign
	 */
	 setCurrencySign(currencySign) {
	 	this.currencySign = currencySign;
	 }
}
module.exports.Price = Price;

/**
 *
 */
class ProductPrice extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPrice';
	}
	
	/**
	 * Product identifier
	 * @return string
	 */
	 getProductId() {
	 	return this.productId;
	 }
	
	/**
	 * @param productId string Product identifier
	 */
	 setProductId(productId) {
	 	this.productId = productId;
	 }
	
	/**
	 * Product Type
	 * @return string
	 */
	 getProductType() {
	 	return this.productType;
	 }
	
	/**
	 * @param productType string Product Type
	 */
	 setProductType(productType) {
	 	this.productType = productType;
	 }
	
	/**
	 * Product price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price Product price
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Product purchase status
	 * @return string
	 */
	 getPurchaseStatus() {
	 	return this.purchaseStatus;
	 }
	
	/**
	 * @param purchaseStatus string Product purchase status
	 */
	 setPurchaseStatus(purchaseStatus) {
	 	this.purchaseStatus = purchaseStatus;
	 }
}
module.exports.ProductPrice = ProductPrice;

/**
 *
 */
class TranslationToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTranslationToken';
	}
	
	/**
	 * Language code
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string Language code
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * Translated value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Translated value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.TranslationToken = TranslationToken;

/**
 *
 */
class PpvPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpvPrice';
	}
	
	/**
	 * Media file identifier
	 * @return int
	 */
	 getFileId() {
	 	return this.fileId;
	 }
	
	/**
	 * @param fileId int Media file identifier
	 */
	 setFileId(fileId) {
	 	this.fileId = fileId;
	 }
	
	/**
	 * The associated PPV module identifier
	 * @return string
	 */
	 getPpvModuleId() {
	 	return this.ppvModuleId;
	 }
	
	/**
	 * @param ppvModuleId string The associated PPV module identifier
	 */
	 setPpvModuleId(ppvModuleId) {
	 	this.ppvModuleId = ppvModuleId;
	 }
	
	/**
	 * Denotes whether this object is available only as part of a subscription or can be sold separately
	 * @return bool
	 */
	 getIsSubscriptionOnly() {
	 	return this.isSubscriptionOnly;
	 }
	
	/**
	 * @param isSubscriptionOnly bool Denotes whether this object is available only as part of a subscription or can be sold separately
	 */
	 setIsSubscriptionOnly(isSubscriptionOnly) {
	 	this.isSubscriptionOnly = isSubscriptionOnly;
	 }
	
	/**
	 * The full price of the item (with no discounts)
	 * @return Price
	 */
	 getFullPrice() {
	 	return this.fullPrice;
	 }
	
	/**
	 * @param fullPrice Price The full price of the item (with no discounts)
	 */
	 setFullPrice(fullPrice) {
	 	this.fullPrice = fullPrice;
	 }
	
	/**
	 * The identifier of the relevant subscription
	 * @return string
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * @param subscriptionId string The identifier of the relevant subscription
	 */
	 setSubscriptionId(subscriptionId) {
	 	this.subscriptionId = subscriptionId;
	 }
	
	/**
	 * The identifier of the relevant collection
	 * @return string
	 */
	 getCollectionId() {
	 	return this.collectionId;
	 }
	
	/**
	 * @param collectionId string The identifier of the relevant collection
	 */
	 setCollectionId(collectionId) {
	 	this.collectionId = collectionId;
	 }
	
	/**
	 * The identifier of the relevant pre paid
	 * @return string
	 */
	 getPrePaidId() {
	 	return this.prePaidId;
	 }
	
	/**
	 * @param prePaidId string The identifier of the relevant pre paid
	 */
	 setPrePaidId(prePaidId) {
	 	this.prePaidId = prePaidId;
	 }
	
	/**
	 * A list of the descriptions of the PPV module on different languages (language code and translation)
	 * @return array
	 */
	 getPpvDescriptions() {
	 	return this.ppvDescriptions;
	 }
	
	/**
	 * @param ppvDescriptions array A list of the descriptions of the PPV module on different languages (language code and translation)
	 */
	 setPpvDescriptions(ppvDescriptions) {
	 	this.ppvDescriptions = ppvDescriptions;
	 }
	
	/**
	 * If the item already purchased - the identifier of the user (in the household) who purchased this item
	 * @return string
	 */
	 getPurchaseUserId() {
	 	return this.purchaseUserId;
	 }
	
	/**
	 * @param purchaseUserId string If the item already purchased - the identifier of the user (in the household) who purchased this item
	 */
	 setPurchaseUserId(purchaseUserId) {
	 	this.purchaseUserId = purchaseUserId;
	 }
	
	/**
	 * If the item already purchased - the identifier of the purchased file
	 * @return int
	 */
	 getPurchasedMediaFileId() {
	 	return this.purchasedMediaFileId;
	 }
	
	/**
	 * @param purchasedMediaFileId int If the item already purchased - the identifier of the purchased file
	 */
	 setPurchasedMediaFileId(purchasedMediaFileId) {
	 	this.purchasedMediaFileId = purchasedMediaFileId;
	 }
	
	/**
	 * Related media files identifiers (different types)
	 * @return array
	 */
	 getRelatedMediaFileIds() {
	 	return this.relatedMediaFileIds;
	 }
	
	/**
	 * @param relatedMediaFileIds array Related media files identifiers (different types)
	 */
	 setRelatedMediaFileIds(relatedMediaFileIds) {
	 	this.relatedMediaFileIds = relatedMediaFileIds;
	 }
	
	/**
	 * If the item already purchased - since when the user can start watching the item
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int If the item already purchased - since when the user can start watching the item
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * If the item already purchased - until when the user can watch the item
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int If the item already purchased - until when the user can watch the item
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Discount end date
	 * @return int
	 */
	 getDiscountEndDate() {
	 	return this.discountEndDate;
	 }
	
	/**
	 * @param discountEndDate int Discount end date
	 */
	 setDiscountEndDate(discountEndDate) {
	 	this.discountEndDate = discountEndDate;
	 }
	
	/**
	 * If the item already purchased and played - the name of the device on which it was first played
	 * @return string
	 */
	 getFirstDeviceName() {
	 	return this.firstDeviceName;
	 }
	
	/**
	 * @param firstDeviceName string If the item already purchased and played - the name of the device on which it was first played
	 */
	 setFirstDeviceName(firstDeviceName) {
	 	this.firstDeviceName = firstDeviceName;
	 }
	
	/**
	 * If waiver period is enabled - donates whether the user is still in the cancelation window
	 * @return bool
	 */
	 getIsInCancelationPeriod() {
	 	return this.isInCancelationPeriod;
	 }
	
	/**
	 * @param isInCancelationPeriod bool If waiver period is enabled - donates whether the user is still in the cancelation window
	 */
	 setIsInCancelationPeriod(isInCancelationPeriod) {
	 	this.isInCancelationPeriod = isInCancelationPeriod;
	 }
	
	/**
	 * The PPV product code
	 * @return string
	 */
	 getPpvProductCode() {
	 	return this.ppvProductCode;
	 }
	
	/**
	 * @param ppvProductCode string The PPV product code
	 */
	 setPpvProductCode(ppvProductCode) {
	 	this.ppvProductCode = ppvProductCode;
	 }
}
module.exports.PpvPrice = PpvPrice;

/**
 *
 */
class PPVItemPriceDetails extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPPVItemPriceDetails';
	}
	
	/**
	 * The associated PPV module identifier
	 * @return string
	 */
	 getPpvModuleId() {
	 	return this.ppvModuleId;
	 }
	
	/**
	 * @param ppvModuleId string The associated PPV module identifier
	 */
	 setPpvModuleId(ppvModuleId) {
	 	this.ppvModuleId = ppvModuleId;
	 }
	
	/**
	 * Denotes whether this object is available only as part of a subscription or can be sold separately
	 * @return bool
	 */
	 getIsSubscriptionOnly() {
	 	return this.isSubscriptionOnly;
	 }
	
	/**
	 * @param isSubscriptionOnly bool Denotes whether this object is available only as part of a subscription or can be sold separately
	 */
	 setIsSubscriptionOnly(isSubscriptionOnly) {
	 	this.isSubscriptionOnly = isSubscriptionOnly;
	 }
	
	/**
	 * The calculated price of the item after discounts (as part of a purchased subscription by the user or by using a coupon)
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price The calculated price of the item after discounts (as part of a purchased subscription by the user or by using a coupon)
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * The full price of the item (with no discounts)
	 * @return Price
	 */
	 getFullPrice() {
	 	return this.fullPrice;
	 }
	
	/**
	 * @param fullPrice Price The full price of the item (with no discounts)
	 */
	 setFullPrice(fullPrice) {
	 	this.fullPrice = fullPrice;
	 }
	
	/**
	 * Subscription purchase status
	 * @return string
	 */
	 getPurchaseStatus() {
	 	return this.purchaseStatus;
	 }
	
	/**
	 * @param purchaseStatus string Subscription purchase status
	 */
	 setPurchaseStatus(purchaseStatus) {
	 	this.purchaseStatus = purchaseStatus;
	 }
	
	/**
	 * The identifier of the relevant subscription
	 * @return string
	 */
	 getSubscriptionId() {
	 	return this.subscriptionId;
	 }
	
	/**
	 * @param subscriptionId string The identifier of the relevant subscription
	 */
	 setSubscriptionId(subscriptionId) {
	 	this.subscriptionId = subscriptionId;
	 }
	
	/**
	 * The identifier of the relevant collection
	 * @return string
	 */
	 getCollectionId() {
	 	return this.collectionId;
	 }
	
	/**
	 * @param collectionId string The identifier of the relevant collection
	 */
	 setCollectionId(collectionId) {
	 	this.collectionId = collectionId;
	 }
	
	/**
	 * The identifier of the relevant pre paid
	 * @return string
	 */
	 getPrePaidId() {
	 	return this.prePaidId;
	 }
	
	/**
	 * @param prePaidId string The identifier of the relevant pre paid
	 */
	 setPrePaidId(prePaidId) {
	 	this.prePaidId = prePaidId;
	 }
	
	/**
	 * A list of the descriptions of the PPV module on different languages (language code and translation)
	 * @return array
	 */
	 getPpvDescriptions() {
	 	return this.ppvDescriptions;
	 }
	
	/**
	 * @param ppvDescriptions array A list of the descriptions of the PPV module on different languages (language code and translation)
	 */
	 setPpvDescriptions(ppvDescriptions) {
	 	this.ppvDescriptions = ppvDescriptions;
	 }
	
	/**
	 * If the item already purchased - the identifier of the user (in the household) who purchased this item
	 * @return string
	 */
	 getPurchaseUserId() {
	 	return this.purchaseUserId;
	 }
	
	/**
	 * @param purchaseUserId string If the item already purchased - the identifier of the user (in the household) who purchased this item
	 */
	 setPurchaseUserId(purchaseUserId) {
	 	this.purchaseUserId = purchaseUserId;
	 }
	
	/**
	 * If the item already purchased - the identifier of the purchased file
	 * @return int
	 */
	 getPurchasedMediaFileId() {
	 	return this.purchasedMediaFileId;
	 }
	
	/**
	 * @param purchasedMediaFileId int If the item already purchased - the identifier of the purchased file
	 */
	 setPurchasedMediaFileId(purchasedMediaFileId) {
	 	this.purchasedMediaFileId = purchasedMediaFileId;
	 }
	
	/**
	 * Related media files identifiers (different types)
	 * @return array
	 */
	 getRelatedMediaFileIds() {
	 	return this.relatedMediaFileIds;
	 }
	
	/**
	 * @param relatedMediaFileIds array Related media files identifiers (different types)
	 */
	 setRelatedMediaFileIds(relatedMediaFileIds) {
	 	this.relatedMediaFileIds = relatedMediaFileIds;
	 }
	
	/**
	 * If the item already purchased - since when the user can start watching the item
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int If the item already purchased - since when the user can start watching the item
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * If the item already purchased - until when the user can watch the item
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int If the item already purchased - until when the user can watch the item
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Discount end date
	 * @return int
	 */
	 getDiscountEndDate() {
	 	return this.discountEndDate;
	 }
	
	/**
	 * @param discountEndDate int Discount end date
	 */
	 setDiscountEndDate(discountEndDate) {
	 	this.discountEndDate = discountEndDate;
	 }
	
	/**
	 * If the item already purchased and played - the name of the device on which it was first played
	 * @return string
	 */
	 getFirstDeviceName() {
	 	return this.firstDeviceName;
	 }
	
	/**
	 * @param firstDeviceName string If the item already purchased and played - the name of the device on which it was first played
	 */
	 setFirstDeviceName(firstDeviceName) {
	 	this.firstDeviceName = firstDeviceName;
	 }
	
	/**
	 * If waiver period is enabled - donates whether the user is still in the cancelation window
	 * @return bool
	 */
	 getIsInCancelationPeriod() {
	 	return this.isInCancelationPeriod;
	 }
	
	/**
	 * @param isInCancelationPeriod bool If waiver period is enabled - donates whether the user is still in the cancelation window
	 */
	 setIsInCancelationPeriod(isInCancelationPeriod) {
	 	this.isInCancelationPeriod = isInCancelationPeriod;
	 }
	
	/**
	 * The PPV product code
	 * @return string
	 */
	 getPpvProductCode() {
	 	return this.ppvProductCode;
	 }
	
	/**
	 * @param ppvProductCode string The PPV product code
	 */
	 setPpvProductCode(ppvProductCode) {
	 	this.ppvProductCode = ppvProductCode;
	 }
}
module.exports.PPVItemPriceDetails = PPVItemPriceDetails;

/**
 *
 */
class ItemPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaItemPrice';
	}
	
	/**
	 * Media file identifier
	 * @return int
	 */
	 getFileId() {
	 	return this.fileId;
	 }
	
	/**
	 * @param fileId int Media file identifier
	 */
	 setFileId(fileId) {
	 	this.fileId = fileId;
	 }
	
	/**
	 * PPV price details
	 * @return array
	 */
	 getPpvPriceDetails() {
	 	return this.ppvPriceDetails;
	 }
	
	/**
	 * @param ppvPriceDetails array PPV price details
	 */
	 setPpvPriceDetails(ppvPriceDetails) {
	 	this.ppvPriceDetails = ppvPriceDetails;
	 }
}
module.exports.ItemPrice = ItemPrice;

/**
 *
 */
class SubscriptionPrice extends ProductPrice{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionPrice';
	}
}
module.exports.SubscriptionPrice = SubscriptionPrice;

/**
 *
 */
class HouseholdPaymentGateway extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentGateway';
	}
	
	/**
	 * payment gateway id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * payment gateway name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string payment gateway name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Payment gateway default (true/false)
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Payment gateway default (true/false)
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * distinction payment gateway selected by account or household
	 * @return string
	 */
	 getSelectedBy() {
	 	return this.selectedBy;
	 }
	
	/**
	 * @param selectedBy string distinction payment gateway selected by account or household
	 */
	 setSelectedBy(selectedBy) {
	 	this.selectedBy = selectedBy;
	 }
}
module.exports.HouseholdPaymentGateway = HouseholdPaymentGateway;

/**
 *
 */
class HouseholdPaymentGatewayListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdPaymentGatewayListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HouseholdPaymentGatewayListResponse = HouseholdPaymentGatewayListResponse;

/**
 *
 */
class PaymentGatewayBaseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayBaseProfile';
	}
	
	/**
	 * payment gateway id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * payment gateway name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string payment gateway name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Payment gateway default (true/false)
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Payment gateway default (true/false)
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * distinction payment gateway selected by account or household
	 * @return string
	 */
	 getSelectedBy() {
	 	return this.selectedBy;
	 }
	
	/**
	 * @param selectedBy string distinction payment gateway selected by account or household
	 */
	 setSelectedBy(selectedBy) {
	 	this.selectedBy = selectedBy;
	 }
}
module.exports.PaymentGatewayBaseProfile = PaymentGatewayBaseProfile;

/**
 *
 */
class PaymentGatewayProfile extends PaymentGatewayBaseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayProfile';
	}
	
	/**
	 * Payment gateway is active status
	 * @return int
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive int Payment gateway is active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Payment gateway adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string Payment gateway adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * Payment gateway transact URL
	 * @return string
	 */
	 getTransactUrl() {
	 	return this.transactUrl;
	 }
	
	/**
	 * @param transactUrl string Payment gateway transact URL
	 */
	 setTransactUrl(transactUrl) {
	 	this.transactUrl = transactUrl;
	 }
	
	/**
	 * Payment gateway status URL
	 * @return string
	 */
	 getStatusUrl() {
	 	return this.statusUrl;
	 }
	
	/**
	 * @param statusUrl string Payment gateway status URL
	 */
	 setStatusUrl(statusUrl) {
	 	this.statusUrl = statusUrl;
	 }
	
	/**
	 * Payment gateway renew URL
	 * @return string
	 */
	 getRenewUrl() {
	 	return this.renewUrl;
	 }
	
	/**
	 * @param renewUrl string Payment gateway renew URL
	 */
	 setRenewUrl(renewUrl) {
	 	this.renewUrl = renewUrl;
	 }
	
	/**
	 * Payment gateway extra parameters
	 * @return map
	 */
	 getPaymentGatewayeSettings() {
	 	return this.paymentGatewayeSettings;
	 }
	
	/**
	 * @param paymentGatewayeSettings map Payment gateway extra parameters
	 */
	 setPaymentGatewayeSettings(paymentGatewayeSettings) {
	 	this.paymentGatewayeSettings = paymentGatewayeSettings;
	 }
	
	/**
	 * Payment gateway external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string Payment gateway external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Pending Interval in minutes
	 * @return int
	 */
	 getPendingInterval() {
	 	return this.pendingInterval;
	 }
	
	/**
	 * @param pendingInterval int Pending Interval in minutes
	 */
	 setPendingInterval(pendingInterval) {
	 	this.pendingInterval = pendingInterval;
	 }
	
	/**
	 * Pending Retries
	 * @return int
	 */
	 getPendingRetries() {
	 	return this.pendingRetries;
	 }
	
	/**
	 * @param pendingRetries int Pending Retries
	 */
	 setPendingRetries(pendingRetries) {
	 	this.pendingRetries = pendingRetries;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
	
	/**
	 * @param sharedSecret string Shared Secret
	 */
	 setSharedSecret(sharedSecret) {
	 	this.sharedSecret = sharedSecret;
	 }
	
	/**
	 * Renew Interval Minutes
	 * @return int
	 */
	 getRenewIntervalMinutes() {
	 	return this.renewIntervalMinutes;
	 }
	
	/**
	 * @param renewIntervalMinutes int Renew Interval Minutes
	 */
	 setRenewIntervalMinutes(renewIntervalMinutes) {
	 	this.renewIntervalMinutes = renewIntervalMinutes;
	 }
	
	/**
	 * Renew Start Minutes
	 * @return int
	 */
	 getRenewStartMinutes() {
	 	return this.renewStartMinutes;
	 }
	
	/**
	 * @param renewStartMinutes int Renew Start Minutes
	 */
	 setRenewStartMinutes(renewStartMinutes) {
	 	this.renewStartMinutes = renewStartMinutes;
	 }
}
module.exports.PaymentGatewayProfile = PaymentGatewayProfile;

/**
 *
 */
class PaymentGatewayProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayProfileListResponse';
	}
	
	/**
	 * A list of payment-gateway profiles
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of payment-gateway profiles
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PaymentGatewayProfileListResponse = PaymentGatewayProfileListResponse;

/**
 *
 */
class ParentalRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRule';
	}
	
	/**
	 * Unique parental rule identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Rule display name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Rule display name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Explanatory description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Explanatory description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Rule order within the full list of rules
	 * @return int
	 */
	 getOrder() {
	 	return this.order;
	 }
	
	/**
	 * @param order int Rule order within the full list of rules
	 */
	 setOrder(order) {
	 	this.order = order;
	 }
	
	/**
	 * Media asset tag ID to in which to look for corresponding trigger values
	 * @return int
	 */
	 getMediaTag() {
	 	return this.mediaTag;
	 }
	
	/**
	 * @param mediaTag int Media asset tag ID to in which to look for corresponding trigger values
	 */
	 setMediaTag(mediaTag) {
	 	this.mediaTag = mediaTag;
	 }
	
	/**
	 * EPG asset tag ID to in which to look for corresponding trigger values
	 * @return int
	 */
	 getEpgTag() {
	 	return this.epgTag;
	 }
	
	/**
	 * @param epgTag int EPG asset tag ID to in which to look for corresponding trigger values
	 */
	 setEpgTag(epgTag) {
	 	this.epgTag = epgTag;
	 }
	
	/**
	 * Content that correspond to this rule is not available for guests
	 * @return bool
	 */
	 getBlockAnonymousAccess() {
	 	return this.blockAnonymousAccess;
	 }
	
	/**
	 * @param blockAnonymousAccess bool Content that correspond to this rule is not available for guests
	 */
	 setBlockAnonymousAccess(blockAnonymousAccess) {
	 	this.blockAnonymousAccess = blockAnonymousAccess;
	 }
	
	/**
	 * Rule type – Movies, TV series or both
	 * @return string
	 */
	 getRuleType() {
	 	return this.ruleType;
	 }
	
	/**
	 * @param ruleType string Rule type – Movies, TV series or both
	 */
	 setRuleType(ruleType) {
	 	this.ruleType = ruleType;
	 }
	
	/**
	 * Media tag values that trigger rule
	 * @return array
	 */
	 getMediaTagValues() {
	 	return this.mediaTagValues;
	 }
	
	/**
	 * @param mediaTagValues array Media tag values that trigger rule
	 */
	 setMediaTagValues(mediaTagValues) {
	 	this.mediaTagValues = mediaTagValues;
	 }
	
	/**
	 * EPG tag values that trigger rule
	 * @return array
	 */
	 getEpgTagValues() {
	 	return this.epgTagValues;
	 }
	
	/**
	 * @param epgTagValues array EPG tag values that trigger rule
	 */
	 setEpgTagValues(epgTagValues) {
	 	this.epgTagValues = epgTagValues;
	 }
	
	/**
	 * Is the rule the default rule of the account
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool Is the rule the default rule of the account
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Where was this rule defined account, household or user
	 * @return string
	 */
	 getOrigin() {
	 	return this.origin;
	 }
	
	/**
	 * @param origin string Where was this rule defined account, household or user
	 */
	 setOrigin(origin) {
	 	this.origin = origin;
	 }
}
module.exports.ParentalRule = ParentalRule;

/**
 *
 */
class ParentalRuleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRuleListResponse';
	}
	
	/**
	 * A list of parental rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of parental rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ParentalRuleListResponse = ParentalRuleListResponse;

/**
 *
 */
class Recording extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecording';
	}
	
	/**
	 * Kaltura unique ID representing the recording identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Recording state: scheduled/recording/recorded/canceled/failed/does_not_exists/deleted
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Kaltura unique ID representing the program identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int Kaltura unique ID representing the program identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Recording Type: single/season/series
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Specifies until when the recording is available for viewing. Date and time represented as epoch
	 * @return int
	 */
	 getViewableUntilDate() {
	 	return this.viewableUntilDate;
	 }
	
	/**
	 * Specifies whether or not the recording is protected
	 * @return bool
	 */
	 getIsProtected() {
	 	return this.isProtected;
	 }
	
	/**
	 * Specifies when was the recording created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
	
	/**
	 * Specifies when was the recording last updated. Date and time represented as epoch
	 * @return int
	 */
	 getUpdateDate() {
	 	return this.updateDate;
	 }
}
module.exports.Recording = Recording;

/**
 *
 */
class RecordingListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingListResponse';
	}
	
	/**
	 * Recordings
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Recordings
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.RecordingListResponse = RecordingListResponse;

/**
 *
 */
class BillingTransaction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingTransaction';
	}
	
	/**
	 * Reciept Code
	 * @return string
	 */
	 getRecieptCode() {
	 	return this.recieptCode;
	 }
	
	/**
	 * Purchased Item Name
	 * @return string
	 */
	 getPurchasedItemName() {
	 	return this.purchasedItemName;
	 }
	
	/**
	 * Purchased Item Code
	 * @return string
	 */
	 getPurchasedItemCode() {
	 	return this.purchasedItemCode;
	 }
	
	/**
	 * Item Type
	 * @return string
	 */
	 getItemType() {
	 	return this.itemType;
	 }
	
	/**
	 * Billing Action
	 * @return string
	 */
	 getBillingAction() {
	 	return this.billingAction;
	 }
	
	/**
	 * price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * Action Date
	 * @return int
	 */
	 getActionDate() {
	 	return this.actionDate;
	 }
	
	/**
	 * Start Date
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * End Date
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * Payment Method
	 * @return string
	 */
	 getPaymentMethod() {
	 	return this.paymentMethod;
	 }
	
	/**
	 * Payment Method Extra Details
	 * @return string
	 */
	 getPaymentMethodExtraDetails() {
	 	return this.paymentMethodExtraDetails;
	 }
	
	/**
	 * Is Recurring
	 * @return bool
	 */
	 getIsRecurring() {
	 	return this.isRecurring;
	 }
	
	/**
	 * Billing Provider Ref
	 * @return int
	 */
	 getBillingProviderRef() {
	 	return this.billingProviderRef;
	 }
	
	/**
	 * Purchase ID
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * Remarks
	 * @return string
	 */
	 getRemarks() {
	 	return this.remarks;
	 }
}
module.exports.BillingTransaction = BillingTransaction;

/**
 *
 */
class BillingTransactionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingTransactionListResponse';
	}
	
	/**
	 * Transactions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Transactions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.BillingTransactionListResponse = BillingTransactionListResponse;

/**
 *
 */
class PermissionItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionItem';
	}
	
	/**
	 * Permission item identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Permission item name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Permission item name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.PermissionItem = PermissionItem;

/**
 *
 */
class Permission extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermission';
	}
	
	/**
	 * Permission identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Permission name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Permission name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * List of permission items associated with the permission
	 * @return array
	 */
	 getPermissionItems() {
	 	return this.permissionItems;
	 }
	
	/**
	 * @param permissionItems array List of permission items associated with the permission
	 */
	 setPermissionItems(permissionItems) {
	 	this.permissionItems = permissionItems;
	 }
}
module.exports.Permission = Permission;

/**
 *
 */
class UserRole extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRole';
	}
	
	/**
	 * User role identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * User role name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string User role name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * List of permissions associated with the user role
	 * @return array
	 */
	 getPermissions() {
	 	return this.permissions;
	 }
	
	/**
	 * @param permissions array List of permissions associated with the user role
	 */
	 setPermissions(permissions) {
	 	this.permissions = permissions;
	 }
}
module.exports.UserRole = UserRole;

/**
 *
 */
class UserRoleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleListResponse';
	}
	
	/**
	 * A list of generic rules
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of generic rules
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.UserRoleListResponse = UserRoleListResponse;

/**
 *
 */
class GroupPermission extends Permission{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupPermission';
	}
	
	/**
	 * Permission identifier
	 * @return string
	 */
	 getGroup() {
	 	return this.group;
	 }
	
	/**
	 * @param group string Permission identifier
	 */
	 setGroup(group) {
	 	this.group = group;
	 }
}
module.exports.GroupPermission = GroupPermission;

/**
 *
 */
class ApiArgumentPermissionItem extends PermissionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiArgumentPermissionItem';
	}
	
	/**
	 * API service name
	 * @return string
	 */
	 getService() {
	 	return this.service;
	 }
	
	/**
	 * @param service string API service name
	 */
	 setService(service) {
	 	this.service = service;
	 }
	
	/**
	 * API action name
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string API action name
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * API parameter name
	 * @return string
	 */
	 getParameter() {
	 	return this.parameter;
	 }
	
	/**
	 * @param parameter string API parameter name
	 */
	 setParameter(parameter) {
	 	this.parameter = parameter;
	 }
}
module.exports.ApiArgumentPermissionItem = ApiArgumentPermissionItem;

/**
 *
 */
class ApiParameterPermissionItem extends PermissionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiParameterPermissionItem';
	}
	
	/**
	 * API object name
	 * @return string
	 */
	 getObject() {
	 	return this.object;
	 }
	
	/**
	 * @param object string API object name
	 */
	 setObject(object) {
	 	this.object = object;
	 }
	
	/**
	 * API parameter name
	 * @return string
	 */
	 getParameter() {
	 	return this.parameter;
	 }
	
	/**
	 * @param parameter string API parameter name
	 */
	 setParameter(parameter) {
	 	this.parameter = parameter;
	 }
	
	/**
	 * API action type
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string API action type
	 */
	 setAction(action) {
	 	this.action = action;
	 }
}
module.exports.ApiParameterPermissionItem = ApiParameterPermissionItem;

/**
 *
 */
class ApiActionPermissionItem extends PermissionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiActionPermissionItem';
	}
	
	/**
	 * API service name
	 * @return string
	 */
	 getService() {
	 	return this.service;
	 }
	
	/**
	 * @param service string API service name
	 */
	 setService(service) {
	 	this.service = service;
	 }
	
	/**
	 * API action name
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string API action name
	 */
	 setAction(action) {
	 	this.action = action;
	 }
}
module.exports.ApiActionPermissionItem = ApiActionPermissionItem;

/**
 *
 */
class InboxMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessage';
	}
	
	/**
	 * message id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string message
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Created at
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * url
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string url
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.InboxMessage = InboxMessage;

/**
 *
 */
class InboxMessageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessageListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.InboxMessageListResponse = InboxMessageListResponse;

/**
 *
 */
class FollowDataBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowDataBase';
	}
	
	/**
	 * Announcement Id
	 * @return int
	 */
	 getAnnouncementId() {
	 	return this.announcementId;
	 }
	
	/**
	 * Status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Title
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * Timestamp
	 * @return int
	 */
	 getTimestamp() {
	 	return this.timestamp;
	 }
	
	/**
	 * Follow Phrase
	 * @return string
	 */
	 getFollowPhrase() {
	 	return this.followPhrase;
	 }
}
module.exports.FollowDataBase = FollowDataBase;

/**
 *
 */
class FollowTvSeries extends FollowDataBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeries';
	}
	
	/**
	 * Asset Id
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
}
module.exports.FollowTvSeries = FollowTvSeries;

/**
 *
 */
class FollowTvSeriesListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeriesListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.FollowTvSeriesListResponse = FollowTvSeriesListResponse;

/**
 *
 */
class AnnouncementListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnouncementListResponse';
	}
	
	/**
	 * Announcements
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Announcements
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AnnouncementListResponse = AnnouncementListResponse;

/**
 *
 */
class Feed extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeed';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
}
module.exports.Feed = Feed;

/**
 *
 */
class PersonalFeed extends Feed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeed';
	}
}
module.exports.PersonalFeed = PersonalFeed;

/**
 *
 */
class PersonalFeedListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeedListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PersonalFeedListResponse = PersonalFeedListResponse;

/**
 *
 */
class Topic extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopic';
	}
	
	/**
	 * message id
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string message
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * message
	 * @return string
	 */
	 getSubscribersAmount() {
	 	return this.subscribersAmount;
	 }
	
	/**
	 * @param subscribersAmount string message
	 */
	 setSubscribersAmount(subscribersAmount) {
	 	this.subscribersAmount = subscribersAmount;
	 }
	
	/**
	 * automaticIssueNotification
	 * @return string
	 */
	 getAutomaticIssueNotification() {
	 	return this.automaticIssueNotification;
	 }
	
	/**
	 * @param automaticIssueNotification string automaticIssueNotification
	 */
	 setAutomaticIssueNotification(automaticIssueNotification) {
	 	this.automaticIssueNotification = automaticIssueNotification;
	 }
	
	/**
	 * lastMessageSentDateSec
	 * @return int
	 */
	 getLastMessageSentDateSec() {
	 	return this.lastMessageSentDateSec;
	 }
	
	/**
	 * @param lastMessageSentDateSec int lastMessageSentDateSec
	 */
	 setLastMessageSentDateSec(lastMessageSentDateSec) {
	 	this.lastMessageSentDateSec = lastMessageSentDateSec;
	 }
}
module.exports.Topic = Topic;

/**
 *
 */
class TopicListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopicListResponse';
	}
	
	/**
	 * Follow data list
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Follow data list
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.TopicListResponse = TopicListResponse;

/**
 *
 */
class ProductPriceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPriceListResponse';
	}
	
	/**
	 * A list of prices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of prices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ProductPriceListResponse = ProductPriceListResponse;

/**
 *
 */
class ItemPriceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaItemPriceListResponse';
	}
	
	/**
	 * A list of item prices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of item prices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ItemPriceListResponse = ItemPriceListResponse;

/**
 *
 */
class BaseChannel extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseChannel';
	}
	
	/**
	 * Unique identifier for the channel
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Channel name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Channel name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.BaseChannel = BaseChannel;

/**
 *
 */
class Channel extends BaseChannel{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannel';
	}
	
	/**
	 * Cannel description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Cannel description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Channel images
	 * @return array
	 */
	 getImages() {
	 	return this.images;
	 }
	
	/**
	 * @param images array Channel images
	 */
	 setImages(images) {
	 	this.images = images;
	 }
	
	/**
	 * Asset types in the channel.
 * -26 is EPG
	 * @return array
	 */
	 getAssetTypes() {
	 	return this.assetTypes;
	 }
	
	/**
	 * @param assetTypes array Asset types in the channel.
 * -26 is EPG
	 */
	 setAssetTypes(assetTypes) {
	 	this.assetTypes = assetTypes;
	 }
	
	/**
	 * Filter expression
	 * @return string
	 */
	 getFilterExpression() {
	 	return this.filterExpression;
	 }
	
	/**
	 * @param filterExpression string Filter expression
	 */
	 setFilterExpression(filterExpression) {
	 	this.filterExpression = filterExpression;
	 }
	
	/**
	 * active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * Channel order
	 * @return string
	 */
	 getOrder() {
	 	return this.order;
	 }
	
	/**
	 * @param order string Channel order
	 */
	 setOrder(order) {
	 	this.order = order;
	 }
}
module.exports.Channel = Channel;

/**
 *
 */
class PriceDetails extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPriceDetails';
	}
	
	/**
	 * The price code identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int The price code identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * The price code name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The price code name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The price
	 * @return Price
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price Price The price
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * A list of the descriptions for this price on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions for this price on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
}
module.exports.PriceDetails = PriceDetails;

/**
 *
 */
class DiscountModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDiscountModule';
	}
	
	/**
	 * The discount percentage
	 * @return float
	 */
	 getPercent() {
	 	return this.percent;
	 }
	
	/**
	 * @param percent float The discount percentage
	 */
	 setPercent(percent) {
	 	this.percent = percent;
	 }
	
	/**
	 * The first date the discount is available
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the discount is available
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the discount is available
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the discount is available
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
}
module.exports.DiscountModule = DiscountModule;

/**
 *
 */
class CouponsGroup extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCouponsGroup';
	}
	
	/**
	 * Coupon group identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Coupon group name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Coupon group name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * A list of the descriptions of the coupon group on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions of the coupon group on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
	
	/**
	 * The first date the coupons in this coupons group are valid
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the coupons in this coupons group are valid
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the coupons in this coupons group are valid
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the coupons in this coupons group are valid
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Maximum number of uses for each coupon in the group
	 * @return int
	 */
	 getMaxUsesNumber() {
	 	return this.maxUsesNumber;
	 }
	
	/**
	 * @param maxUsesNumber int Maximum number of uses for each coupon in the group
	 */
	 setMaxUsesNumber(maxUsesNumber) {
	 	this.maxUsesNumber = maxUsesNumber;
	 }
	
	/**
	 * Maximum number of uses for each coupon in the group on a renewable subscription
	 * @return int
	 */
	 getMaxUsesNumberOnRenewableSub() {
	 	return this.maxUsesNumberOnRenewableSub;
	 }
	
	/**
	 * @param maxUsesNumberOnRenewableSub int Maximum number of uses for each coupon in the group on a renewable subscription
	 */
	 setMaxUsesNumberOnRenewableSub(maxUsesNumberOnRenewableSub) {
	 	this.maxUsesNumberOnRenewableSub = maxUsesNumberOnRenewableSub;
	 }
}
module.exports.CouponsGroup = CouponsGroup;

/**
 *
 */
class UsageModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUsageModule';
	}
	
	/**
	 * Usage module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Usage module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Usage module name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The maximum number of times an item in this usage module can be viewed
	 * @return int
	 */
	 getMaxViewsNumber() {
	 	return this.maxViewsNumber;
	 }
	
	/**
	 * @param maxViewsNumber int The maximum number of times an item in this usage module can be viewed
	 */
	 setMaxViewsNumber(maxViewsNumber) {
	 	this.maxViewsNumber = maxViewsNumber;
	 }
	
	/**
	 * The amount time an item is available for viewing since a user started watching the item
	 * @return int
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * @param viewLifeCycle int The amount time an item is available for viewing since a user started watching the item
	 */
	 setViewLifeCycle(viewLifeCycle) {
	 	this.viewLifeCycle = viewLifeCycle;
	 }
	
	/**
	 * The amount time an item is available for viewing
	 * @return int
	 */
	 getFullLifeCycle() {
	 	return this.fullLifeCycle;
	 }
	
	/**
	 * @param fullLifeCycle int The amount time an item is available for viewing
	 */
	 setFullLifeCycle(fullLifeCycle) {
	 	this.fullLifeCycle = fullLifeCycle;
	 }
	
	/**
	 * Identifies a specific coupon linked to this object
	 * @return int
	 */
	 getCouponId() {
	 	return this.couponId;
	 }
	
	/**
	 * @param couponId int Identifies a specific coupon linked to this object
	 */
	 setCouponId(couponId) {
	 	this.couponId = couponId;
	 }
	
	/**
	 * Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 * @return int
	 */
	 getWaiverPeriod() {
	 	return this.waiverPeriod;
	 }
	
	/**
	 * @param waiverPeriod int Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 */
	 setWaiverPeriod(waiverPeriod) {
	 	this.waiverPeriod = waiverPeriod;
	 }
	
	/**
	 * Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 * @return bool
	 */
	 getIsWaiverEnabled() {
	 	return this.isWaiverEnabled;
	 }
	
	/**
	 * @param isWaiverEnabled bool Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 */
	 setIsWaiverEnabled(isWaiverEnabled) {
	 	this.isWaiverEnabled = isWaiverEnabled;
	 }
	
	/**
	 * Indicates that usage is targeted for offline playback
	 * @return bool
	 */
	 getIsOfflinePlayback() {
	 	return this.isOfflinePlayback;
	 }
	
	/**
	 * @param isOfflinePlayback bool Indicates that usage is targeted for offline playback
	 */
	 setIsOfflinePlayback(isOfflinePlayback) {
	 	this.isOfflinePlayback = isOfflinePlayback;
	 }
}
module.exports.UsageModule = UsageModule;

/**
 *
 */
class PricePlan extends UsageModule{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPricePlan';
	}
	
	/**
	 * Denotes whether or not this object can be renewed
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * @param isRenewable bool Denotes whether or not this object can be renewed
	 */
	 setIsRenewable(isRenewable) {
	 	this.isRenewable = isRenewable;
	 }
	
	/**
	 * Defines the number of times the module will be renewed (for the life_cycle period)
	 * @return int
	 */
	 getRenewalsNumber() {
	 	return this.renewalsNumber;
	 }
	
	/**
	 * @param renewalsNumber int Defines the number of times the module will be renewed (for the life_cycle period)
	 */
	 setRenewalsNumber(renewalsNumber) {
	 	this.renewalsNumber = renewalsNumber;
	 }
	
	/**
	 * Unique identifier associated with this object&#39;s price
	 * @return int
	 */
	 getPriceId() {
	 	return this.priceId;
	 }
	
	/**
	 * @param priceId int Unique identifier associated with this object&#39;s price
	 */
	 setPriceId(priceId) {
	 	this.priceId = priceId;
	 }
	
	/**
	 * The discount module identifier of the price plan
	 * @return int
	 */
	 getDiscountId() {
	 	return this.discountId;
	 }
	
	/**
	 * @param discountId int The discount module identifier of the price plan
	 */
	 setDiscountId(discountId) {
	 	this.discountId = discountId;
	 }
}
module.exports.PricePlan = PricePlan;

/**
 *
 */
class PreviewModule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPreviewModule';
	}
	
	/**
	 * Preview module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Preview module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Preview module name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Preview module life cycle - for how long the preview module is active
	 * @return int
	 */
	 getLifeCycle() {
	 	return this.lifeCycle;
	 }
	
	/**
	 * @param lifeCycle int Preview module life cycle - for how long the preview module is active
	 */
	 setLifeCycle(lifeCycle) {
	 	this.lifeCycle = lifeCycle;
	 }
	
	/**
	 * The time you can&#39;t buy the item to which the preview module is assigned to again
	 * @return int
	 */
	 getNonRenewablePeriod() {
	 	return this.nonRenewablePeriod;
	 }
	
	/**
	 * @param nonRenewablePeriod int The time you can&#39;t buy the item to which the preview module is assigned to again
	 */
	 setNonRenewablePeriod(nonRenewablePeriod) {
	 	this.nonRenewablePeriod = nonRenewablePeriod;
	 }
}
module.exports.PreviewModule = PreviewModule;

/**
 *
 */
class Subscription extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscription';
	}
	
	/**
	 * Subscription identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Subscription identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * A list of channels associated with this subscription
	 * @return array
	 */
	 getChannels() {
	 	return this.channels;
	 }
	
	/**
	 * @param channels array A list of channels associated with this subscription
	 */
	 setChannels(channels) {
	 	this.channels = channels;
	 }
	
	/**
	 * The first date the subscription is available for purchasing
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The first date the subscription is available for purchasing
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * The last date the subscription is available for purchasing
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int The last date the subscription is available for purchasing
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * A list of file types identifiers that are supported in this subscription
	 * @return array
	 */
	 getFileTypes() {
	 	return this.fileTypes;
	 }
	
	/**
	 * @param fileTypes array A list of file types identifiers that are supported in this subscription
	 */
	 setFileTypes(fileTypes) {
	 	this.fileTypes = fileTypes;
	 }
	
	/**
	 * Denotes whether or not this subscription can be renewed
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * @param isRenewable bool Denotes whether or not this subscription can be renewed
	 */
	 setIsRenewable(isRenewable) {
	 	this.isRenewable = isRenewable;
	 }
	
	/**
	 * Defines the number of times this subscription will be renewed
	 * @return int
	 */
	 getRenewalsNumber() {
	 	return this.renewalsNumber;
	 }
	
	/**
	 * @param renewalsNumber int Defines the number of times this subscription will be renewed
	 */
	 setRenewalsNumber(renewalsNumber) {
	 	this.renewalsNumber = renewalsNumber;
	 }
	
	/**
	 * Indicates whether the subscription will renew forever
	 * @return bool
	 */
	 getIsInfiniteRenewal() {
	 	return this.isInfiniteRenewal;
	 }
	
	/**
	 * @param isInfiniteRenewal bool Indicates whether the subscription will renew forever
	 */
	 setIsInfiniteRenewal(isInfiniteRenewal) {
	 	this.isInfiniteRenewal = isInfiniteRenewal;
	 }
	
	/**
	 * The price of the subscription
	 * @return PriceDetails
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price PriceDetails The price of the subscription
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * The internal discount module for the subscription
	 * @return DiscountModule
	 */
	 getDiscountModule() {
	 	return this.discountModule;
	 }
	
	/**
	 * @param discountModule DiscountModule The internal discount module for the subscription
	 */
	 setDiscountModule(discountModule) {
	 	this.discountModule = discountModule;
	 }
	
	/**
	 * Coupons group for the subscription
	 * @return CouponsGroup
	 */
	 getCouponsGroup() {
	 	return this.couponsGroup;
	 }
	
	/**
	 * @param couponsGroup CouponsGroup Coupons group for the subscription
	 */
	 setCouponsGroup(couponsGroup) {
	 	this.couponsGroup = couponsGroup;
	 }
	
	/**
	 * A list of the name of the subscription on different languages (language code and translation)
	 * @return array
	 */
	 getNames() {
	 	return this.names;
	 }
	
	/**
	 * @param names array A list of the name of the subscription on different languages (language code and translation)
	 */
	 setNames(names) {
	 	this.names = names;
	 }
	
	/**
	 * A list of the descriptions of the subscriptions on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions of the subscriptions on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
	
	/**
	 * Identifier of the media associated with the subscription
	 * @return int
	 */
	 getMediaId() {
	 	return this.mediaId;
	 }
	
	/**
	 * @param mediaId int Identifier of the media associated with the subscription
	 */
	 setMediaId(mediaId) {
	 	this.mediaId = mediaId;
	 }
	
	/**
	 * Subscription order (when returned in methods that retrieve subscriptions)
	 * @return int
	 */
	 getProrityInOrder() {
	 	return this.prorityInOrder;
	 }
	
	/**
	 * @param prorityInOrder int Subscription order (when returned in methods that retrieve subscriptions)
	 */
	 setProrityInOrder(prorityInOrder) {
	 	this.prorityInOrder = prorityInOrder;
	 }
	
	/**
	 * Product code for the subscription
	 * @return string
	 */
	 getProductCode() {
	 	return this.productCode;
	 }
	
	/**
	 * @param productCode string Product code for the subscription
	 */
	 setProductCode(productCode) {
	 	this.productCode = productCode;
	 }
	
	/**
	 * Subscription price plans
	 * @return array
	 */
	 getPricePlans() {
	 	return this.pricePlans;
	 }
	
	/**
	 * @param pricePlans array Subscription price plans
	 */
	 setPricePlans(pricePlans) {
	 	this.pricePlans = pricePlans;
	 }
	
	/**
	 * Subscription preview module
	 * @return PreviewModule
	 */
	 getPreviewModule() {
	 	return this.previewModule;
	 }
	
	/**
	 * @param previewModule PreviewModule Subscription preview module
	 */
	 setPreviewModule(previewModule) {
	 	this.previewModule = previewModule;
	 }
	
	/**
	 * The household limitation module identifier associated with this subscription
	 * @return int
	 */
	 getHouseholdLimitationsId() {
	 	return this.householdLimitationsId;
	 }
	
	/**
	 * @param householdLimitationsId int The household limitation module identifier associated with this subscription
	 */
	 setHouseholdLimitationsId(householdLimitationsId) {
	 	this.householdLimitationsId = householdLimitationsId;
	 }
	
	/**
	 * The subscription grace period in minutes
	 * @return int
	 */
	 getGracePeriodMinutes() {
	 	return this.gracePeriodMinutes;
	 }
	
	/**
	 * @param gracePeriodMinutes int The subscription grace period in minutes
	 */
	 setGracePeriodMinutes(gracePeriodMinutes) {
	 	this.gracePeriodMinutes = gracePeriodMinutes;
	 }
	
	/**
	 * List of premium services included in the subscription
	 * @return array
	 */
	 getPremiumServices() {
	 	return this.premiumServices;
	 }
	
	/**
	 * @param premiumServices array List of premium services included in the subscription
	 */
	 setPremiumServices(premiumServices) {
	 	this.premiumServices = premiumServices;
	 }
	
	/**
	 * The maximum number of times an item in this usage module can be viewed
	 * @return int
	 */
	 getMaxViewsNumber() {
	 	return this.maxViewsNumber;
	 }
	
	/**
	 * @param maxViewsNumber int The maximum number of times an item in this usage module can be viewed
	 */
	 setMaxViewsNumber(maxViewsNumber) {
	 	this.maxViewsNumber = maxViewsNumber;
	 }
	
	/**
	 * The amount time an item is available for viewing since a user started watching the item
	 * @return int
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * @param viewLifeCycle int The amount time an item is available for viewing since a user started watching the item
	 */
	 setViewLifeCycle(viewLifeCycle) {
	 	this.viewLifeCycle = viewLifeCycle;
	 }
	
	/**
	 * Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 * @return int
	 */
	 getWaiverPeriod() {
	 	return this.waiverPeriod;
	 }
	
	/**
	 * @param waiverPeriod int Time period during which the end user can waive his rights to cancel a purchase. When the time period is passed, the purchase can no longer be cancelled
	 */
	 setWaiverPeriod(waiverPeriod) {
	 	this.waiverPeriod = waiverPeriod;
	 }
	
	/**
	 * Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 * @return bool
	 */
	 getIsWaiverEnabled() {
	 	return this.isWaiverEnabled;
	 }
	
	/**
	 * @param isWaiverEnabled bool Indicates whether or not the end user has the right to waive his rights to cancel a purchase
	 */
	 setIsWaiverEnabled(isWaiverEnabled) {
	 	this.isWaiverEnabled = isWaiverEnabled;
	 }
	
	/**
	 * List of permitted user types for the subscription
	 * @return array
	 */
	 getUserTypes() {
	 	return this.userTypes;
	 }
	
	/**
	 * @param userTypes array List of permitted user types for the subscription
	 */
	 setUserTypes(userTypes) {
	 	this.userTypes = userTypes;
	 }
}
module.exports.Subscription = Subscription;

/**
 *
 */
class SubscriptionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionListResponse';
	}
	
	/**
	 * A list of subscriptions
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of subscriptions
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SubscriptionListResponse = SubscriptionListResponse;

/**
 *
 */
class ProductsPriceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductsPriceListResponse';
	}
	
	/**
	 * A list of prices
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of prices
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.ProductsPriceListResponse = ProductsPriceListResponse;

/**
 *
 */
class Entitlement extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlement';
	}
	
	/**
	 * Entitlement type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Entitlement identifier
	 * @return string
	 */
	 getEntitlementId() {
	 	return this.entitlementId;
	 }
	
	/**
	 * The current number of uses
	 * @return int
	 */
	 getCurrentUses() {
	 	return this.currentUses;
	 }
	
	/**
	 * The end date of the entitlement
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * Current date
	 * @return int
	 */
	 getCurrentDate() {
	 	return this.currentDate;
	 }
	
	/**
	 * The last date the item was viewed
	 * @return int
	 */
	 getLastViewDate() {
	 	return this.lastViewDate;
	 }
	
	/**
	 * Purchase date
	 * @return int
	 */
	 getPurchaseDate() {
	 	return this.purchaseDate;
	 }
	
	/**
	 * Purchase identifier (for subscriptions and collections only)
	 * @return int
	 */
	 getPurchaseId() {
	 	return this.purchaseId;
	 }
	
	/**
	 * Payment Method
	 * @return string
	 */
	 getPaymentMethod() {
	 	return this.paymentMethod;
	 }
	
	/**
	 * The UDID of the device from which the purchase was made
	 * @return string
	 */
	 getDeviceUdid() {
	 	return this.deviceUdid;
	 }
	
	/**
	 * The name of the device from which the purchase was made
	 * @return string
	 */
	 getDeviceName() {
	 	return this.deviceName;
	 }
	
	/**
	 * Indicates whether a cancelation window period is enabled
	 * @return bool
	 */
	 getIsCancelationWindowEnabled() {
	 	return this.isCancelationWindowEnabled;
	 }
	
	/**
	 * The maximum number of uses available for this item (only for subscription and PPV)
	 * @return int
	 */
	 getMaxUses() {
	 	return this.maxUses;
	 }
	
	/**
	 * The date of the next renewal (only for subscription)
	 * @return int
	 */
	 getNextRenewalDate() {
	 	return this.nextRenewalDate;
	 }
	
	/**
	 * Indicates whether the subscription is renewable in this purchase (only for subscription)
	 * @return bool
	 */
	 getIsRenewableForPurchase() {
	 	return this.isRenewableForPurchase;
	 }
	
	/**
	 * Indicates whether a subscription is renewable (only for subscription)
	 * @return bool
	 */
	 getIsRenewable() {
	 	return this.isRenewable;
	 }
	
	/**
	 * Media file identifier (only for PPV)
	 * @return int
	 */
	 getMediaFileId() {
	 	return this.mediaFileId;
	 }
	
	/**
	 * Media identifier (only for PPV)
	 * @return int
	 */
	 getMediaId() {
	 	return this.mediaId;
	 }
	
	/**
	 * Indicates whether the user is currently in his grace period entitlement
	 * @return bool
	 */
	 getIsInGracePeriod() {
	 	return this.isInGracePeriod;
	 }
}
module.exports.Entitlement = Entitlement;

/**
 *
 */
class EntitlementListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementListResponse';
	}
	
	/**
	 * A list of entitlements
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of entitlements
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.EntitlementListResponse = EntitlementListResponse;

/**
 *
 */
class HomeNetwork extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHomeNetwork';
	}
	
	/**
	 * Home network identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Home network identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Home network name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Home network name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Home network description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Home network description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Is home network is active
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool Is home network is active
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
}
module.exports.HomeNetwork = HomeNetwork;

/**
 *
 */
class HomeNetworkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHomeNetworkListResponse';
	}
	
	/**
	 * Home networks
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Home networks
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.HomeNetworkListResponse = HomeNetworkListResponse;

/**
 *
 */
class Favorite extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavorite';
	}
	
	/**
	 * AssetInfo Model
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId int AssetInfo Model
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Extra Value
	 * @return string
	 */
	 getExtraData() {
	 	return this.extraData;
	 }
	
	/**
	 * @param extraData string Extra Value
	 */
	 setExtraData(extraData) {
	 	this.extraData = extraData;
	 }
	
	/**
	 * Specifies when was the favorite created. Date and time represented as epoch
	 * @return int
	 */
	 getCreateDate() {
	 	return this.createDate;
	 }
}
module.exports.Favorite = Favorite;

/**
 *
 */
class FavoriteListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavoriteListResponse';
	}
	
	/**
	 * A list of favorites
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of favorites
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.FavoriteListResponse = FavoriteListResponse;

/**
 *
 */
class OTTUserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserListResponse';
	}
	
	/**
	 * A list of users
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array A list of users
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.OTTUserListResponse = OTTUserListResponse;

/**
 *
 */
class AssetStatisticsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatisticsListResponse';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetStatisticsListResponse = AssetStatisticsListResponse;

/**
 *
 */
class SlimAssetInfoWrapper extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSlimAssetInfoWrapper';
	}
	
	/**
	 * Assets
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array Assets
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SlimAssetInfoWrapper = SlimAssetInfoWrapper;

/**
 *
 */
class AssetHistory extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistory';
	}
	
	/**
	 * Asset identifier
	 * @return int
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * Position in seconds of the relevant asset
	 * @return int
	 */
	 getPosition() {
	 	return this.position;
	 }
	
	/**
	 * Duration in seconds of the relevant asset
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * The date when the media was last watched
	 * @return int
	 */
	 getWatchedDate() {
	 	return this.watchedDate;
	 }
	
	/**
	 * Boolean which specifies whether the user finished watching the movie or not
	 * @return bool
	 */
	 getFinishedWatching() {
	 	return this.finishedWatching;
	 }
}
module.exports.AssetHistory = AssetHistory;

/**
 *
 */
class AssetHistoryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistoryListResponse';
	}
	
	/**
	 * WatchHistoryAssets Models
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array WatchHistoryAssets Models
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.AssetHistoryListResponse = AssetHistoryListResponse;

/**
 *
 */
class AppToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppToken';
	}
	
	/**
	 * The id of the application token
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Expiry time of current token (unix timestamp in seconds)
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * @param expiry int Expiry time of current token (unix timestamp in seconds)
	 */
	 setExpiry(expiry) {
	 	this.expiry = expiry;
	 }
	
	/**
	 * Partner identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner identifier
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 * @return int
	 */
	 getSessionDuration() {
	 	return this.sessionDuration;
	 }
	
	/**
	 * @param sessionDuration int Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 */
	 setSessionDuration(sessionDuration) {
	 	this.sessionDuration = sessionDuration;
	 }
	
	/**
	 * The hash type of the token
	 * @return string
	 */
	 getHashType() {
	 	return this.hashType;
	 }
	
	/**
	 * @param hashType string The hash type of the token
	 */
	 setHashType(hashType) {
	 	this.hashType = hashType;
	 }
	
	/**
	 * Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionPrivileges() {
	 	return this.sessionPrivileges;
	 }
	
	/**
	 * @param sessionPrivileges string Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 */
	 setSessionPrivileges(sessionPrivileges) {
	 	this.sessionPrivileges = sessionPrivileges;
	 }
	
	/**
	 * Type of KS (Kaltura Session) that created using the current token
	 * @return int
	 */
	 getSessionType() {
	 	return this.sessionType;
	 }
	
	/**
	 * @param sessionType int Type of KS (Kaltura Session) that created using the current token
	 */
	 setSessionType(sessionType) {
	 	this.sessionType = sessionType;
	 }
	
	/**
	 * Application token status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * The application token
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * @param token string The application token
	 */
	 setToken(token) {
	 	this.token = token;
	 }
	
	/**
	 * User id of KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionUserId() {
	 	return this.sessionUserId;
	 }
	
	/**
	 * @param sessionUserId string User id of KS (Kaltura Session) that created using the current token
	 */
	 setSessionUserId(sessionUserId) {
	 	this.sessionUserId = sessionUserId;
	 }
}
module.exports.AppToken = AppToken;

/**
 *
 */
class Session extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSession';
	}
	
	/**
	 * KS
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string KS
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Session type
	 * @return int
	 */
	 getSessionType() {
	 	return this.sessionType;
	 }
	
	/**
	 * @param sessionType int Session type
	 */
	 setSessionType(sessionType) {
	 	this.sessionType = sessionType;
	 }
	
	/**
	 * Partner identifier
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner identifier
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string User identifier
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * Expiry
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * @param expiry int Expiry
	 */
	 setExpiry(expiry) {
	 	this.expiry = expiry;
	 }
	
	/**
	 * Privileges
	 * @return string
	 */
	 getPrivileges() {
	 	return this.privileges;
	 }
	
	/**
	 * @param privileges string Privileges
	 */
	 setPrivileges(privileges) {
	 	this.privileges = privileges;
	 }
	
	/**
	 * udid
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string udid
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
}
module.exports.Session = Session;

/**
 *
 */
class SessionInfo extends Session{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSessionInfo';
	}
}
module.exports.SessionInfo = SessionInfo;

/**
 *
 */
class AssetFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilter';
	}
}
module.exports.AssetFilter = AssetFilter;

/**
 *
 */
class BundleFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBundleFilter';
	}
	
	/**
	 * Bundle Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int Bundle Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * bundleType - possible values: Subscription or Collection
	 * @return string
	 */
	 getBundleTypeEqual() {
	 	return this.bundleTypeEqual;
	 }
	
	/**
	 * @param bundleTypeEqual string bundleType - possible values: Subscription or Collection
	 */
	 setBundleTypeEqual(bundleTypeEqual) {
	 	this.bundleTypeEqual = bundleTypeEqual;
	 }
}
module.exports.BundleFilter = BundleFilter;

/**
 *
 */
class ChannelExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelExternalFilter';
	}
	
	/**
	 * External Channel Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int External Channel Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return string
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual string UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * FreeTextEqual
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string FreeTextEqual
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
}
module.exports.ChannelExternalFilter = ChannelExternalFilter;

/**
 *
 */
class ChannelFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaChannelFilter';
	}
	
	/**
	 * Channel Id
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int Channel Id
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string 
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
}
module.exports.ChannelFilter = ChannelFilter;

/**
 *
 */
class RelatedFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedFilter';
	}
	
	/**
	 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in). For alpha-numerical fields =, != (not), ~ (like), !~, ^ (starts with). Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 1024 characters)
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in). For alpha-numerical fields =, != (not), ~ (like), !~, ^ (starts with). Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 1024 characters)
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
	
	/**
	 * the ID of the asset for which to return related assets
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string the ID of the asset for which to return related assets
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.RelatedFilter = RelatedFilter;

/**
 *
 */
class RelatedExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedExternalFilter';
	}
	
	/**
	 * the External ID of the asset for which to return related assets
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int the External ID of the asset for which to return related assets
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return int
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual int UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * FreeText
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string FreeText
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
}
module.exports.RelatedExternalFilter = RelatedExternalFilter;

/**
 *
 */
class SearchAssetFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchAssetFilter';
	}
	
	/**
	 * Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in). For alpha-numerical fields =, != (not), ~ (like), !~, ^ (starts with). Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 1024 characters)
	 * @return string
	 */
	 getKSql() {
	 	return this.kSql;
	 }
	
	/**
	 * @param kSql string Search assets using dynamic criteria. Provided collection of nested expressions with key, comparison operators, value, and logical conjunction.
 * Possible keys: any Tag or Meta defined in the system and the following reserved keys: start_date, end_date.
 * epg_id, media_id - for specific asset IDs.
 * geo_block - only valid value is &quot;true&quot;: When enabled, only assets that are not restriced to the user by geo-block rules will return.
 * parental_rules - only valid value is &quot;true&quot;: When enabled, only assets that the user doesn&#39;t need to provide PIN code will return.
 * epg_channel_id – the channel identifier of the EPG program.
 * entitled_assets - valid values: &quot;free&quot;, &quot;entitled&quot;, &quot;both&quot;. free - gets only free to watch assets. entitled - only those that the user is implicitly entitled to watch.
 * Comparison operators: for numerical fields =, &gt;, &gt;=, &lt;, &lt;=, : (in). For alpha-numerical fields =, != (not), ~ (like), !~, ^ (starts with). Logical conjunction: and, or.
 * Search values are limited to 20 characters each.
 * (maximum length of entire filter is 1024 characters)
	 */
	 setKSql(kSql) {
	 	this.kSql = kSql;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * Comma separated list of EPG channel ids to search within
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated list of EPG channel ids to search within
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.SearchAssetFilter = SearchAssetFilter;

/**
 *
 */
class SearchExternalFilter extends AssetFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchExternalFilter';
	}
	
	/**
	 * Query
	 * @return string
	 */
	 getQuery() {
	 	return this.query;
	 }
	
	/**
	 * @param query string Query
	 */
	 setQuery(query) {
	 	this.query = query;
	 }
	
	/**
	 * UtcOffsetEqual
	 * @return int
	 */
	 getUtcOffsetEqual() {
	 	return this.utcOffsetEqual;
	 }
	
	/**
	 * @param utcOffsetEqual int UtcOffsetEqual
	 */
	 setUtcOffsetEqual(utcOffsetEqual) {
	 	this.utcOffsetEqual = utcOffsetEqual;
	 }
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.SearchExternalFilter = SearchExternalFilter;

/**
 *
 */
class AssetFileContext extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFileContext';
	}
	
	/**
	 * viewLifeCycle
	 * @return string
	 */
	 getViewLifeCycle() {
	 	return this.viewLifeCycle;
	 }
	
	/**
	 * fullLifeCycle
	 * @return string
	 */
	 getFullLifeCycle() {
	 	return this.fullLifeCycle;
	 }
	
	/**
	 * isOfflinePlayBack
	 * @return bool
	 */
	 getIsOfflinePlayBack() {
	 	return this.isOfflinePlayBack;
	 }
}
module.exports.AssetFileContext = AssetFileContext;

/**
 *
 */
class AssetStatisticsQuery extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetStatisticsQuery';
	}
	
	/**
	 * Comma separated list of asset identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of asset identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Asset type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
	
	/**
	 * The beginning of the time window to get the statistics for (in epoch)
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int The beginning of the time window to get the statistics for (in epoch)
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * /// The end of the time window to get the statistics for (in epoch)
	 * @return int
	 */
	 getEndDateGreaterThanOrEqual() {
	 	return this.endDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param endDateGreaterThanOrEqual int /// The end of the time window to get the statistics for (in epoch)
	 */
	 setEndDateGreaterThanOrEqual(endDateGreaterThanOrEqual) {
	 	this.endDateGreaterThanOrEqual = endDateGreaterThanOrEqual;
	 }
}
module.exports.AssetStatisticsQuery = AssetStatisticsQuery;

/**
 *
 */
class CDNPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCDNPartnerSettings';
	}
	
	/**
	 * Default CDN adapter identifier
	 * @return int
	 */
	 getDefaultAdapterId() {
	 	return this.defaultAdapterId;
	 }
	
	/**
	 * @param defaultAdapterId int Default CDN adapter identifier
	 */
	 setDefaultAdapterId(defaultAdapterId) {
	 	this.defaultAdapterId = defaultAdapterId;
	 }
	
	/**
	 * Default recording CDN adapter identifier
	 * @return int
	 */
	 getDefaultRecordingAdapterId() {
	 	return this.defaultRecordingAdapterId;
	 }
	
	/**
	 * @param defaultRecordingAdapterId int Default recording CDN adapter identifier
	 */
	 setDefaultRecordingAdapterId(defaultRecordingAdapterId) {
	 	this.defaultRecordingAdapterId = defaultRecordingAdapterId;
	 }
}
module.exports.CDNPartnerSettings = CDNPartnerSettings;

/**
 *
 */
class RegionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegionFilter';
	}
	
	/**
	 * List of comma separated regions external identifiers
	 * @return string
	 */
	 getExternalIdIn() {
	 	return this.externalIdIn;
	 }
	
	/**
	 * @param externalIdIn string List of comma separated regions external identifiers
	 */
	 setExternalIdIn(externalIdIn) {
	 	this.externalIdIn = externalIdIn;
	 }
}
module.exports.RegionFilter = RegionFilter;

/**
 *
 */
class AssetCommentFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetCommentFilter';
	}
	
	/**
	 * Asset Id
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset Id
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset Type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset Type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.AssetCommentFilter = AssetCommentFilter;

/**
 *
 */
class KeyValue extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKeyValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string 
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.KeyValue = KeyValue;

/**
 *
 */
class PaymentGatewayConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentGatewayConfiguration';
	}
	
	/**
	 * Payment gateway configuration
	 * @return array
	 */
	 getPaymentGatewayeConfiguration() {
	 	return this.paymentGatewayeConfiguration;
	 }
	
	/**
	 * @param paymentGatewayeConfiguration array Payment gateway configuration
	 */
	 setPaymentGatewayeConfiguration(paymentGatewayeConfiguration) {
	 	this.paymentGatewayeConfiguration = paymentGatewayeConfiguration;
	 }
}
module.exports.PaymentGatewayConfiguration = PaymentGatewayConfiguration;

/**
 *
 */
class ProductPriceFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProductPriceFilter';
	}
	
	/**
	 * Comma separated subscriptions identifiers
	 * @return string
	 */
	 getSubscriptionIdIn() {
	 	return this.subscriptionIdIn;
	 }
	
	/**
	 * @param subscriptionIdIn string Comma separated subscriptions identifiers
	 */
	 setSubscriptionIdIn(subscriptionIdIn) {
	 	this.subscriptionIdIn = subscriptionIdIn;
	 }
	
	/**
	 * Comma separated media files identifiers
	 * @return string
	 */
	 getFileIdIn() {
	 	return this.fileIdIn;
	 }
	
	/**
	 * @param fileIdIn string Comma separated media files identifiers
	 */
	 setFileIdIn(fileIdIn) {
	 	this.fileIdIn = fileIdIn;
	 }
	
	/**
	 * A flag that indicates if only the lowest price of an item should return
	 * @return bool
	 */
	 getIsLowest() {
	 	return this.isLowest;
	 }
	
	/**
	 * @param isLowest bool A flag that indicates if only the lowest price of an item should return
	 */
	 setIsLowest(isLowest) {
	 	this.isLowest = isLowest;
	 }
	
	/**
	 * Discount coupon code
	 * @return string
	 */
	 getCouponCodeEqual() {
	 	return this.couponCodeEqual;
	 }
	
	/**
	 * @param couponCodeEqual string Discount coupon code
	 */
	 setCouponCodeEqual(couponCodeEqual) {
	 	this.couponCodeEqual = couponCodeEqual;
	 }
}
module.exports.ProductPriceFilter = ProductPriceFilter;

/**
 *
 */
class SeriesRecordingFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSeriesRecordingFilter';
	}
}
module.exports.SeriesRecordingFilter = SeriesRecordingFilter;

/**
 *
 */
class HouseholdQuota extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdQuota';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * Total quota that is allocated to the household
	 * @return int
	 */
	 getTotalQuota() {
	 	return this.totalQuota;
	 }
	
	/**
	 * Available quota that household has remaining
	 * @return int
	 */
	 getAvailableQuota() {
	 	return this.availableQuota;
	 }
}
module.exports.HouseholdQuota = HouseholdQuota;

/**
 *
 */
class InboxMessageFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaInboxMessageFilter';
	}
	
	/**
	 * List of inbox message types to search within
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string List of inbox message types to search within
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * createdAtGreaterThanOrEqual
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int createdAtGreaterThanOrEqual
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * createdAtLessThanOrEqual
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int createdAtLessThanOrEqual
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
}
module.exports.InboxMessageFilter = InboxMessageFilter;

/**
 *
 */
class MessageTemplate extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMessageTemplate';
	}
	
	/**
	 * The message template with placeholders
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string The message template with placeholders
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Default date format for the date &amp; time entries used in the template
	 * @return string
	 */
	 getDateFormat() {
	 	return this.dateFormat;
	 }
	
	/**
	 * @param dateFormat string Default date format for the date &amp; time entries used in the template
	 */
	 setDateFormat(dateFormat) {
	 	this.dateFormat = dateFormat;
	 }
	
	/**
	 * Template type. Possible values: Series
	 * @return int
	 */
	 getAssetType() {
	 	return this.assetType;
	 }
	
	/**
	 * @param assetType int Template type. Possible values: Series
	 */
	 setAssetType(assetType) {
	 	this.assetType = assetType;
	 }
	
	/**
	 * Sound file name to play upon message arrival to the device (if supported by target device)
	 * @return string
	 */
	 getSound() {
	 	return this.sound;
	 }
	
	/**
	 * @param sound string Sound file name to play upon message arrival to the device (if supported by target device)
	 */
	 setSound(sound) {
	 	this.sound = sound;
	 }
	
	/**
	 * an optional action
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string an optional action
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * URL template for deep linking. Example - /app/location/{mediaId}
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL template for deep linking. Example - /app/location/{mediaId}
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.MessageTemplate = MessageTemplate;

/**
 *
 */
class FollowTvSeriesFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFollowTvSeriesFilter';
	}
}
module.exports.FollowTvSeriesFilter = FollowTvSeriesFilter;

/**
 *
 */
class PersonalFeedFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPersonalFeedFilter';
	}
}
module.exports.PersonalFeedFilter = PersonalFeedFilter;

/**
 *
 */
class Ppv extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPpv';
	}
	
	/**
	 * PPV identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string PPV identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * the name for the ppv
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string the name for the ppv
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The price of the ppv
	 * @return PriceDetails
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price PriceDetails The price of the ppv
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * A list of file types identifiers that are supported in this ppv
	 * @return array
	 */
	 getFileTypes() {
	 	return this.fileTypes;
	 }
	
	/**
	 * @param fileTypes array A list of file types identifiers that are supported in this ppv
	 */
	 setFileTypes(fileTypes) {
	 	this.fileTypes = fileTypes;
	 }
	
	/**
	 * The internal discount module for the ppv
	 * @return DiscountModule
	 */
	 getDiscountModules() {
	 	return this.discountModules;
	 }
	
	/**
	 * @param discountModules DiscountModule The internal discount module for the ppv
	 */
	 setDiscountModules(discountModules) {
	 	this.discountModules = discountModules;
	 }
	
	/**
	 * Coupons group for the ppv
	 * @return CouponsGroup
	 */
	 getCouponsGroup() {
	 	return this.couponsGroup;
	 }
	
	/**
	 * @param couponsGroup CouponsGroup Coupons group for the ppv
	 */
	 setCouponsGroup(couponsGroup) {
	 	this.couponsGroup = couponsGroup;
	 }
	
	/**
	 * A list of the descriptions of the ppv on different languages (language code and translation)
	 * @return array
	 */
	 getDescriptions() {
	 	return this.descriptions;
	 }
	
	/**
	 * @param descriptions array A list of the descriptions of the ppv on different languages (language code and translation)
	 */
	 setDescriptions(descriptions) {
	 	this.descriptions = descriptions;
	 }
	
	/**
	 * Product code for the ppv
	 * @return string
	 */
	 getProductCode() {
	 	return this.productCode;
	 }
	
	/**
	 * @param productCode string Product code for the ppv
	 */
	 setProductCode(productCode) {
	 	this.productCode = productCode;
	 }
	
	/**
	 * Indicates whether or not this ppv can be purchased standalone or only as part of a subscription
	 * @return bool
	 */
	 getIsSubscriptionOnly() {
	 	return this.isSubscriptionOnly;
	 }
	
	/**
	 * @param isSubscriptionOnly bool Indicates whether or not this ppv can be purchased standalone or only as part of a subscription
	 */
	 setIsSubscriptionOnly(isSubscriptionOnly) {
	 	this.isSubscriptionOnly = isSubscriptionOnly;
	 }
	
	/**
	 * Indicates whether or not this ppv can be consumed only on the first device
	 * @return bool
	 */
	 getFirstDeviceLimitation() {
	 	return this.firstDeviceLimitation;
	 }
	
	/**
	 * @param firstDeviceLimitation bool Indicates whether or not this ppv can be consumed only on the first device
	 */
	 setFirstDeviceLimitation(firstDeviceLimitation) {
	 	this.firstDeviceLimitation = firstDeviceLimitation;
	 }
	
	/**
	 * PPV usage module
	 * @return UsageModule
	 */
	 getUsageModule() {
	 	return this.usageModule;
	 }
	
	/**
	 * @param usageModule UsageModule PPV usage module
	 */
	 setUsageModule(usageModule) {
	 	this.usageModule = usageModule;
	 }
}
module.exports.Ppv = Ppv;

/**
 *
 */
class RecordingFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordingFilter';
	}
	
	/**
	 * Recording Statuses
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string Recording Statuses
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * KSQL expression
	 * @return string
	 */
	 getFilterExpression() {
	 	return this.filterExpression;
	 }
	
	/**
	 * @param filterExpression string KSQL expression
	 */
	 setFilterExpression(filterExpression) {
	 	this.filterExpression = filterExpression;
	 }
}
module.exports.RecordingFilter = RecordingFilter;

/**
 *
 */
class LicensedUrl extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrl';
	}
	
	/**
	 * Main licensed URL
	 * @return string
	 */
	 getMainUrl() {
	 	return this.mainUrl;
	 }
	
	/**
	 * @param mainUrl string Main licensed URL
	 */
	 setMainUrl(mainUrl) {
	 	this.mainUrl = mainUrl;
	 }
	
	/**
	 * An alternate URL to use in case the main fails
	 * @return string
	 */
	 getAltUrl() {
	 	return this.altUrl;
	 }
	
	/**
	 * @param altUrl string An alternate URL to use in case the main fails
	 */
	 setAltUrl(altUrl) {
	 	this.altUrl = altUrl;
	 }
}
module.exports.LicensedUrl = LicensedUrl;

/**
 *
 */
class LicensedUrlBaseRequest extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlBaseRequest';
	}
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string Asset identifier
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.LicensedUrlBaseRequest = LicensedUrlBaseRequest;

/**
 *
 */
class LicensedUrlMediaRequest extends LicensedUrlBaseRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlMediaRequest';
	}
	
	/**
	 * Identifier of the content to get the link for (file identifier)
	 * @return int
	 */
	 getContentId() {
	 	return this.contentId;
	 }
	
	/**
	 * @param contentId int Identifier of the content to get the link for (file identifier)
	 */
	 setContentId(contentId) {
	 	this.contentId = contentId;
	 }
	
	/**
	 * Base URL for the licensed URLs
	 * @return string
	 */
	 getBaseUrl() {
	 	return this.baseUrl;
	 }
	
	/**
	 * @param baseUrl string Base URL for the licensed URLs
	 */
	 setBaseUrl(baseUrl) {
	 	this.baseUrl = baseUrl;
	 }
}
module.exports.LicensedUrlMediaRequest = LicensedUrlMediaRequest;

/**
 *
 */
class LicensedUrlEpgRequest extends LicensedUrlMediaRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlEpgRequest';
	}
	
	/**
	 * The stream type to get the URL for
	 * @return string
	 */
	 getStreamType() {
	 	return this.streamType;
	 }
	
	/**
	 * @param streamType string The stream type to get the URL for
	 */
	 setStreamType(streamType) {
	 	this.streamType = streamType;
	 }
	
	/**
	 * The start date of the stream (epoch)
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int The start date of the stream (epoch)
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
}
module.exports.LicensedUrlEpgRequest = LicensedUrlEpgRequest;

/**
 *
 */
class LicensedUrlRecordingRequest extends LicensedUrlBaseRequest{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLicensedUrlRecordingRequest';
	}
	
	/**
	 * The file type for the URL
	 * @return string
	 */
	 getFileType() {
	 	return this.fileType;
	 }
	
	/**
	 * @param fileType string The file type for the URL
	 */
	 setFileType(fileType) {
	 	this.fileType = fileType;
	 }
}
module.exports.LicensedUrlRecordingRequest = LicensedUrlRecordingRequest;

/**
 *
 */
class RegistryResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegistryResponse';
	}
	
	/**
	 * Announcement Id
	 * @return int
	 */
	 getAnnouncementId() {
	 	return this.announcementId;
	 }
	
	/**
	 * @param announcementId int Announcement Id
	 */
	 setAnnouncementId(announcementId) {
	 	this.announcementId = announcementId;
	 }
	
	/**
	 * Key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string Key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
}
module.exports.RegistryResponse = RegistryResponse;

/**
 *
 */
class NotificationsPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotificationsPartnerSettings';
	}
	
	/**
	 * Push notification capability is enabled for the account
	 * @return bool
	 */
	 getPushNotificationEnabled() {
	 	return this.pushNotificationEnabled;
	 }
	
	/**
	 * @param pushNotificationEnabled bool Push notification capability is enabled for the account
	 */
	 setPushNotificationEnabled(pushNotificationEnabled) {
	 	this.pushNotificationEnabled = pushNotificationEnabled;
	 }
	
	/**
	 * System announcement capability is enabled for the account
	 * @return bool
	 */
	 getPushSystemAnnouncementsEnabled() {
	 	return this.pushSystemAnnouncementsEnabled;
	 }
	
	/**
	 * @param pushSystemAnnouncementsEnabled bool System announcement capability is enabled for the account
	 */
	 setPushSystemAnnouncementsEnabled(pushSystemAnnouncementsEnabled) {
	 	this.pushSystemAnnouncementsEnabled = pushSystemAnnouncementsEnabled;
	 }
	
	/**
	 * Window start time (UTC) for send automated push messages
	 * @return int
	 */
	 getPushStartHour() {
	 	return this.pushStartHour;
	 }
	
	/**
	 * @param pushStartHour int Window start time (UTC) for send automated push messages
	 */
	 setPushStartHour(pushStartHour) {
	 	this.pushStartHour = pushStartHour;
	 }
	
	/**
	 * Window end time (UTC) for send automated push messages
	 * @return int
	 */
	 getPushEndHour() {
	 	return this.pushEndHour;
	 }
	
	/**
	 * @param pushEndHour int Window end time (UTC) for send automated push messages
	 */
	 setPushEndHour(pushEndHour) {
	 	this.pushEndHour = pushEndHour;
	 }
	
	/**
	 * Inbox enabled
	 * @return bool
	 */
	 getInboxEnabled() {
	 	return this.inboxEnabled;
	 }
	
	/**
	 * @param inboxEnabled bool Inbox enabled
	 */
	 setInboxEnabled(inboxEnabled) {
	 	this.inboxEnabled = inboxEnabled;
	 }
	
	/**
	 * Message TTL in days
	 * @return int
	 */
	 getMessageTTLDays() {
	 	return this.messageTTLDays;
	 }
	
	/**
	 * @param messageTTLDays int Message TTL in days
	 */
	 setMessageTTLDays(messageTTLDays) {
	 	this.messageTTLDays = messageTTLDays;
	 }
	
	/**
	 * Automatic issue follow notification
	 * @return bool
	 */
	 getAutomaticIssueFollowNotification() {
	 	return this.automaticIssueFollowNotification;
	 }
	
	/**
	 * @param automaticIssueFollowNotification bool Automatic issue follow notification
	 */
	 setAutomaticIssueFollowNotification(automaticIssueFollowNotification) {
	 	this.automaticIssueFollowNotification = automaticIssueFollowNotification;
	 }
	
	/**
	 * Topic expiration duration in days
	 * @return int
	 */
	 getTopicExpirationDurationDays() {
	 	return this.topicExpirationDurationDays;
	 }
	
	/**
	 * @param topicExpirationDurationDays int Topic expiration duration in days
	 */
	 setTopicExpirationDurationDays(topicExpirationDurationDays) {
	 	this.topicExpirationDurationDays = topicExpirationDurationDays;
	 }
}
module.exports.NotificationsPartnerSettings = NotificationsPartnerSettings;

/**
 *
 */
class NotificationsSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotificationsSettings';
	}
	
	/**
	 * Specify if the user want to receive push notifications or not
	 * @return bool
	 */
	 getPushNotificationEnabled() {
	 	return this.pushNotificationEnabled;
	 }
	
	/**
	 * @param pushNotificationEnabled bool Specify if the user want to receive push notifications or not
	 */
	 setPushNotificationEnabled(pushNotificationEnabled) {
	 	this.pushNotificationEnabled = pushNotificationEnabled;
	 }
	
	/**
	 * Specify if the user will be notified for followed content via push. (requires push_notification_enabled to be enabled)
	 * @return bool
	 */
	 getPushFollowEnabled() {
	 	return this.pushFollowEnabled;
	 }
	
	/**
	 * @param pushFollowEnabled bool Specify if the user will be notified for followed content via push. (requires push_notification_enabled to be enabled)
	 */
	 setPushFollowEnabled(pushFollowEnabled) {
	 	this.pushFollowEnabled = pushFollowEnabled;
	 }
}
module.exports.NotificationsSettings = NotificationsSettings;

/**
 *
 */
class PaymentMethodProfileFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPaymentMethodProfileFilter';
	}
	
	/**
	 * Payment gateway identifier to list the payment methods for
	 * @return int
	 */
	 getPaymentGatewayIdEqual() {
	 	return this.paymentGatewayIdEqual;
	 }
	
	/**
	 * @param paymentGatewayIdEqual int Payment gateway identifier to list the payment methods for
	 */
	 setPaymentGatewayIdEqual(paymentGatewayIdEqual) {
	 	this.paymentGatewayIdEqual = paymentGatewayIdEqual;
	 }
}
module.exports.PaymentMethodProfileFilter = PaymentMethodProfileFilter;

/**
 *
 */
class TimeShiftedTvPartnerSettings extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTimeShiftedTvPartnerSettings';
	}
	
	/**
	 * Is catch-up enabled
	 * @return bool
	 */
	 getCatchUpEnabled() {
	 	return this.catchUpEnabled;
	 }
	
	/**
	 * @param catchUpEnabled bool Is catch-up enabled
	 */
	 setCatchUpEnabled(catchUpEnabled) {
	 	this.catchUpEnabled = catchUpEnabled;
	 }
	
	/**
	 * Is c-dvr enabled
	 * @return bool
	 */
	 getCdvrEnabled() {
	 	return this.cdvrEnabled;
	 }
	
	/**
	 * @param cdvrEnabled bool Is c-dvr enabled
	 */
	 setCdvrEnabled(cdvrEnabled) {
	 	this.cdvrEnabled = cdvrEnabled;
	 }
	
	/**
	 * Is start-over enabled
	 * @return bool
	 */
	 getStartOverEnabled() {
	 	return this.startOverEnabled;
	 }
	
	/**
	 * @param startOverEnabled bool Is start-over enabled
	 */
	 setStartOverEnabled(startOverEnabled) {
	 	this.startOverEnabled = startOverEnabled;
	 }
	
	/**
	 * Is trick-play enabled
	 * @return bool
	 */
	 getTrickPlayEnabled() {
	 	return this.trickPlayEnabled;
	 }
	
	/**
	 * @param trickPlayEnabled bool Is trick-play enabled
	 */
	 setTrickPlayEnabled(trickPlayEnabled) {
	 	this.trickPlayEnabled = trickPlayEnabled;
	 }
	
	/**
	 * Is recording schedule window enabled
	 * @return bool
	 */
	 getRecordingScheduleWindowEnabled() {
	 	return this.recordingScheduleWindowEnabled;
	 }
	
	/**
	 * @param recordingScheduleWindowEnabled bool Is recording schedule window enabled
	 */
	 setRecordingScheduleWindowEnabled(recordingScheduleWindowEnabled) {
	 	this.recordingScheduleWindowEnabled = recordingScheduleWindowEnabled;
	 }
	
	/**
	 * Is recording protection enabled
	 * @return bool
	 */
	 getProtectionEnabled() {
	 	return this.protectionEnabled;
	 }
	
	/**
	 * @param protectionEnabled bool Is recording protection enabled
	 */
	 setProtectionEnabled(protectionEnabled) {
	 	this.protectionEnabled = protectionEnabled;
	 }
	
	/**
	 * Catch-up buffer length
	 * @return int
	 */
	 getCatchUpBufferLength() {
	 	return this.catchUpBufferLength;
	 }
	
	/**
	 * @param catchUpBufferLength int Catch-up buffer length
	 */
	 setCatchUpBufferLength(catchUpBufferLength) {
	 	this.catchUpBufferLength = catchUpBufferLength;
	 }
	
	/**
	 * Trick play buffer length
	 * @return int
	 */
	 getTrickPlayBufferLength() {
	 	return this.trickPlayBufferLength;
	 }
	
	/**
	 * @param trickPlayBufferLength int Trick play buffer length
	 */
	 setTrickPlayBufferLength(trickPlayBufferLength) {
	 	this.trickPlayBufferLength = trickPlayBufferLength;
	 }
	
	/**
	 * Recording schedule window. Indicates how long (in minutes) after the program starts it is allowed to schedule the recording
	 * @return int
	 */
	 getRecordingScheduleWindow() {
	 	return this.recordingScheduleWindow;
	 }
	
	/**
	 * @param recordingScheduleWindow int Recording schedule window. Indicates how long (in minutes) after the program starts it is allowed to schedule the recording
	 */
	 setRecordingScheduleWindow(recordingScheduleWindow) {
	 	this.recordingScheduleWindow = recordingScheduleWindow;
	 }
	
	/**
	 * Indicates how long (in seconds) before the program starts the recording will begin
	 * @return int
	 */
	 getPaddingBeforeProgramStarts() {
	 	return this.paddingBeforeProgramStarts;
	 }
	
	/**
	 * @param paddingBeforeProgramStarts int Indicates how long (in seconds) before the program starts the recording will begin
	 */
	 setPaddingBeforeProgramStarts(paddingBeforeProgramStarts) {
	 	this.paddingBeforeProgramStarts = paddingBeforeProgramStarts;
	 }
	
	/**
	 * Indicates how long (in seconds) after the program ends the recording will end
	 * @return int
	 */
	 getPaddingAfterProgramEnds() {
	 	return this.paddingAfterProgramEnds;
	 }
	
	/**
	 * @param paddingAfterProgramEnds int Indicates how long (in seconds) after the program ends the recording will end
	 */
	 setPaddingAfterProgramEnds(paddingAfterProgramEnds) {
	 	this.paddingAfterProgramEnds = paddingAfterProgramEnds;
	 }
	
	/**
	 * Specify the time in days that a recording should be protected. Start time begins at protection request
	 * @return int
	 */
	 getProtectionPeriod() {
	 	return this.protectionPeriod;
	 }
	
	/**
	 * @param protectionPeriod int Specify the time in days that a recording should be protected. Start time begins at protection request
	 */
	 setProtectionPeriod(protectionPeriod) {
	 	this.protectionPeriod = protectionPeriod;
	 }
	
	/**
	 * Indicates how many percent of the quota can be used for protection
	 * @return int
	 */
	 getProtectionQuotaPercentage() {
	 	return this.protectionQuotaPercentage;
	 }
	
	/**
	 * @param protectionQuotaPercentage int Indicates how many percent of the quota can be used for protection
	 */
	 setProtectionQuotaPercentage(protectionQuotaPercentage) {
	 	this.protectionQuotaPercentage = protectionQuotaPercentage;
	 }
	
	/**
	 * Specify the time in days that a recording should be kept for user. Start time begins with the program end date
	 * @return int
	 */
	 getRecordingLifetimePeriod() {
	 	return this.recordingLifetimePeriod;
	 }
	
	/**
	 * @param recordingLifetimePeriod int Specify the time in days that a recording should be kept for user. Start time begins with the program end date
	 */
	 setRecordingLifetimePeriod(recordingLifetimePeriod) {
	 	this.recordingLifetimePeriod = recordingLifetimePeriod;
	 }
	
	/**
	 * The time in days before the recording lifetime is due from which the client should be able to warn user about deletion
	 * @return int
	 */
	 getCleanupNoticePeroid() {
	 	return this.cleanupNoticePeroid;
	 }
	
	/**
	 * @param cleanupNoticePeroid int The time in days before the recording lifetime is due from which the client should be able to warn user about deletion
	 */
	 setCleanupNoticePeroid(cleanupNoticePeroid) {
	 	this.cleanupNoticePeroid = cleanupNoticePeroid;
	 }
	
	/**
	 * Is recording of series enabled
	 * @return bool
	 */
	 getSeriesRecordingEnabled() {
	 	return this.seriesRecordingEnabled;
	 }
	
	/**
	 * @param seriesRecordingEnabled bool Is recording of series enabled
	 */
	 setSeriesRecordingEnabled(seriesRecordingEnabled) {
	 	this.seriesRecordingEnabled = seriesRecordingEnabled;
	 }
	
	/**
	 * Is recording playback for non-entitled channel enables
	 * @return bool
	 */
	 getNonEntitledChannelPlaybackEnabled() {
	 	return this.nonEntitledChannelPlaybackEnabled;
	 }
	
	/**
	 * @param nonEntitledChannelPlaybackEnabled bool Is recording playback for non-entitled channel enables
	 */
	 setNonEntitledChannelPlaybackEnabled(nonEntitledChannelPlaybackEnabled) {
	 	this.nonEntitledChannelPlaybackEnabled = nonEntitledChannelPlaybackEnabled;
	 }
	
	/**
	 * Is recording playback for non-existing channel enables
	 * @return bool
	 */
	 getNonExistingChannelPlaybackEnabled() {
	 	return this.nonExistingChannelPlaybackEnabled;
	 }
	
	/**
	 * @param nonExistingChannelPlaybackEnabled bool Is recording playback for non-existing channel enables
	 */
	 setNonExistingChannelPlaybackEnabled(nonExistingChannelPlaybackEnabled) {
	 	this.nonExistingChannelPlaybackEnabled = nonExistingChannelPlaybackEnabled;
	 }
}
module.exports.TimeShiftedTvPartnerSettings = TimeShiftedTvPartnerSettings;

/**
 *
 */
class TopicFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTopicFilter';
	}
}
module.exports.TopicFilter = TopicFilter;

/**
 *
 */
class UserAssetsListItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetsListItem';
	}
	
	/**
	 * Asset identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Asset identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * The order index of the asset in the list
	 * @return int
	 */
	 getOrderIndex() {
	 	return this.orderIndex;
	 }
	
	/**
	 * @param orderIndex int The order index of the asset in the list
	 */
	 setOrderIndex(orderIndex) {
	 	this.orderIndex = orderIndex;
	 }
	
	/**
	 * The type of the asset
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the asset
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The identifier of the user who added the item to the list
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The type of the list
	 * @return string
	 */
	 getListType() {
	 	return this.listType;
	 }
	
	/**
	 * @param listType string The type of the list
	 */
	 setListType(listType) {
	 	this.listType = listType;
	 }
}
module.exports.UserAssetsListItem = UserAssetsListItem;

/**
 *
 */
class DeviceFamilyBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeviceFamilyBase';
	}
	
	/**
	 * Device family identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Device family name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Device family name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Max number of devices allowed for this family
	 * @return int
	 */
	 getDeviceLimit() {
	 	return this.deviceLimit;
	 }
	
	/**
	 * @param deviceLimit int Max number of devices allowed for this family
	 */
	 setDeviceLimit(deviceLimit) {
	 	this.deviceLimit = deviceLimit;
	 }
	
	/**
	 * Max number of streams allowed for this family
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * @param concurrentLimit int Max number of streams allowed for this family
	 */
	 setConcurrentLimit(concurrentLimit) {
	 	this.concurrentLimit = concurrentLimit;
	 }
}
module.exports.DeviceFamilyBase = DeviceFamilyBase;

/**
 *
 */
class HouseholdDevice extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDevice';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * @param householdId int Household identifier
	 */
	 setHouseholdId(householdId) {
	 	this.householdId = householdId;
	 }
	
	/**
	 * Device UDID
	 * @return string
	 */
	 getUdid() {
	 	return this.udid;
	 }
	
	/**
	 * @param udid string Device UDID
	 */
	 setUdid(udid) {
	 	this.udid = udid;
	 }
	
	/**
	 * Device name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Device name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Device brand name
	 * @return string
	 */
	 getBrand() {
	 	return this.brand;
	 }
	
	/**
	 * @param brand string Device brand name
	 */
	 setBrand(brand) {
	 	this.brand = brand;
	 }
	
	/**
	 * Device brand identifier
	 * @return int
	 */
	 getBrandId() {
	 	return this.brandId;
	 }
	
	/**
	 * @param brandId int Device brand identifier
	 */
	 setBrandId(brandId) {
	 	this.brandId = brandId;
	 }
	
	/**
	 * Device activation date (epoch)
	 * @return int
	 */
	 getActivatedOn() {
	 	return this.activatedOn;
	 }
	
	/**
	 * @param activatedOn int Device activation date (epoch)
	 */
	 setActivatedOn(activatedOn) {
	 	this.activatedOn = activatedOn;
	 }
	
	/**
	 * Device state
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.HouseholdDevice = HouseholdDevice;

/**
 *
 */
class HouseholdDeviceFamilyLimitations extends DeviceFamilyBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdDeviceFamilyLimitations';
	}
	
	/**
	 * Allowed device change frequency code
	 * @return int
	 */
	 getFrequency() {
	 	return this.frequency;
	 }
	
	/**
	 * @param frequency int Allowed device change frequency code
	 */
	 setFrequency(frequency) {
	 	this.frequency = frequency;
	 }
}
module.exports.HouseholdDeviceFamilyLimitations = HouseholdDeviceFamilyLimitations;

/**
 *
 */
class HouseholdLimitations extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdLimitations';
	}
	
	/**
	 * Household limitation module identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Household limitation module name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Household limitation module name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Max number of streams allowed for the household
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * @param concurrentLimit int Max number of streams allowed for the household
	 */
	 setConcurrentLimit(concurrentLimit) {
	 	this.concurrentLimit = concurrentLimit;
	 }
	
	/**
	 * Max number of devices allowed for the household
	 * @return int
	 */
	 getDeviceLimit() {
	 	return this.deviceLimit;
	 }
	
	/**
	 * @param deviceLimit int Max number of devices allowed for the household
	 */
	 setDeviceLimit(deviceLimit) {
	 	this.deviceLimit = deviceLimit;
	 }
	
	/**
	 * Allowed device change frequency code
	 * @return int
	 */
	 getDeviceFrequency() {
	 	return this.deviceFrequency;
	 }
	
	/**
	 * @param deviceFrequency int Allowed device change frequency code
	 */
	 setDeviceFrequency(deviceFrequency) {
	 	this.deviceFrequency = deviceFrequency;
	 }
	
	/**
	 * Allowed device change frequency description
	 * @return string
	 */
	 getDeviceFrequencyDescription() {
	 	return this.deviceFrequencyDescription;
	 }
	
	/**
	 * @param deviceFrequencyDescription string Allowed device change frequency description
	 */
	 setDeviceFrequencyDescription(deviceFrequencyDescription) {
	 	this.deviceFrequencyDescription = deviceFrequencyDescription;
	 }
	
	/**
	 * Allowed user change frequency code
	 * @return int
	 */
	 getUserFrequency() {
	 	return this.userFrequency;
	 }
	
	/**
	 * @param userFrequency int Allowed user change frequency code
	 */
	 setUserFrequency(userFrequency) {
	 	this.userFrequency = userFrequency;
	 }
	
	/**
	 * Allowed user change frequency description
	 * @return string
	 */
	 getUserFrequencyDescription() {
	 	return this.userFrequencyDescription;
	 }
	
	/**
	 * @param userFrequencyDescription string Allowed user change frequency description
	 */
	 setUserFrequencyDescription(userFrequencyDescription) {
	 	this.userFrequencyDescription = userFrequencyDescription;
	 }
	
	/**
	 * Allowed NPVR Quota in Seconds
	 * @return int
	 */
	 getNpvrQuotaInSeconds() {
	 	return this.npvrQuotaInSeconds;
	 }
	
	/**
	 * @param npvrQuotaInSeconds int Allowed NPVR Quota in Seconds
	 */
	 setNpvrQuotaInSeconds(npvrQuotaInSeconds) {
	 	this.npvrQuotaInSeconds = npvrQuotaInSeconds;
	 }
	
	/**
	 * Max number of users allowed for the household
	 * @return int
	 */
	 getUsersLimit() {
	 	return this.usersLimit;
	 }
	
	/**
	 * @param usersLimit int Max number of users allowed for the household
	 */
	 setUsersLimit(usersLimit) {
	 	this.usersLimit = usersLimit;
	 }
	
	/**
	 * Device families limitations
	 * @return array
	 */
	 getDeviceFamiliesLimitations() {
	 	return this.deviceFamiliesLimitations;
	 }
	
	/**
	 * @param deviceFamiliesLimitations array Device families limitations
	 */
	 setDeviceFamiliesLimitations(deviceFamiliesLimitations) {
	 	this.deviceFamiliesLimitations = deviceFamiliesLimitations;
	 }
}
module.exports.HouseholdLimitations = HouseholdLimitations;

/**
 *
 */
class ExportTaskFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExportTaskFilter';
	}
	
	/**
	 * Comma separated tasks identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated tasks identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.ExportTaskFilter = ExportTaskFilter;

/**
 *
 */
class PartnerConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerConfiguration';
	}
}
module.exports.PartnerConfiguration = PartnerConfiguration;

/**
 *
 */
class BillingPartnerConfig extends PartnerConfiguration{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBillingPartnerConfig';
	}
	
	/**
	 * configuration value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string configuration value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * partner configuration type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string partner configuration type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.BillingPartnerConfig = BillingPartnerConfig;

/**
 *
 */
class OSSAdapterBaseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOSSAdapterBaseProfile';
	}
	
	/**
	 * OSS adapter id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * OSS adapter name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string OSS adapter name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.OSSAdapterBaseProfile = OSSAdapterBaseProfile;

/**
 *
 */
class OSSAdapterProfile extends OSSAdapterBaseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOSSAdapterProfile';
	}
	
	/**
	 * OSS adapter active status
	 * @return bool
	 */
	 getIsActive() {
	 	return this.isActive;
	 }
	
	/**
	 * @param isActive bool OSS adapter active status
	 */
	 setIsActive(isActive) {
	 	this.isActive = isActive;
	 }
	
	/**
	 * OSS adapter adapter URL
	 * @return string
	 */
	 getAdapterUrl() {
	 	return this.adapterUrl;
	 }
	
	/**
	 * @param adapterUrl string OSS adapter adapter URL
	 */
	 setAdapterUrl(adapterUrl) {
	 	this.adapterUrl = adapterUrl;
	 }
	
	/**
	 * OSS adapter extra parameters
	 * @return map
	 */
	 getOssAdapterSettings() {
	 	return this.ossAdapterSettings;
	 }
	
	/**
	 * @param ossAdapterSettings map OSS adapter extra parameters
	 */
	 setOssAdapterSettings(ossAdapterSettings) {
	 	this.ossAdapterSettings = ossAdapterSettings;
	 }
	
	/**
	 * OSS adapter external identifier
	 * @return string
	 */
	 getExternalIdentifier() {
	 	return this.externalIdentifier;
	 }
	
	/**
	 * @param externalIdentifier string OSS adapter external identifier
	 */
	 setExternalIdentifier(externalIdentifier) {
	 	this.externalIdentifier = externalIdentifier;
	 }
	
	/**
	 * Shared Secret
	 * @return string
	 */
	 getSharedSecret() {
	 	return this.sharedSecret;
	 }
}
module.exports.OSSAdapterProfile = OSSAdapterProfile;

/**
 *
 */
class LoginSession extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLoginSession';
	}
	
	/**
	 * Access token in a KS format
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string Access token in a KS format
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Refresh Token
	 * @return string
	 */
	 getRefreshToken() {
	 	return this.refreshToken;
	 }
	
	/**
	 * @param refreshToken string Refresh Token
	 */
	 setRefreshToken(refreshToken) {
	 	this.refreshToken = refreshToken;
	 }
}
module.exports.LoginSession = LoginSession;

/**
 *
 */
class UserAssetRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAssetRuleFilter';
	}
	
	/**
	 * Asset identifier to filter by
	 * @return int
	 */
	 getAssetIdEqual() {
	 	return this.assetIdEqual;
	 }
	
	/**
	 * @param assetIdEqual int Asset identifier to filter by
	 */
	 setAssetIdEqual(assetIdEqual) {
	 	this.assetIdEqual = assetIdEqual;
	 }
	
	/**
	 * Asset type to filter by - 0 = EPG, 1 = media
	 * @return int
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual int Asset type to filter by - 0 = EPG, 1 = media
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.UserAssetRuleFilter = UserAssetRuleFilter;

/**
 *
 */
class AssetHistoryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetHistoryFilter';
	}
	
	/**
	 * Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string Comma separated list of asset types to search within.
 * Possible values: 0 – EPG linear programs entries, any media type ID (according to media type IDs defined dynamically in the system).
 * If omitted – all types should be included
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * Comma separated list of asset identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of asset identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Which type of recently watched media to include in the result – those that finished watching, those that are in progress or both.
 * If omitted or specified filter = all – return all types.
 * Allowed values: progress – return medias that are in-progress, done – return medias that finished watching
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string Which type of recently watched media to include in the result – those that finished watching, those that are in progress or both.
 * If omitted or specified filter = all – return all types.
 * Allowed values: progress – return medias that are in-progress, done – return medias that finished watching
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
}
module.exports.AssetHistoryFilter = AssetHistoryFilter;

/**
 *
 */
class Household extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHousehold';
	}
	
	/**
	 * Household identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Household name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Household name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Household description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Household description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Household external identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string Household external identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Household limitation module identifier
	 * @return int
	 */
	 getHouseholdLimitationsId() {
	 	return this.householdLimitationsId;
	 }
	
	/**
	 * @param householdLimitationsId int Household limitation module identifier
	 */
	 setHouseholdLimitationsId(householdLimitationsId) {
	 	this.householdLimitationsId = householdLimitationsId;
	 }
	
	/**
	 * The max number of the devices that can be added to the household
	 * @return int
	 */
	 getDevicesLimit() {
	 	return this.devicesLimit;
	 }
	
	/**
	 * @param devicesLimit int The max number of the devices that can be added to the household
	 */
	 setDevicesLimit(devicesLimit) {
	 	this.devicesLimit = devicesLimit;
	 }
	
	/**
	 * The max number of the users that can be added to the household
	 * @return int
	 */
	 getUsersLimit() {
	 	return this.usersLimit;
	 }
	
	/**
	 * @param usersLimit int The max number of the users that can be added to the household
	 */
	 setUsersLimit(usersLimit) {
	 	this.usersLimit = usersLimit;
	 }
	
	/**
	 * The max number of concurrent streams in the household
	 * @return int
	 */
	 getConcurrentLimit() {
	 	return this.concurrentLimit;
	 }
	
	/**
	 * @param concurrentLimit int The max number of concurrent streams in the household
	 */
	 setConcurrentLimit(concurrentLimit) {
	 	this.concurrentLimit = concurrentLimit;
	 }
	
	/**
	 * The households region identifier
	 * @return int
	 */
	 getRegionId() {
	 	return this.regionId;
	 }
	
	/**
	 * @param regionId int The households region identifier
	 */
	 setRegionId(regionId) {
	 	this.regionId = regionId;
	 }
	
	/**
	 * Household state
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * Is household frequency enabled
	 * @return bool
	 */
	 getIsFrequencyEnabled() {
	 	return this.isFrequencyEnabled;
	 }
	
	/**
	 * @param isFrequencyEnabled bool Is household frequency enabled
	 */
	 setIsFrequencyEnabled(isFrequencyEnabled) {
	 	this.isFrequencyEnabled = isFrequencyEnabled;
	 }
	
	/**
	 * The next time a device is allowed to be removed from the household (epoch)
	 * @return int
	 */
	 getFrequencyNextDeviceAction() {
	 	return this.frequencyNextDeviceAction;
	 }
	
	/**
	 * @param frequencyNextDeviceAction int The next time a device is allowed to be removed from the household (epoch)
	 */
	 setFrequencyNextDeviceAction(frequencyNextDeviceAction) {
	 	this.frequencyNextDeviceAction = frequencyNextDeviceAction;
	 }
	
	/**
	 * The next time a user is allowed to be removed from the household (epoch)
	 * @return int
	 */
	 getFrequencyNextUserAction() {
	 	return this.frequencyNextUserAction;
	 }
	
	/**
	 * @param frequencyNextUserAction int The next time a user is allowed to be removed from the household (epoch)
	 */
	 setFrequencyNextUserAction(frequencyNextUserAction) {
	 	this.frequencyNextUserAction = frequencyNextUserAction;
	 }
	
	/**
	 * Household restriction
	 * @return string
	 */
	 getRestriction() {
	 	return this.restriction;
	 }
	
	/**
	 * @param restriction string Household restriction
	 */
	 setRestriction(restriction) {
	 	this.restriction = restriction;
	 }
}
module.exports.Household = Household;

/**
 *
 */
class DevicePin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDevicePin';
	}
	
	/**
	 * Device pin
	 * @return string
	 */
	 getPin() {
	 	return this.pin;
	 }
	
	/**
	 * @param pin string Device pin
	 */
	 setPin(pin) {
	 	this.pin = pin;
	 }
}
module.exports.DevicePin = DevicePin;

/**
 *
 */
class BookmarkFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBookmarkFilter';
	}
	
	/**
	 * Comma separated list of assets identifiers
	 * @return string
	 */
	 getAssetIdIn() {
	 	return this.assetIdIn;
	 }
	
	/**
	 * @param assetIdIn string Comma separated list of assets identifiers
	 */
	 setAssetIdIn(assetIdIn) {
	 	this.assetIdIn = assetIdIn;
	 }
	
	/**
	 * Asset type
	 * @return string
	 */
	 getAssetTypeEqual() {
	 	return this.assetTypeEqual;
	 }
	
	/**
	 * @param assetTypeEqual string Asset type
	 */
	 setAssetTypeEqual(assetTypeEqual) {
	 	this.assetTypeEqual = assetTypeEqual;
	 }
}
module.exports.BookmarkFilter = BookmarkFilter;

/**
 *
 */
class Pin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPin';
	}
	
	/**
	 * PIN code
	 * @return string
	 */
	 getPin() {
	 	return this.pin;
	 }
	
	/**
	 * @param pin string PIN code
	 */
	 setPin(pin) {
	 	this.pin = pin;
	 }
	
	/**
	 * Where the PIN was defined at – account, household or user
	 * @return string
	 */
	 getOrigin() {
	 	return this.origin;
	 }
	
	/**
	 * @param origin string Where the PIN was defined at – account, household or user
	 */
	 setOrigin(origin) {
	 	this.origin = origin;
	 }
	
	/**
	 * PIN type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string PIN type
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.Pin = Pin;

/**
 *
 */
class PurchaseSettings extends Pin{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseSettings';
	}
	
	/**
	 * Purchase permission - block, ask or allow
	 * @return string
	 */
	 getPermission() {
	 	return this.permission;
	 }
	
	/**
	 * @param permission string Purchase permission - block, ask or allow
	 */
	 setPermission(permission) {
	 	this.permission = permission;
	 }
}
module.exports.PurchaseSettings = PurchaseSettings;

/**
 *
 */
class HouseholdUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHouseholdUser';
	}
	
	/**
	 * The identifier of the household
	 * @return int
	 */
	 getHouseholdId() {
	 	return this.householdId;
	 }
	
	/**
	 * @param householdId int The identifier of the household
	 */
	 setHouseholdId(householdId) {
	 	this.householdId = householdId;
	 }
	
	/**
	 * The identifier of the user
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string The identifier of the user
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * True if the user added as master use
	 * @return bool
	 */
	 getIsMaster() {
	 	return this.isMaster;
	 }
	
	/**
	 * @param isMaster bool True if the user added as master use
	 */
	 setIsMaster(isMaster) {
	 	this.isMaster = isMaster;
	 }
	
	/**
	 * The username of the household master for adding a user in status pending for the household master to approve
	 * @return string
	 */
	 getHouseholdMasterUsername() {
	 	return this.householdMasterUsername;
	 }
	
	/**
	 * @param householdMasterUsername string The username of the household master for adding a user in status pending for the household master to approve
	 */
	 setHouseholdMasterUsername(householdMasterUsername) {
	 	this.householdMasterUsername = householdMasterUsername;
	 }
	
	/**
	 * The status of the user in the household
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.HouseholdUser = HouseholdUser;

/**
 *
 */
class SubscriptionFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSubscriptionFilter';
	}
	
	/**
	 * Comma separated subscription identifiers or file identifier (only 1) to get the subscriptions by
	 * @return string
	 */
	 getSubscriptionIdIn() {
	 	return this.subscriptionIdIn;
	 }
	
	/**
	 * @param subscriptionIdIn string Comma separated subscription identifiers or file identifier (only 1) to get the subscriptions by
	 */
	 setSubscriptionIdIn(subscriptionIdIn) {
	 	this.subscriptionIdIn = subscriptionIdIn;
	 }
	
	/**
	 * Media-file identifier to get the subscriptions by
	 * @return int
	 */
	 getMediaFileIdEqual() {
	 	return this.mediaFileIdEqual;
	 }
	
	/**
	 * @param mediaFileIdEqual int Media-file identifier to get the subscriptions by
	 */
	 setMediaFileIdEqual(mediaFileIdEqual) {
	 	this.mediaFileIdEqual = mediaFileIdEqual;
	 }
}
module.exports.SubscriptionFilter = SubscriptionFilter;

/**
 *
 */
class OTTCategory extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTCategory';
	}
	
	/**
	 * Unique identifier for the category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Category name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Category name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Category parent identifier
	 * @return int
	 */
	 getParentCategoryId() {
	 	return this.parentCategoryId;
	 }
	
	/**
	 * @param parentCategoryId int Category parent identifier
	 */
	 setParentCategoryId(parentCategoryId) {
	 	this.parentCategoryId = parentCategoryId;
	 }
	
	/**
	 * Child categories
	 * @return array
	 */
	 getChildCategories() {
	 	return this.childCategories;
	 }
	
	/**
	 * @param childCategories array Child categories
	 */
	 setChildCategories(childCategories) {
	 	this.childCategories = childCategories;
	 }
	
	/**
	 * Category channels
	 * @return array
	 */
	 getChannels() {
	 	return this.channels;
	 }
	
	/**
	 * @param channels array Category channels
	 */
	 setChannels(channels) {
	 	this.channels = channels;
	 }
	
	/**
	 * Category images
	 * @return array
	 */
	 getImages() {
	 	return this.images;
	 }
	
	/**
	 * @param images array Category images
	 */
	 setImages(images) {
	 	this.images = images;
	 }
}
module.exports.OTTCategory = OTTCategory;

/**
 *
 */
class Coupon extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCoupon';
	}
	
	/**
	 * Coupons group details
	 * @return CouponsGroup
	 */
	 getCouponsGroup() {
	 	return this.couponsGroup;
	 }
	
	/**
	 * Coupon status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.Coupon = Coupon;

/**
 *
 */
class EntitlementFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntitlementFilter';
	}
	
	/**
	 * The type of the entitlements to return
	 * @return string
	 */
	 getEntitlementTypeEqual() {
	 	return this.entitlementTypeEqual;
	 }
	
	/**
	 * @param entitlementTypeEqual string The type of the entitlements to return
	 */
	 setEntitlementTypeEqual(entitlementTypeEqual) {
	 	this.entitlementTypeEqual = entitlementTypeEqual;
	 }
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
	
	/**
	 * Is expired
	 * @return bool
	 */
	 getIsExpiredEqual() {
	 	return this.isExpiredEqual;
	 }
	
	/**
	 * @param isExpiredEqual bool Is expired
	 */
	 setIsExpiredEqual(isExpiredEqual) {
	 	this.isExpiredEqual = isExpiredEqual;
	 }
}
module.exports.EntitlementFilter = EntitlementFilter;

/**
 *
 */
class FavoriteFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFavoriteFilter';
	}
	
	/**
	 * Media type to filter by the favorite assets
	 * @return int
	 */
	 getMediaTypeIn() {
	 	return this.mediaTypeIn;
	 }
	
	/**
	 * @param mediaTypeIn int Media type to filter by the favorite assets
	 */
	 setMediaTypeIn(mediaTypeIn) {
	 	this.mediaTypeIn = mediaTypeIn;
	 }
	
	/**
	 * Media identifiers from which to filter the favorite assets
	 * @return string
	 */
	 getMediaIdIn() {
	 	return this.mediaIdIn;
	 }
	
	/**
	 * @param mediaIdIn string Media identifiers from which to filter the favorite assets
	 */
	 setMediaIdIn(mediaIdIn) {
	 	this.mediaIdIn = mediaIdIn;
	 }
}
module.exports.FavoriteFilter = FavoriteFilter;

/**
 *
 */
class Social extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocial';
	}
	
	/**
	 * Facebook identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Full name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Full name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * First name
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string First name
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * Last name
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string Last name
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * User email
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string User email
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * Gender
	 * @return string
	 */
	 getGender() {
	 	return this.gender;
	 }
	
	/**
	 * @param gender string Gender
	 */
	 setGender(gender) {
	 	this.gender = gender;
	 }
	
	/**
	 * User identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * User birthday
	 * @return string
	 */
	 getBirthday() {
	 	return this.birthday;
	 }
	
	/**
	 * @param birthday string User birthday
	 */
	 setBirthday(birthday) {
	 	this.birthday = birthday;
	 }
	
	/**
	 * User model status
 * Possible values: UNKNOWN, OK, ERROR, NOACTION, NOTEXIST, CONFLICT, MERGE, MERGEOK, NEWUSER, MINFRIENDS, INVITEOK, INVITEERROR, ACCESSDENIED, WRONGPASSWORDORUSERNAME, UNMERGEOK
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Profile picture URL
	 * @return string
	 */
	 getPictureUrl() {
	 	return this.pictureUrl;
	 }
	
	/**
	 * @param pictureUrl string Profile picture URL
	 */
	 setPictureUrl(pictureUrl) {
	 	this.pictureUrl = pictureUrl;
	 }
}
module.exports.Social = Social;

/**
 *
 */
class FacebookSocial extends Social{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookSocial';
	}
}
module.exports.FacebookSocial = FacebookSocial;

/**
 *
 */
class LoginResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLoginResponse';
	}
	
	/**
	 * User
	 * @return OTTUser
	 */
	 getUser() {
	 	return this.user;
	 }
	
	/**
	 * @param user OTTUser User
	 */
	 setUser(user) {
	 	this.user = user;
	 }
	
	/**
	 * Kaltura login session details
	 * @return LoginSession
	 */
	 getLoginSession() {
	 	return this.loginSession;
	 }
	
	/**
	 * @param loginSession LoginSession Kaltura login session details
	 */
	 setLoginSession(loginSession) {
	 	this.loginSession = loginSession;
	 }
}
module.exports.LoginResponse = LoginResponse;

/**
 *
 */
class SocialConfig extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSocialConfig';
	}
	
	/**
	 * The application identifier
	 * @return string
	 */
	 getAppId() {
	 	return this.appId;
	 }
	
	/**
	 * @param appId string The application identifier
	 */
	 setAppId(appId) {
	 	this.appId = appId;
	 }
	
	/**
	 * List of application permissions
	 * @return string
	 */
	 getPermissions() {
	 	return this.permissions;
	 }
	
	/**
	 * @param permissions string List of application permissions
	 */
	 setPermissions(permissions) {
	 	this.permissions = permissions;
	 }
}
module.exports.SocialConfig = SocialConfig;

/**
 *
 */
class PurchaseBase extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseBase';
	}
	
	/**
	 * Identifier for the package from which this content is offered
	 * @return int
	 */
	 getProductId() {
	 	return this.productId;
	 }
	
	/**
	 * @param productId int Identifier for the package from which this content is offered
	 */
	 setProductId(productId) {
	 	this.productId = productId;
	 }
	
	/**
	 * Identifier for the content to purchase. Relevant only if Product type = PPV
	 * @return int
	 */
	 getContentId() {
	 	return this.contentId;
	 }
	
	/**
	 * @param contentId int Identifier for the content to purchase. Relevant only if Product type = PPV
	 */
	 setContentId(contentId) {
	 	this.contentId = contentId;
	 }
	
	/**
	 * Package type. Possible values: PPV, Subscription, Collection
	 * @return string
	 */
	 getProductType() {
	 	return this.productType;
	 }
	
	/**
	 * @param productType string Package type. Possible values: PPV, Subscription, Collection
	 */
	 setProductType(productType) {
	 	this.productType = productType;
	 }
}
module.exports.PurchaseBase = PurchaseBase;

/**
 *
 */
class Purchase extends PurchaseBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchase';
	}
	
	/**
	 * Identifier for paying currency, according to ISO 4217
	 * @return string
	 */
	 getCurrency() {
	 	return this.currency;
	 }
	
	/**
	 * @param currency string Identifier for paying currency, according to ISO 4217
	 */
	 setCurrency(currency) {
	 	this.currency = currency;
	 }
	
	/**
	 * Net sum to charge – as a one-time transaction. Price must match the previously provided price for the specified content
	 * @return float
	 */
	 getPrice() {
	 	return this.price;
	 }
	
	/**
	 * @param price float Net sum to charge – as a one-time transaction. Price must match the previously provided price for the specified content
	 */
	 setPrice(price) {
	 	this.price = price;
	 }
	
	/**
	 * Identifier for a pre-entered payment method. If not provided – the household’s default payment method is used
	 * @return int
	 */
	 getPaymentMethodId() {
	 	return this.paymentMethodId;
	 }
	
	/**
	 * @param paymentMethodId int Identifier for a pre-entered payment method. If not provided – the household’s default payment method is used
	 */
	 setPaymentMethodId(paymentMethodId) {
	 	this.paymentMethodId = paymentMethodId;
	 }
	
	/**
	 * Identifier for a pre-associated payment gateway. If not provided – the account’s default payment gateway is used
	 * @return int
	 */
	 getPaymentGatewayId() {
	 	return this.paymentGatewayId;
	 }
	
	/**
	 * @param paymentGatewayId int Identifier for a pre-associated payment gateway. If not provided – the account’s default payment gateway is used
	 */
	 setPaymentGatewayId(paymentGatewayId) {
	 	this.paymentGatewayId = paymentGatewayId;
	 }
	
	/**
	 * Coupon code
	 * @return string
	 */
	 getCoupon() {
	 	return this.coupon;
	 }
	
	/**
	 * @param coupon string Coupon code
	 */
	 setCoupon(coupon) {
	 	this.coupon = coupon;
	 }
}
module.exports.Purchase = Purchase;

/**
 *
 */
class PurchaseSession extends Purchase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPurchaseSession';
	}
	
	/**
	 * Preview module identifier (relevant only for subscription)
	 * @return int
	 */
	 getPreviewModuleId() {
	 	return this.previewModuleId;
	 }
	
	/**
	 * @param previewModuleId int Preview module identifier (relevant only for subscription)
	 */
	 setPreviewModuleId(previewModuleId) {
	 	this.previewModuleId = previewModuleId;
	 }
}
module.exports.PurchaseSession = PurchaseSession;

/**
 *
 */
class ExternalReceipt extends PurchaseBase{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalReceipt';
	}
	
	/**
	 * A unique identifier that was provided by the In-App billing service to validate the purchase
	 * @return string
	 */
	 getReceiptId() {
	 	return this.receiptId;
	 }
	
	/**
	 * @param receiptId string A unique identifier that was provided by the In-App billing service to validate the purchase
	 */
	 setReceiptId(receiptId) {
	 	this.receiptId = receiptId;
	 }
	
	/**
	 * The payment gateway name for the In-App billing service to be used. Possible values: Google/Apple
	 * @return string
	 */
	 getPaymentGatewayName() {
	 	return this.paymentGatewayName;
	 }
	
	/**
	 * @param paymentGatewayName string The payment gateway name for the In-App billing service to be used. Possible values: Google/Apple
	 */
	 setPaymentGatewayName(paymentGatewayName) {
	 	this.paymentGatewayName = paymentGatewayName;
	 }
}
module.exports.ExternalReceipt = ExternalReceipt;

/**
 *
 */
class Transaction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransaction';
	}
	
	/**
	 * Kaltura unique ID representing the transaction
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string Kaltura unique ID representing the transaction
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Transaction reference ID received from the payment gateway.
 * Value is available only if the payment gateway provides this information
	 * @return string
	 */
	 getPaymentGatewayReferenceId() {
	 	return this.paymentGatewayReferenceId;
	 }
	
	/**
	 * @param paymentGatewayReferenceId string Transaction reference ID received from the payment gateway.
 * Value is available only if the payment gateway provides this information
	 */
	 setPaymentGatewayReferenceId(paymentGatewayReferenceId) {
	 	this.paymentGatewayReferenceId = paymentGatewayReferenceId;
	 }
	
	/**
	 * Response ID received from by the payment gateway.
 * Value is available only if the payment gateway provides this information
	 * @return string
	 */
	 getPaymentGatewayResponseId() {
	 	return this.paymentGatewayResponseId;
	 }
	
	/**
	 * @param paymentGatewayResponseId string Response ID received from by the payment gateway.
 * Value is available only if the payment gateway provides this information
	 */
	 setPaymentGatewayResponseId(paymentGatewayResponseId) {
	 	this.paymentGatewayResponseId = paymentGatewayResponseId;
	 }
	
	/**
	 * Transaction state: OK/Pending/Failed
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string Transaction state: OK/Pending/Failed
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * Adapter failure reason code
 * Insufficient funds = 20, Invalid account = 21, User unknown = 22, Reason unknown = 23, Unknown payment gateway response = 24,
 * No response from payment gateway = 25, Exceeded retry limit = 26, Illegal client request = 27, Expired = 28
	 * @return int
	 */
	 getFailReasonCode() {
	 	return this.failReasonCode;
	 }
	
	/**
	 * @param failReasonCode int Adapter failure reason code
 * Insufficient funds = 20, Invalid account = 21, User unknown = 22, Reason unknown = 23, Unknown payment gateway response = 24,
 * No response from payment gateway = 25, Exceeded retry limit = 26, Illegal client request = 27, Expired = 28
	 */
	 setFailReasonCode(failReasonCode) {
	 	this.failReasonCode = failReasonCode;
	 }
	
	/**
	 * Entitlement creation date
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * @param createdAt int Entitlement creation date
	 */
	 setCreatedAt(createdAt) {
	 	this.createdAt = createdAt;
	 }
}
module.exports.Transaction = Transaction;

/**
 *
 */
class TransactionStatus extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransactionStatus';
	}
	
	/**
	 * Payment gateway adapter application state for the transaction to update
	 * @return string
	 */
	 getAdapterTransactionStatus() {
	 	return this.adapterTransactionStatus;
	 }
	
	/**
	 * @param adapterTransactionStatus string Payment gateway adapter application state for the transaction to update
	 */
	 setAdapterTransactionStatus(adapterTransactionStatus) {
	 	this.adapterTransactionStatus = adapterTransactionStatus;
	 }
	
	/**
	 * External transaction identifier
	 * @return string
	 */
	 getExternalId() {
	 	return this.externalId;
	 }
	
	/**
	 * @param externalId string External transaction identifier
	 */
	 setExternalId(externalId) {
	 	this.externalId = externalId;
	 }
	
	/**
	 * Payment gateway transaction status
	 * @return string
	 */
	 getExternalStatus() {
	 	return this.externalStatus;
	 }
	
	/**
	 * @param externalStatus string Payment gateway transaction status
	 */
	 setExternalStatus(externalStatus) {
	 	this.externalStatus = externalStatus;
	 }
	
	/**
	 * Payment gateway message
	 * @return string
	 */
	 getExternalMessage() {
	 	return this.externalMessage;
	 }
	
	/**
	 * @param externalMessage string Payment gateway message
	 */
	 setExternalMessage(externalMessage) {
	 	this.externalMessage = externalMessage;
	 }
	
	/**
	 * The reason the transaction failed
	 * @return int
	 */
	 getFailReason() {
	 	return this.failReason;
	 }
	
	/**
	 * @param failReason int The reason the transaction failed
	 */
	 setFailReason(failReason) {
	 	this.failReason = failReason;
	 }
}
module.exports.TransactionStatus = TransactionStatus;

/**
 *
 */
class UserLoginPin extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginPin';
	}
	
	/**
	 * Generated login pin code
	 * @return string
	 */
	 getPinCode() {
	 	return this.pinCode;
	 }
	
	/**
	 * @param pinCode string Generated login pin code
	 */
	 setPinCode(pinCode) {
	 	this.pinCode = pinCode;
	 }
	
	/**
	 * Login pin expiration time (epoch)
	 * @return int
	 */
	 getExpirationTime() {
	 	return this.expirationTime;
	 }
	
	/**
	 * @param expirationTime int Login pin expiration time (epoch)
	 */
	 setExpirationTime(expirationTime) {
	 	this.expirationTime = expirationTime;
	 }
	
	/**
	 * User Identifier
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
}
module.exports.UserLoginPin = UserLoginPin;

/**
 *
 */
class ParentalRuleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParentalRuleFilter';
	}
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
}
module.exports.ParentalRuleFilter = ParentalRuleFilter;

/**
 *
 */
class TransactionHistoryFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransactionHistoryFilter';
	}
	
	/**
	 * Reference type to filter by
	 * @return string
	 */
	 getEntityReferenceEqual() {
	 	return this.entityReferenceEqual;
	 }
	
	/**
	 * @param entityReferenceEqual string Reference type to filter by
	 */
	 setEntityReferenceEqual(entityReferenceEqual) {
	 	this.entityReferenceEqual = entityReferenceEqual;
	 }
	
	/**
	 * Filter transactions later than specific date
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int Filter transactions later than specific date
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * Filter transactions earlier than specific date
	 * @return int
	 */
	 getEndDateLessThanOrEqual() {
	 	return this.endDateLessThanOrEqual;
	 }
	
	/**
	 * @param endDateLessThanOrEqual int Filter transactions earlier than specific date
	 */
	 setEndDateLessThanOrEqual(endDateLessThanOrEqual) {
	 	this.endDateLessThanOrEqual = endDateLessThanOrEqual;
	 }
}
module.exports.TransactionHistoryFilter = TransactionHistoryFilter;

/**
 *
 */
class UserRoleFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleFilter';
	}
	
	/**
	 * Comma separated roles identifiers
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string Comma separated roles identifiers
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
}
module.exports.UserRoleFilter = UserRoleFilter;

/**
 *
 */
class OTTUserFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOTTUserFilter';
	}
	
	/**
	 * User Filter By
	 * @return string
	 */
	 getUserByEqual() {
	 	return this.userByEqual;
	 }
	
	/**
	 * @param userByEqual string User Filter By
	 */
	 setUserByEqual(userByEqual) {
	 	this.userByEqual = userByEqual;
	 }
	
	/**
	 * The User identifiers
	 * @return string
	 */
	 getValueEqual() {
	 	return this.valueEqual;
	 }
	
	/**
	 * @param valueEqual string The User identifiers
	 */
	 setValueEqual(valueEqual) {
	 	this.valueEqual = valueEqual;
	 }
}
module.exports.OTTUserFilter = OTTUserFilter;
