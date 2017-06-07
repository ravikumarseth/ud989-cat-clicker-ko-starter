var Cat = function(data) {
    this.catName  = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.clickCount = ko.observable(data.clickCount);
    this.catLevel = ko.computed(function() {
        var title = "";
        var clicks = this.clickCount();
        if(clicks < 10) {
            title = "Newborn";  
        } else if(clicks < 50){
            title = "Infant";
        } else if(clicks < 100) {
            title = "Child";
        } else if(clicks < 200) {
            title = "Teen";
        } else if(clicks < 500){
            title = "Adult";
        } else {
            title = "Ninja";
        }
        return title;
    }, this);
    this.nickName = ko.observableArray(data.nickName);
};

var initialCats = [
    {
        name: "Tabby",
        imgSrc: "img/22252709_010df3379e_z.jpg",
        clickCount: 0,
        nickName: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        name: "Tiger",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        clickCount: 0,
        nickName: ["Tigtig", "Tig-Bone", "Ms. Tig"]
    },
    {
        name: "Scaredy",
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        clickCount: 0,
        nickName: ["SabSab", "S-Bone", "Mr. S"]
    },
    {
        name: "Shadow",
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        clickCount: 0,
        nickName: ["Sleep Master"]
    },
    {
        name: "Scarlet",
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        clickCount: 0,
        nickName: ["Scabscab", "Scar-Bone", "Mr. Scar"]
    }
];

var ViewModel = function () {
    var that = this;
    this.allCats = ko.observableArray([]);
    initialCats.forEach(function(cat) {
        that.allCats.push(new Cat(cat));
    });
    this.currentCat = ko.observable(this.allCats()[0]);
    this.incrementClickCounter = function() {
        that.currentCat().clickCount(that.currentCat().clickCount() + 1);
    };
    this.selectThisCat = function(clickedCat) {
        that.currentCat(clickedCat);
    };
};

ko.applyBindings(ViewModel);