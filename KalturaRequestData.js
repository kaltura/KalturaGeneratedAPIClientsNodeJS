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

class RequestData {

	constructor() {
		this.requestData = {};
	}
	
	/**
	 * @param string clientTag
	 */
	setClientTag(clientTag){
		this.requestData['clientTag'] = clientTag;
		return this;
	};
	
	/**
	 * @return string
	 */
	getClientTag(){
		return this.requestData['clientTag'];
	};
	
	/**
	 * @param string apiVersion
	 */
	setApiVersion(apiVersion){
		this.requestData['apiVersion'] = apiVersion;
		return this;
	};
	
	/**
	 * @return string
	 */
	getApiVersion(){
		return this.requestData['apiVersion'];
	};
	
	/**
	 * Impersonated partner id
	 * 
	 * @param int partnerId
	 */
	setPartnerId(partnerId){
		this.requestData['partnerId'] = partnerId;
		return this;
	};
	
	/**
	 * Impersonated partner id
	 * 
	 * @return int
	 */
	getPartnerId(){
		return this.requestData['partnerId'];
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @param string ks
	 */
	setKs(ks){
		this.requestData['ks'] = ks;
		return this;
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @return string
	 */
	getKs(){
		return this.requestData['ks'];
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @param string sessionId
	 */
	setSessionId(sessionId){
		this.requestData['ks'] = sessionId;
		return this;
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @return string
	 */
	getSessionId(){
		return this.requestData['ks'];
	};
	
	/**
	 * language
	 * 
	 * @param string language
	 */
	setLanguage(language){
		this.requestData['language'] = language;
		return this;
	};
	
	/**
	 * language
	 * 
	 * @return string
	 */
	getLanguage(){
		return this.requestData['language'];
	};
	
}

class VolatileRequestData extends RequestData {

	/**
	 * Response profile - this attribute will be automatically unset after every API call.
	 * 
	 * @param KalturaBaseResponseProfile responseProfile
	 */
	setResponseProfile(responseProfile){
		this.requestData['responseProfile'] = responseProfile;
		return this;
	};
	
	/**
	 * Response profile - this attribute will be automatically unset after every API call.
	 * 
	 * @return KalturaBaseResponseProfile
	 */
	getResponseProfile(){
		return this.requestData['responseProfile'];
	};
	
}

module.exports = {
	RequestData: RequestData,
	VolatileRequestData: VolatileRequestData,
};

