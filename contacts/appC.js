var ContactAPP = angular.module('ContactAPP', []);

ContactAPP.controller('ContactCTRL', ContactCTRL);

ContactAPP.controller('HeaderController', HeaderController);

ContactAPP.controller('FooterController', FooterController);

ContactAPP.value("AppDATAName", {"name":"contact apppp", "author":"sukaru", verion:1});

ContactAPP.factory("AppFactoryName", function(){return "hello from factory";});

function ContactCTRL() {

this.contacts = [
{
   "gender":"female",
   "name":{
      "title":"miss",
      "first":"julie",
      "last":"moreau"
   },
   "location":{
      "street":"2120 rue de la baleine",
      "city":"clermont-ferrand",
      "state":"dordogne",
      "postcode":67944
   },
   "email":"julie.moreau@example.com",
   "login":{
      "username":"smalltiger934",
      "password":"install",
      "salt":"dt495ERq",
      "md5":"3e8f29cace7f7b840494a02a673e67a0",
      "sha1":"a58ebbb60eef646d728f6bdcd21831ad023dfae1",
      "sha256":"7837de6b4a25978adfa023581458d770e950ea1b18428a4a5b9222ff4c3d2732"
   },
   "dob":"1976-12-21 13:42:01",
   "registered":"2014-11-05 21:42:40",
   "phone":"05-38-92-80-29",
   "cell":"06-10-42-57-46",
   "id":{
      "name":"INSEE",
      "value":"2761127275766 30"
   },
   "picture":{
      "large":"https://randomuser.me/api/portraits/women/7.jpg",
      "medium":"https://randomuser.me/api/portraits/med/women/7.jpg",
      "thumbnail":"https://randomuser.me/api/portraits/thumb/women/7.jpg"
   },
   "nat":"FR"
},
{
   "gender":"male",
   "name":{
      "title":"mr",
      "first":"adam",
      "last":"larsen"
   },
   "location":{
      "street":"2091 bogfinkevej",
      "city":"københavn sv",
      "state":"nordjylland",
      "postcode":45120
   },
   "email":"adam.larsen@example.com",
   "login":{
      "username":"heavyelephant166",
      "password":"virginie",
      "salt":"aV8nBhyP",
      "md5":"7ae6db0faf5dc934c346758044d6e819",
      "sha1":"cfee38da954a034d5e48e98345d75d678a33d88b",
      "sha256":"8e08289d1735a9e0c33c077f1988525f0318e8e29dc1f5a000614b33b473bd54"
   },
   "dob":"1975-09-08 01:42:46",
   "registered":"2005-04-23 07:44:23",
   "phone":"90003214",
   "cell":"47109741",
   "id":{
      "name":"CPR",
      "value":"121378-4429"
   },
   "picture":{
      "large":"https://randomuser.me/api/portraits/men/73.jpg",
      "medium":"https://randomuser.me/api/portraits/med/men/73.jpg",
      "thumbnail":"https://randomuser.me/api/portraits/thumb/men/73.jpg"
   },
   "nat":"DK"
},
{
   "gender":"male",
   "name":{
      "title":"mr",
      "first":"keith",
      "last":"olson"
   },
   "location":{
      "street":"3647 poplar dr",
      "city":"surprise",
      "state":"minnesota",
      "postcode":25457
   },
   "email":"keith.olson@example.com",
   "login":{
      "username":"greenkoala463",
      "password":"mozart",
      "salt":"AtPMCVZY",
      "md5":"a8e5bf921d57319621992225fc7b7aec",
      "sha1":"5c04c6a4815200d881f084120ddb040dc74c38ad",
      "sha256":"42c1e99052672314415af4b4cae7b0ab156792da8314c64b852759bf79265801"
   },
   "dob":"1974-10-05 20:12:09",
   "registered":"2005-09-26 00:30:11",
   "phone":"(773)-831-8336",
   "cell":"(927)-184-4616",
   "id":{
      "name":"SSN",
      "value":"252-68-9861"
   },
   "picture":{
      "large":"https://randomuser.me/api/portraits/men/77.jpg",
      "medium":"https://randomuser.me/api/portraits/med/men/77.jpg",
      "thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"
   },
   "nat":"US"
},
{
   "gender":"female",
   "name":{
      "title":"mrs",
      "first":"neuci",
      "last":"porto"
   },
   "location":{
      "street":"5846 rua quinze de novembro ",
      "city":"são carlos",
      "state":"maranhão",
      "postcode":73486
   },
   "email":"neuci.porto@example.com",
   "login":{
      "username":"heavydog415",
      "password":"figure",
      "salt":"X5d9chEQ",
      "md5":"458e3459eb9346474d230926a6e196d8",
      "sha1":"d86191e3916a0e22e7f641351b4f6a885fd74219",
      "sha256":"ad1f02c866bfd86b66ee9a48d628f73f5e4a86dff74a9d219c8cfd1b01960f0c"
   },
   "dob":"1975-07-04 18:53:45",
   "registered":"2015-11-25 15:44:00",
   "phone":"(13) 8012-0835",
   "cell":"(09) 5367-3695",
   "id":{
      "name":"",
      "value":null
   },
   "picture":{
      "large":"https://randomuser.me/api/portraits/women/81.jpg",
      "medium":"https://randomuser.me/api/portraits/med/women/81.jpg",
      "thumbnail":"https://randomuser.me/api/portraits/thumb/women/81.jpg"
   },
   "nat":"BR"
}
];


this.selectedContact = this.contacts[1];

this.chooseContact = function (index) {
this.selectedContact = this.contacts[index];

}

}




function HeaderController(AppDATAName, AppFactoryName) {
this.myappheader= AppDATAName.name + " header " + AppFactoryName;
}



function FooterController(AppDATAName) {
	this.myappfooter=AppDATAName.name + " footer";
}