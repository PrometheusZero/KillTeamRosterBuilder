Vue.config.devtools = true;

const commandRoster = new Vue({
  el: '#commandRoster',
  data: {
    roster: [
		{  
			name:"Rapheal",
			href:"#Rapheal",
			model:"Tactical Marine Sergeant",
			description:"With is chainsword in hand, Raphael leads his men into battle",
			cost:13,
			xpcost:0,
			totcost:13,
			specilisation:"Leader",
			skills: ["Gain 1 extra CP per turn"],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Chainsword",range:"M",type:"Melee",str:"U",ap:"0",dam:"1",special:"+1 A"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:0,
			added:false
		},
		{  
			name:"Lando",
			href:"#Lando",
			model:"Intercessor Sergeant",
			description:"Armed with a powersword, Primaris Lando takes on the most heavily armoured foes",
			cost:18,
			xpcost:0,
			totcost:18,
			specilisation:"Leader",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Power Sword",range:"M",type:"Melee",str:"U",ap:"-3",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:1,
			added:false
		},
		{  
			name:"Nicodemus",
			href:"#Nicodemus",
			model:"Tactical Marine Gunner",
			description:"Getting up and close with his deadly meltagun, Nico breaches all.",
			cost:16,
			xpcost:0,
			totcost:16,
			specilisation:"Heavy",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Meltagun",range:"12",type:"Assault 1",str:"8",ap:"-4",dam:"D6",special:"If half range, roll 2 dam dice, pick best"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:2,
			added:false
		},
		{  
			name:"Donatello",
			href:"#Donatello",
			model:"Tactical Marine Gunner",
			description:"No dark corner can hide from Dontello and his righteous flamer.",
			cost:16,
			xpcost:0,
			totcost:16,
			specilisation:"Demolitions",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Flamer",range:"8",type:"Assault D6",str:"4",ap:"0",dam:"1",special:"Auto-hits"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:3,
			added:false
		},
		{  
			name:"Michealangelo",
			href:"#Michealangelo",
			model:"Tactical Marine Gunner",
			description:"Michealangelo has taken smiting foes with his plasmagun to an artform.",
			cost:16,
			xpcost:0,
			totcost:16,
			specilisation:"Veteran",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Plasmagun",range:"24",type:"Rapid Fire 1",str:"7/8",ap:"-3",dam:"1/2",special:"2 fire modes, if TH=1 on high, owner out of action"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:4,
			added:false
		},
		{  
			name:"Castello",
			href:"#Castello",
			model:"Tactical Marine",
			description:"Comminications expert Castello is ever vigillant and watchful",
			cost:12,
			xpcost:0,
			totcost:12,
			specilisation:"Comms",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Boltgun",range:"24",type:"Rapid Fire 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:5,
			added:false
		},
		{  
			name:"Lorenzo",
			href:"#Lorenzo",
			model:"Scout Sergeant",
			description:"Lorenzo has been fighting up cloase and personal since Sgt Raphael was a scout",
			cost:11,
			xpcost:0,
			totcost:11,
			specilisation:"Combat",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Combat Knife",range:"M",type:"Melee",str:"U",ap:"0",dam:"1",special:"+1 A"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:6,
			added:false
		},
		{  
			name:"Alessio",
			href:"#Alessio",
			model:"Scout Gunner",
			description:"Dour Alession reaps all before him with his heavy bolter",
			cost:14,
			xpcost:0,
			totcost:14,
			specilisation:"Heavy",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Heavy Bolter",range:"36",type:"Heavy 3",str:"5",ap:"-1",dam:"1",special:"-"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:7,
			added:false
		},
		{  
			name:"Biagio",
			href:"#Biagio",
			model:"Scout",
			description:"None can slip behind the lines like Biagio and his shotgun Valentina",
			cost:10,
			xpcost:0,
			totcost:10,
			specilisation:"Scout",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Shotgun",range:"12",type:"Assult 2",str:"4",ap:"0",dam:"1",special:"If half range +1 S"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:8,
			added:false
		},
		{  
			name:"Benito",
			href:"#Benito",
			model:"Scout",
			description:"Benito picks of targets with ease with his rifle, concealed by his cloak",
			cost:12,
			xpcost:0,
			totcost:12,
			specilisation:"Sniper",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Sniper Rifle",range:"36",type:"Heavy 1",str:"4",ap:"0",dam:"1",special:"If TW=6, +1 MW"},
				{name:"Camo Cloak",range:"-",type:"-",str:"-",ap:"-",dam:"-",special:"All models -1 TH this model"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:9,
			added:false
		},
		{  
			name:"Donovan",
			href:"#Donovan",
			model:"Reiver Sergeant",
			description:"A new breed killing machine, Primaris Donovan is a flurry of blades",
			cost:17,
			xpcost:0,
			totcost:17,
			specilisation:"Combat",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Heavy Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"-1",dam:"1",special:"-"},
				{name:"Combat Knife",range:"M",type:"Melee",str:"U",ap:"0",dam:"1",special:"+1 A"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"},
				{name:"Shock Grenade",range:"6",type:"Grenade D3",str:"*",ap:"*",dam:"*",special:"-1 TH until end of turn. Cannot overwatch"}
			],
			xp:0,
			key:10,
			added:false
		},
		{  
			name:"Andrea",
			href:"#Andrea",
			model:"Intercessor",
			description:"Primaris Andrea is equiped with the latest comms gear from the Indomitus Crusade",
			cost:15,
			xpcost:0,
			totcost:15,
			specilisation:"Comms",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Rifle",range:"30",type:"Rapid Fire 1",str:"4",ap:"-1",dam:"1",special:"-"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:11,
			added:false
		},
		{  
			name:"Piero",
			href:"#Piero",
			model:"Tactical Marine",
			description:"",
			cost:12,
			xpcost:0,
			totcost:12,
			specilisation:"Tactical Fire Team",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Boltgun",range:"24",type:"Rapid Fire 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:12,
			added:false
		},
		{  
			name:"Vieri",
			href:"#Vieri",
			model:"Scout",
			description:"",
			cost:10,
			xpcost:0,
			totcost:10,
			specilisation:"Scout Fire Team",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Combat Knife",range:"M",type:"Melee",str:"U",ap:"0",dam:"1",special:"+1 A"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:13,
			added:false
		},
		{  
			name:"Bastiano",
			href:"#Bastiano",
			model:"Reiver",
			description:"",
			cost:16,
			xpcost:0,
			totcost:16,
			specilisation:"Reiver Fire Team",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Heavy Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"-1",dam:"1",special:"-"},
				{name:"Combat Knife",range:"M",type:"Melee",str:"U",ap:"0",dam:"1",special:"+1 A"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"},
				{name:"Shock Grenade",range:"6",type:"Grenade D3",str:"*",ap:"*",dam:"*",special:"-1 TH until end of turn. Cannot overwatch"}
			],
			xp:0,
			key:14,
			added:false
		},
		{  
			name:"Luca",
			href:"#Luca",
			model:"Intercessor",
			description:"",
			cost:15,
			xpcost:0,
			totcost:15,
			specilisation:"Intercessor Fire Team",
			skills: [],
			tactics: [],
			level: 0,
			equip:[  
				{name:"Bolt Rifle",range:"30",type:"Rapid Fire 1",str:"4",ap:"-1",dam:"1",special:"-"},
				{name:"Bolt Pistol",range:"12",type:"Pistol 1",str:"4",ap:"0",dam:"1",special:"-"},
				{name:"Frag Grenade",range:"6",type:"Grenade D6",str:"3",ap:"0",dam:"1",special:"-"},
				{name:"Krak Grenade",range:"6",type:"Grenade 1",str:"6",ap:"-1",dam:"D3",special:"-"}
			],
			xp:0,
			key:15,
			added:false
		}
	],
	killTeam: [],
	newb: {
		name:"",
		href:"",
		model:"",
		description:"",
		cost:0,
		xpcost:0,
		totcost:0,
		specilisation:"",
		skills: "",
		tactics: "",
		level: 0,
		equip:[  

		],
		xp:0,
		key:15,
		added:false
	},
	newbGun: {
		name:"",
		range:"",
		type:"",
		str:"",
		ap:"",
		dam:"",
		special:""
	}
  },
  methods: {
  	incExp: function(id){
		this.roster[id].xp += 1;
		
		if(this.roster[id].xp === 3){
			this.roster[id].level = 1;
			this.roster[id].xpcost = 4;
			let skill = prompt("Choose your 2nd skill");
			this.roster[id].skills.push(skill);
		}else if(this.roster[id].xp === 7){
			this.roster[id].level = 2;
			this.roster[id].xpcost = 8;
			let skill = prompt("Choose your 3rd skill");
			this.roster[id].skills.push(skill);
		}else if(this.roster[id].xp === 12){
			this.roster[id].level = 3;
			this.roster[id].xpcost = 12;
			let skill = prompt("Choose your 4th skill");
			this.roster[id].skills.push(skill);
		}
		this.roster[id].totcost = this.roster[id].cost + this.roster[id].xpcost;

	},
	killMe: function(id){
		if(confirm("Are you sure you want to kill this unit")){
			this.roster.splice(id, 1);
		}
		for(let x=0;x<this.roster.length;x++){
			this.roster[x].key = x;
		}
	},
	addToTeam: function(id){
		this.killTeam.push(this.roster[id]);
		this.roster[id].added = true;
	},
	removeFromTeam: function(id){
		console.log("function fires");
		for(let x=0;x<this.killTeam.length;x++){
			console.log("searching for key: " + id + ", looking at key " + this.killTeam[x].key);
			if(this.killTeam[x].key === id){
				console.log("key found: " + this.killTeam[x].key);
				this.killTeam[x].added = false;
				this.killTeam.splice(x, 1);
			}
		}
	},
	addWeapon: function(){
		let weapon = new gun();
		weapon.name = this.newbGun.name;
		weapon.range = this.newbGun.range;
		weapon.type = this.newbGun.type;
		weapon.str = this.newbGun.str;
		weapon.ap = this.newbGun.ap;
		weapon.dam = this.newbGun.dam;
		weapon.special = this.newbGun.special;
		this.newb.equip.push(weapon);
		
		this.newbGun.name = "";
		this.newbGun.range = "";
		this.newbGun.type = "";
		this.newbGun.str = "";
		this.newbGun.ap = "";
		this.newbGun.dam = "";
		this.newbGun.special = "";
	}
  },
  computed: {
  	killTeamPoints: function(){
		let pointsLeft = 100;
		for(let x=0;x<this.killTeam.length;x++){
			pointsLeft -= this.killTeam[x].totcost
		}
		return pointsLeft;
	}
  }
})
