Blockly.Blocks['block_scpi_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("scpi connection ");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Address ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_command_noout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("scpi command");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendValueInput("command")
        .setCheck("String")
        .appendField("Command");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_command_with_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("scpi command");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendValueInput("command")
        .setCheck("String")
        .appendField("Command");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['block_scpi_psu_on_off'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("PSU ON/OFF")
          .appendField(new Blockly.FieldDropdown([["CH1","OUT1"], ["CH2","OUT2"], ["CH3","OUT3"]]), "Output")
           .appendField(new Blockly.FieldDropdown([["OFF","OFF"], ["ON","ON"]]), "ON/OFF");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_psu_volt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PSU set Voltage");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendValueInput("voltage")
        .setCheck(null)
        .appendField("Voltage");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_psu_curr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PSU set Current");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendValueInput("current")
        .setCheck(null)
        .appendField("Current");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_scpi_psu_sel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PSU Channel Select");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["CH1","OUT1"], ["CH2","OUT2"], ["CH3","OUT3"]]), "Output");
     this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_scpi_psu_gen_on_off'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("PSU General ON/OFF")
   
          .appendField(new Blockly.FieldDropdown([["OFF","OFF"], ["ON","ON"]]), "ON/OFF");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
   
   
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['block_scpi_psu_ask_volt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Query Voltage");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_psu_ask_cur'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Query Current");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_scpi_command_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PSU Message");
    this.appendValueInput("connection")
        .setCheck(null)
        .appendField("connection");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("Message");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['write_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Write");
    this.appendValueInput("file_name")
        .setCheck("String")
        .appendField("File name");
    this.appendValueInput("file_data")
        .setCheck("String")
        .appendField("Data");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write data to a File. Data will be append to existing content of the data.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delete_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Delete");
    this.appendValueInput("file_name")
        .setCheck("String")
        .appendField("File name");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delete the File.");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['delay_os'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delay");
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("delay");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay Processing in Seconds ");
 this.setHelpUrl("");
  }
};

