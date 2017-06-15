"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "asasasas",
                file_url: "http://google.com",
                updated_at: "11/11/17",
                image_url: "https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg"
            },
            {
                title: "My Second Doc",
                description: "asasasas",
                file_url: "http://google.com",
                updated_at: "11/11/17",
                image_url: "http://www.labourbeat.org/wp-content/uploads/2016/09/Freelancer-Fair-couple.jpg"
            },
            {
                title: "My Third Doc",
                description: "asasasas",
                file_url: "http://google.com",
                updated_at: "11/11/17",
                image_url: "http://www.top-gadgets.net/gallery/things-you-should-know-before-hiring-a-freelancer-picture/Things-you-should-know-before-hiring-a-freelancer.jpg"
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map