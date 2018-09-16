import angular from 'angular'
import angularMeteor from 'angular-meteor';
import template from './forms.html';
import { eits } from '../apis/eit';

class formsCtrl {
    constructor($scope) {
        this.firstname;
        this.surname;
        this.gender;
        this.dob;
        $scope.viewModel(this);

        this.helpers({
            eits() {
                return eits.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            },
            currentUser() {
                return Meteor.user();
            }
        })

        if(this.eits.length == 0) {
            this.content = "No EITs Available";
        }
    }
  save() {
      if (this.firstname === null || this.surname === null || this.gender === null || this.dob === null){
          alert('Cannot Insert Empty Datasets');
      } else {
            eits.insert({
             firstname: this.firstname,
             surname: this.surname,
             gender: this.gender,
             dob: this.dob,
             createdAt: new Date,
             owner: Meteor.userId(),
             username: Meteor.user().username
         });
         this.clearForm();
         alert('EIT Added');
      }
  }

  clearForm () {
    this.firstname = '';
    this.surname='';
    this.gender = '';
    this.dob = '';
  }

  deleteEit(eit) {
      eits.remove(eit._id);
      alert('Eit Removed');
  }

}

export default angular.module('formsSubmit', [
    angularMeteor
])
.component('formsSubmit', {
    templateUrl: 'imports/components/forms.html',
    controller: formsCtrl
});