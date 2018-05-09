
import { NavigationActions } from 'react-navigation';

let _navigator;

//Setting top level navigator
function setTopLevelNavigator(navigatorRef){
    _navigator = navigatorRef;
}


// creating the navigation function
function navigate(routeName, params){
    _navigator.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName,
            params,
        })
    );
}

//exporting the navigation function
export default{
    navigate,
    setTopLevelNavigator,
};