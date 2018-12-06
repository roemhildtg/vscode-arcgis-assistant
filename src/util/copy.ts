import * as vscode from 'vscode';
import { ArcGISType, ArcGISItem } from './types';
import {copy} from 'copy-paste';

export default function refresh(item : ArcGISItem){
    let prop  : string = '';
    if(item.type === ArcGISType.Item || item.type === ArcGISType.Folder){
        prop = item.id || '';
    } else if(item.type === ArcGISType.Portal){
        prop = item.uri || '';
    }

    copy(prop, () => {
        vscode.window.showInformationMessage('Success! Item was copied to the clipboard');
    });
}