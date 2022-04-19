<!DOCTYPE html>
<html>
<head>
<title>How to put PHP in HTML - foreach Example</title>
</head>
<body>
<?php
$employees = array(‘John’, ‘Michelle’, ‘Mari’, ‘Luke’, ‘Nellie’);
?>
<h1>List of Employees</h1>
<ul>
<?php foreach ($employees as $employee) { ?>
<li><?php echo $employee ?></li>
<?php }  ?>
</ul>
</body>
</html>
<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>