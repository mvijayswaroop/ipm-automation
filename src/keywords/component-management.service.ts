import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import * as angular from 'angular';
import {COMPONENT_ACTIONS_SERVICE, ComponentActionsService, IComponentActionsService} from 'platform-map/app/services/component-actions/component-actions.service';

/**
 * @automationService ipm-automation.ComponentActions
 * @targetFileName ComponentActions
 */
@Injectable()
export class ComponentActions{

  constructor(
    @Inject(COMPONENT_ACTIONS_SERVICE) private compActionService : IComponentActionsService     
  ) {    
  }

   /**
   * Start a component.
   * @keyword Start Component
   * @param componentName The name of the component to start
   * @returns boolean value indicating whether the operation is sucessful of not.
   */
  public startComponent(componentName: string): Promise<boolean>
  {
    return this.compActionService.startComponent(componentName);
  }
}
// angular.module('ipm-automation').service('ipm-automation.ComponentActions', [
//   (compActionService : IComponentActionsService) => {
//         return new ComponentActions(compActionService);
//   }
// ]);

ionweb
    .module("ipm-automation")
    .service("ComponentActions", 
        ["ComponentActionsService"], 
        (ComponentActionsService:IComponentActionsService) => {
            return new ComponentActions(ComponentActionsService);
        }
    );