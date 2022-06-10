import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poolselection',
  templateUrl: './poolselection.component.html',
  styleUrls: ['./poolselection.component.css']
})
export class PoolselectionComponent implements OnInit {

  title = "ng-multiselect-dropdown";
  countries: Array<any> = [];
  selCountries = [
    
  ];
  dropdownSettings: any = {};

  ngOnInit() {
    this.countries = [
      {
        poolid: 1,
        poolname: "India"
      },
      {
        poolid: 2,
        poolname: "Spain"
      },
      {
        poolid: 3,
        poolname: "United Kingdom"
      },
      {
        poolid: 4,
        poolname: "Canada"
//        isDisabled: true
      },
      {
        poolid: 5,
        poolname: "Israel"
      },
      {
        poolid: 6,
        poolname: "Brazil"
      },
      {
        poolid: 7,
        poolname: "Barbados"
      },
      {
        poolid: 8,
        poolname: "Mexico"
      }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "poolid",
      textField: "poolname",
  //    selectAllText: "Select All",
 //     unSelectAllText: "UnSelect All",
 //     itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  get getItems() {
    return this.countries.reduce((acc, curr) => {
      acc[curr.poolid] = curr;
      return acc;
    }, {});
  }

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  /*
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }*/
}