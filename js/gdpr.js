var currentModalType;

var storageItems;
var departmentItems;

var deptTypes;
var cloudTypes;
var hardDriveTypes;
var backupTypes;
var paperTypes;

$(init);

function init() {

    currentModalType = 'none';

    storageItems =      [
                            ['cloud-storage', 'cloud', 'Cloud'],
                            ['hard-drive-storage', 'harddrive', 'Hard Drive'],
                            ['cd-storage','compact-disc-1','Backup'],
                            ['paper-storage','archive-1','Paper']
                        ];


    departmentItems =   [

                        ];

    cloudTypes =        [  
                            ['dropbox' , 'DropBox'], 
                            ['box' , 'Box'], 
                            ['onedrive' , 'OneDrive'],
                            ['googledrive' , 'Google Drive']
                        ];

    hardDriveTypes =    [  
                            ['pchd' , 'PC Hard Drive'],
                            ['externalhd' , 'External Hard Drive'],
                            ['flashdrive' , 'Flash Drive'],
                            ['sdcard' , 'SD Card']
                        ];

    backupTypes =       [  
                            ['flashdrive' , 'Flash Drive'],
                            ['tapedrive' , 'Tape Drive'],
                            ['externalhd' , 'External Hard Drive'],
                            ['sdcard' , 'SD Card']
                        ];

    paperTypes =        [  
                            ['paper' , 'Paper'],
                            ['logbook' , 'Log Books'],
                            ['accidentbook' , 'Accident Book'],
                            ['visitorbook' , 'Visitor Book']
                        ];

    addStorageItems(storageItems);
    addDepartmentItems(departmentItems);

    $('.storage-item').draggable({
        containment: '#content',
        stack: '#storage div',
        cursor: 'move',
        revert: true,
        helper: storageHelper
    });

    $('#storage-list').droppable({
        accept: '#storage div',
        over: handleStorageOver,
        out: handleStorageOut,
        hoverClass: 'hovered',
        drop: handleStorageDrop
    });

    $('.dept-item').draggable({
        containment: '#content',
        stack: '#dept div',
        cursor: 'move',
        revert: true,
        helper: deptHelper
    });

    $('#dept-list').droppable({
        accept: '#dept div',
        hoverClass: 'hovered',
        drop: handleDeptDrop
    });

    $('#modal-ok').click(modalOkClicked);

}

function addStorageItems(storageItems) {

    for (i = 0; i < storageItems.length; i++)
    {
        $(addPrimaryItem(storageItems[i][0], storageItems[i][1],storageItems[i][2])).appendTo('#storage-types')
    }

}

function addDepartmentItems(storageItems) {

    for (i = 0; i < departmentItems.length; i++)
    {
        $(addPrimaryItem(departmentItems[i][0], departmentItems[i][1],departmentItems[i][2])).appendTo('#dept-types')
    }

}

function addPrimaryItem(id, image, text) {

    var primaryItem;

    primaryItem =  '<div id="' + id + '" class="storage-item list-item">';
    primaryItem += '    <img src="images/149086-essential-set/png/' + image +'.png"></img>';
    primaryItem += '    <div class="list-item-name">' + text + '</div>';
    primaryItem += '</div>';

    return primaryItem;

}

function storageHelper(event) {

    switch (this.id) {

        case "cloud-storage":

            return '<li class="list-item with-shadow on-top"><img src="images/149086-essential-set/png/cloud.png"></img></li>';
            break;

        case "hard-drive-storage":

            return '<li class="list-item with-shadow on-top"><img src="images/149086-essential-set/png/harddrive.png"></img></li>';
            break;

        case "cd-storage":

            return '<li class="list-item with-shadow on-top"><img src="images/149086-essential-set/png/compact-disc-1.png"></img></li>';
            break;

        case "paper-storage":

            return '<li class="list-item with-shadow on-top"><img src="images/149086-essential-set/png/archive-1.png"></img></li>';
            break;

    }

}

function deptHelper(event) {

    switch (this.id) {

        case "hr-department":

            return '<li class="list-item on-top"><img src="images/149086-essential-set/png/users-1.png"></img></li>';
            break;

        case "sales-department":

            return '<li class="list-item on-top"><img src="images/149086-essential-set/png/edit.png"></img></li>';
            break;

        case "marketing-department":

            return '<li class="list-item on-top"><img src="images/149086-essential-set/png/like.png"></img></li>';
            break;

        case "production-department":

            return '<li class="list-item on-top"><img src="images/149086-essential-set/png/settings-4.png"></img></li>';
            break;

        case "accounts-department":

            return '<li class="list-item"><img src="images/149086-essential-set/png/calculator-1.png"></img></li>';
            break;

    }

}

function handleStorageOver() {
    $('#storage-list-container').addClass('storage-hover-over');
}

function handleStorageOut() {
    $('#storage-list-container').removeClass('storage-hover-over');
}

function handleStorageDrop(event, ui) {
    //var storageType = ui.draggable.data( 'storage-type' );
    var storageType = ui.draggable[0].id;
    
    $('#storage-list-container').removeClass('storage-hover-over');

    switch (storageType) {

        case 'cloud-storage':

            showModal('Select a Cloud Types', cloudTypes, 'cloud-storage');
            
            break;

        case 'hard-drive-storage':

            showModal('Select a Storage Types', hardDriveTypes, 'hard-drive-storage');
            
            break;

        case 'cd-storage':

            showModal('Select a Backup Types', backupTypes, 'backup-storage');
            
            break;

        case 'paper-storage':

            showModal('Select a Physical Medium Types', paperTypes, 'paper-storage');
            
            break;
            
    }

    ui.helper.remove();

}

function handleDeptDrop(event, ui) {
    //var storageType = ui.draggable.data( 'storage-type' );
    var deptType = ui.draggable[0].id;

    switch (deptType) {

        case 'hr':

            $('<li class="list-item in-list"><img src="images/149086-essential-set/png/users-1.png"></img></li>').data('dept-type', deptType).appendTo('#dept-list');
            break;

        case 'sales':

            $('<li class="list-item in-list"><img src="images/149086-essential-set/png/edit.png"></img></li>').data('dept-type', deptType).appendTo('#dept-list');
            break;

        case 'marketing':

            $('<li class="list-item in-list"><img src="images/149086-essential-set/png/like.png"></img></li>').data('dept-type', deptType).appendTo('#dept-list');
            break;

        case 'production':

            $('<li class="list-item in-list"><img src="images/149086-essential-set/png/settings-4.png"></img></li>').data('dept-type', deptType).appendTo('#dept-list');
            break;

        case 'accounts':

            $('<li class="list-item in-list"><img src="images/149086-essential-set/png/scalculator-1.png"></img></li>').data('dept-type', deptType).appendTo('#dept-list');
            break;
    }

    $('#dept-list').animate({ scrollTop: $('#dept-list').attr("scrollHeight") }, 500);
    ui.helper.remove();
    $('#myModal').modal('show');

}

function showModal(modalText, modalOptions, modalType)
{
    var modalSelector = $('#modal-selector');

    modalSelector.find('li')
        .remove()
        .end();

    $('#modal-title').text(modalText);
    
    for (i = 0; i < modalOptions.length; i++)
    {
        $('<li><input type="checkbox" value="' + modalOptions[i][0] + '" name="' + modalOptions[i][1] + '">' + modalOptions[i][1] + '</input></li>').appendTo(modalSelector);
    }

    $('#selectTypeModal').modal('show');
    currentModalType = modalType;
}

function modalOkClicked() {

    switch (currentModalType)
    {
        case 'none':

            break;
        
        case 'cloud-storage':

            addStorageListItem('cloud');
            break;

        case 'hard-drive-storage':

            addStorageListItem('harddrive');
            break;

        case 'backup-storage':

            addStorageListItem('compact-disc-1');
            break;

        case 'paper-storage':

            addStorageListItem('archive-1');
            break;


    }
    
}

function addStorageListItem(storageImage)
{

    $('#modal-selector input:checked').each(function() {

        var storageType = $(this).attr('value');
        var storageTypeText = $(this).attr('name');
        addStorageItemObject(storageType, storageTypeText, storageImage);

    });   
    
}

function addStorageItemObject(storageType, storageTypeText, storageImage) {

    var listItem = '<li class="list-item in-list">';
    listItem +=    '    <div>';
    listItem +=    '        <img src="images/149086-essential-set/png/' + storageImage + '.png"></img>';
    listItem +=    '        <div class="list-item-name">' + storageTypeText + '</div>';
    listItem +=    '    </div>';
    listItem +=    '</li>';

    $(listItem).data('storage-type', storageType).appendTo('#storage-list');

    var offset = $('li').offset().top;

    $('#storage-list').animate({
        scrollTop: 200
    }, 1000)

    //$('#storage-list').animate({ scrollTop: $('#storage-list').attr("scrollHeight") }, 500);
}