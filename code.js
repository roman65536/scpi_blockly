Blockly.Lua['block_scpi_init'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'connectl(' + value_name + ' ,5025,"ints0",2000,"RAW" )\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['block_scpi_command_noout'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var value_command = Blockly.Lua.valueToCode(block, 'command', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'scpi(' +value_connection + ',' + value_command+ ') \n';
  return code;
};

Blockly.Lua['block_scpi_command_with_out'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var value_command = Blockly.Lua.valueToCode(block, 'command', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'scpi(' +value_connection + ',' + value_command+ ') \n';;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};


Blockly.Lua['block_scpi_psu_on_off'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_output = block.getFieldValue('Output');
  var dropdown_on_off = block.getFieldValue('ON/OFF');
  // TODO: Assemble Lua into code variable.
  var code = 'scpi('+value_connection+' , "INST ' + dropdown_output +'")\nscpi(' + value_connection + ', "OUTP:SEL ' + dropdown_on_off + '")\n';
  return code
};


Blockly.Lua['block_scpi_psu_volt'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var value_command = Blockly.Lua.valueToCode(block, 'voltage', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'scpi(' +value_connection + ',string.format( "VOLT %.3f\\n",' + value_command+ ')) \nsleep(.2)\n';
  return code;
};


Blockly.Lua['block_scpi_psu_curr'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var value_command = Blockly.Lua.valueToCode(block, 'current', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'scpi(' +value_connection + ',string.format( "CURR %.3f\\n",' + value_command+ ')) \nsleep(.2)\n';
  return code;
};


Blockly.Lua['block_scpi_psu_sel'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_output = block.getFieldValue('Output');
  
  // TODO: Assemble Lua into code variable.
  var code = 'scpi('+value_connection+' , "INST ' + dropdown_output +'")\n';
  return code
};


Blockly.Lua['block_scpi_psu_gen_on_off'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  
  var dropdown_on_off = block.getFieldValue('ON/OFF');
  // TODO: Assemble Lua into code variable.
  var code = 'scpi('+value_connection+' ,  "OUTP:GEN ' + dropdown_on_off + '")\n';
  return code
};

Blockly.Lua['block_scpi_psu_ask_volt'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tonumber(scpi(' + value_connection + ', "MEAS:VOLT?"))\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['block_scpi_psu_ask_cur'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'tonumber(scpi(' + value_connection + ', "MEAS:CURR?"))\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};


Blockly.Lua['block_scpi_command_msg'] = function(block) {
  var value_connection = Blockly.Lua.valueToCode(block, 'connection', Blockly.Lua.ORDER_ATOMIC);
  var value_message = Blockly.Lua.valueToCode(block, 'message', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'scpi(' +value_connection + ',string.format("DISP:WIND:TEXT:DATA \\"%s\\" ",'+ value_message + ')) \n';
  return code;
};


Blockly.Lua['write_file'] = function(block) {
  var value_file_name = Blockly.Lua.valueToCode(block, 'file_name', Blockly.Lua.ORDER_ATOMIC);
  var value_file_data = Blockly.Lua.valueToCode(block, 'file_data', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'write_file('+value_file_name+','+value_file_data+')\n';
  return code;
};

Blockly.Lua['delete_file'] = function(block) {
  var value_file_name = Blockly.Lua.valueToCode(block, 'file_name', Blockly.Lua.ORDER_ATOMIC);
  
  // TODO: Assemble Lua into code variable.
  var code = 'os.remove('+value_file_name+')\n';
  return code;
};
