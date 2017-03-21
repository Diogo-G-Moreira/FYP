<?php 
// http://stackoverflow.com/questions/7121479/listing-all-the-folders-subfolders-and-files-in-a-directory-using-php
function listFolderFiles($dir){
    $ffs = scandir($dir);
    echo 'children: [';
    foreach($ffs as $ff){
        if($ff != '.' && $ff != '..'){
            echo '{name: "'.$ff.'"';
            if(is_dir($dir.'/'.$ff)) {
				echo',';
				listFolderFiles($dir.'/'.$ff);
			echo']},';
				}
				else{
					echo '},';
				}

        }
    }
}

?>
<html>
<head>
<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.item.highlight{
background-color: #FFFF00;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>

</head>
<body>

<script type="text/x-template" id="item-template">
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="model in model.children"
        :model="model">
      </item>
    </ul>
  </li>
</script>

<p>(You can double click on an item to turn it into a folder.)</p>

<!-- the demo root element -->
<ul id="demo">
  <item
    class="item"
    :model="treeData">
  </item>
</ul>
</br>
<input type="button" name="theButton" value="Stream" onclick="showDetails();">
</body>
</html>

<script src="vue.js"></script> 

<script>

var data = {
  name: 'Music',
  <?php
$dir    = 'c:/FYP/Server/Music';
listFolderFiles($dir);
?>

    
  ]
}
var selected = "";
// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
	  else{
		  selected = this.model.name;
		  console.log("Selected = " + selected);
    }
  }
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
})

function showDetails()
{
   window.location = '/View2.js?song='+selected;
}

</script>
