import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent{
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
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
  ]
}
