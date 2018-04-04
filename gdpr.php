<!doctype html>
<html lang="en">
<head>

<title>A jQuery Drag-and-Drop Number Cards Game</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/gdpr.js"></script>
<script src="jquery.ui.touch-punch.js"></script>

</head>
<body>


    <div class="container-fluid" id="content">
<!-- Modal -->
<div id="selectTypeModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 id="modal-title" class="modal-title">Select Type</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <ul id="modal-selector" class="modal-list">
        
        </ul>

      </div>
      <div class="modal-footer">
        <button type="button" id="modal-cancel" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button type="button" id="modal-ok" class="btn btn-success" data-dismiss="modal">Ok</button>
      </div>
    </div>

  </div>
</div>
        <div class="row">

            <div id="storage" class="col-sm">
                <div class="header-text storage-header-text">
                        Storage Items
                </div>
                <div id="storage-types" class="list-choice-container">
                    
                </div>
            </div>

            <div class="col-sm">
                <div id="storage-list-container" class="storage-list-container list-container">
                    <div class="header-text storage-header-text">
                        Storage List
                    </div>
                    <div class="list-items-container">
                        <ul id="storage-list" class="list-style">
                        
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm">
                <div id="dept-list-container" class="dept-list-container list-container">
                    <div class="header-text dept-header-text">
                        Department List
                    </div>
                    <div class="list-items-container">
                        <ul id="dept-list" class="list-style">
                        
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div id="dept" class="col-sm">
                <div class="header-text dept-header-text">
                        Department Items
                </div>
                <div id="department-items" class="list-choice-container">
                    <div id="hr-department" class="dept-item list-item">
                        <img src="images/149086-essential-set/png/users-1.png"></img>
                    </div>
                    <div id="sales-department" class="dept-item list-item">
                        <img src="images/149086-essential-set/png/edit.png"></img>
                    </div>
                    <div id="marketing-department" class="dept-item list-item">
                        <img src="images/149086-essential-set/png/like.png"></img>
                    </div>
                    <div id="production-department" class="dept-item list-item">
                        <img src="images/149086-essential-set/png/settings-4.png"></img>
                    </div>
                    <div id="accounts-department" class="dept-item list-item">
                        <img src="images/149086-essential-set/png/calculator-1.png"></img>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</body>
</html>

