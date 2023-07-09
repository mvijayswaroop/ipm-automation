import { ComponentService, IonElement } from 'ion.web/sdk/angular';

const components: Array<ionweb.IComponentType & { componentClass: any }> = [];
/**
 * Component decorator and metadata.
 *
 * @Annotation
 */
export function IonComponent(componentType: ionweb.IComponentType) {
    return (component: any) => {
        components.push({ componentClass: component, ...componentType });
    };
}

export function getComponentTypes(componentService: ComponentService): ionweb.IComponentType[] {
    return components.map((component) => {
        return {
            id: component.id,
            icon: component.icon,
            displayName: component.displayName,
            description: component.description,
            template: componentService.asIonElement(component.componentClass) as IonElement<any>,
            tags: component.tags,
            isHidden: component.isHidden,
            defaultWidth: component.defaultWidth
        } as ionweb.IComponentType;
    });
}
