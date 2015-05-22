<?php

$INFO							= Array();

$INFO['name']					= "<%= safeModuleName %>";
$INFO['filename']				= "modules/<%= safeModuleName %>/class.php";
$INFO['config']					= "0";
$INFO['ico']					= "ico_<%= safeModuleName %>";
$INFO['default_method']			= "show";
$INFO['default_method_admin']	= "lists";
$INFO['is_indexed']				= "1";
$INFO['per_page']				= "10";
$INFO['func_perms']				= "";


$COMPONENTS						= array();
$COMPONENTS[0]					= "./classes/modules/<%= safeModuleName %>/__admin.php";
$COMPONENTS[1]					= "./classes/modules/<%= safeModuleName %>/__events.php";
$COMPONENTS[2]					= "./classes/modules/<%= safeModuleName %>/class.php";
$COMPONENTS[3]					= "./classes/modules/<%= safeModuleName %>/events.php";
$COMPONENTS[4]					= "./classes/modules/<%= safeModuleName %>/i18n.php";
$COMPONENTS[5]					= "./classes/modules/<%= safeModuleName %>/i18n.en.php";
$COMPONENTS[6]					= "./classes/modules/<%= safeModuleName %>/install.php";
$COMPONENTS[7]					= "./classes/modules/<%= safeModuleName %>/lang.php";
$COMPONENTS[8]					= "./classes/modules/<%= safeModuleName %>/permissions.php";

// $collection						= umiHierarchyTypesCollection::getInstance();
// $objectTypes					= umiObjectTypesCollection::getInstance();
// $fields							= umiFieldsCollection::getInstance();
// $perms							= permissionsCollection::getInstance();;

// $type_id						= NULL;
// $title							= 'i18n::hierarchy-type-<%= safeModuleName %>-item_element';
// $module							= '<%= safeModuleName %>';
// $method							= 'item_element';

// $hierarchy_type_id				= $collection->addType($module, $title, $method);

// $parent_type_id					= 0;
// $title							= 'i18n::object-type-<%= safeModuleName %>';

// $types_arr						= $objectTypes->getTypesByHierarchyTypeId($hierarchy_type_id);

// foreach($types_arr as $id => $type_name) {
// 	if($type_name == $title) {
// 		$type_id = $id;
// 		break;
// 	}
// }

// if(!$type_id)
// 	$type_id 	= $objectTypes->addType($parent_type_id, $title);

// $is_guidable	= 0;
// $is_public		= 0;

// $type 			= $objectTypes->getType($type_id);

// if($type instanceof umiObjectType) {
// 	if ($type->getHierarchyTypeId() && !$hierarchy_type_id)
// 		throw new coreException("Expected to get hierarchy type id");

// 	$type->setIsGuidable($is_guidable);
// 	$type->setIsPublic($is_public);
// 	$type->setHierarchyTypeId($hierarchy_type_id);
// 	$type->commit();

// 	$group_name			= 'common';
// 	$group_title		= 'i18n::fields-group-<%= safeModuleName %>_common';
// 	$group_is_visible	= 1;
// 	$fields_group_id	= $type->addFieldsGroup($group_name, $group_title, true, $group_is_visible);

// 	$inputData = array(
// 		'group-id'	=> $fields_group_id,
// 		'type-id'	=> $type_id
// 	);

// 	$fields_data = array(
// 	  	1 => array(
// 			'title'			=>'i18n::field-<%= safeModuleName %>hierarchy',
// 			'name'			=>'<%= safeModuleName %>hierarchy',
// 			'field_type_id'	=> umiFieldTypesCollection::getInstance()->getFieldTypeByDataType('text')->getId(),
// 			'is_visible'	=> 1
// 	  )
// 	);
// 	foreach($fields_data as $field){
// 		if(isset($field['name'])){
// 			unset($_REQUEST['data']);

// 			$_REQUEST['data']	= $field;
// 			$field_name			= $field['name'];

// 			if($field_id = $type->getFieldId($field_name)) {
// 				$field = $fields->getField($field_id);
// 				baseModuleAdmin::saveEditedFieldData($field);
// 			}
// 			else
// 				baseModuleAdmin::saveAddedFieldData($inputData);
// 		}
// 	}
// }
// else {
// 	throw new coreException("Expected instance of type umiObjectType");
// }

// $guestId = $perms->getGuestId();
// $perms->setModulesPermissions($guestId, '<%= safeModuleName %>', 'view');
