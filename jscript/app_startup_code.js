// import MODEL from './model.js';


//#############################################################

// ### 1. LOAD THE MODEL IMMEDIATELY WHEN THE PAGE LOADS

//#############################################################


// Define 2 helper functions

function simulateClick(tabID) {
	
	document.getElementById(tabID).click();
}



// function predictOnLoad() {
	
// 	// Simulate a click on the predict button
// 	setTimeout(simulateClick.bind(null,'predict-button'), 500);
// }






// LOAD THE MODEL

// let model;
// (async function () {
	
// 	// model = await tf.loadModel('http://skin.test.woza.work/final_model_kaggle_version1/model.json');
// 	var text = JSON.stringify({
// 		"modelTopology": {
// 		  "keras_version": "2.2.4",
// 		  "backend": "tensorflow",
// 		  "model_config": {
// 			"class_name": "Model",
// 			"config": {
// 			  "name": "model_1",
// 			  "layers": [
// 				{
// 				  "name": "input_1",
// 				  "class_name": "InputLayer",
// 				  "config": {
// 					"batch_input_shape": [null, 224, 224, 3],
// 					"dtype": "float32",
// 					"sparse": false,
// 					"name": "input_1"
// 				  },
// 				  "inbound_nodes": []
// 				},
// 				{
// 				  "name": "conv1_pad",
// 				  "class_name": "ZeroPadding2D",
// 				  "config": {
// 					"name": "conv1_pad",
// 					"trainable": false,
// 					"padding": [
// 					  [0, 1],
// 					  [0, 1]
// 					],
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["input_1", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv1",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv1",
// 					"trainable": false,
// 					"filters": 32,
// 					"kernel_size": [3, 3],
// 					"strides": [2, 2],
// 					"padding": "valid",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv1_pad", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv1_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv1_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv1", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv1_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv1_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv1_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_1",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_1",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv1_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_1_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_1_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_1", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_1_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_1_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_1_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_1",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_1",
// 					"trainable": false,
// 					"filters": 64,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_1_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_1_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_1_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_1", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_1_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_1_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_1_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pad_2",
// 				  "class_name": "ZeroPadding2D",
// 				  "config": {
// 					"name": "conv_pad_2",
// 					"trainable": false,
// 					"padding": [
// 					  [0, 1],
// 					  [0, 1]
// 					],
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["conv_pw_1_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_2",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_2",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [2, 2],
// 					"padding": "valid",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pad_2", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_2_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_2_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_2", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_2_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_2_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_2_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_2",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_2",
// 					"trainable": false,
// 					"filters": 128,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_2_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_2_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_2_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_2", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_2_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_2_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_2_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_3",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_3",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_2_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_3_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_3_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_3", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_3_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_3_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_3_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_3",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_3",
// 					"trainable": false,
// 					"filters": 128,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_3_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_3_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_3_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_3", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_3_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_3_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_3_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pad_4",
// 				  "class_name": "ZeroPadding2D",
// 				  "config": {
// 					"name": "conv_pad_4",
// 					"trainable": false,
// 					"padding": [
// 					  [0, 1],
// 					  [0, 1]
// 					],
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["conv_pw_3_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_4",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_4",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [2, 2],
// 					"padding": "valid",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pad_4", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_4_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_4_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_4", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_4_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_4_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_4_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_4",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_4",
// 					"trainable": false,
// 					"filters": 256,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_4_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_4_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_4_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_4", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_4_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_4_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_4_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_5",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_5",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_4_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_5_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_5_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_5", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_5_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_5_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_5_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_5",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_5",
// 					"trainable": false,
// 					"filters": 256,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_5_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_5_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_5_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_5", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_5_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_5_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_5_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pad_6",
// 				  "class_name": "ZeroPadding2D",
// 				  "config": {
// 					"name": "conv_pad_6",
// 					"trainable": false,
// 					"padding": [
// 					  [0, 1],
// 					  [0, 1]
// 					],
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["conv_pw_5_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_6",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_6",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [2, 2],
// 					"padding": "valid",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pad_6", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_6_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_6_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_6", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_6_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_6_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_6_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_6",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_6",
// 					"trainable": false,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_6_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_6_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_6_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_6", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_6_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_6_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_6_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_7",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_7",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_6_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_7_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_7_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_7", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_7_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_7_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_7_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_7",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_7",
// 					"trainable": false,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_7_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_7_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_7_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_7", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_7_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_7_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_7_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_8",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_8",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_7_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_8_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_8_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_8", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_8_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_8_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_8_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_8",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_8",
// 					"trainable": false,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_8_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_8_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_8_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_8", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_8_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_8_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_8_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_9",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_9",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_8_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_9_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_9_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_9", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_9_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_9_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_9_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_9",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_9",
// 					"trainable": false,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_9_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_9_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_9_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_9", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_9_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_9_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_9_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_10",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_10",
// 					"trainable": false,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_9_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_10_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_10_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_10", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_10_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_10_relu",
// 					"trainable": false,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_10_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_10",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_10",
// 					"trainable": false,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_10_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_10_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_10_bn",
// 					"trainable": false,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_10", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_10_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_10_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_10_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_11",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_11",
// 					"trainable": true,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_10_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_11_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_11_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_11", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_11_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_11_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_11_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_11",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_11",
// 					"trainable": true,
// 					"filters": 512,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_11_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_11_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_11_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_11", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_11_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_11_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_11_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pad_12",
// 				  "class_name": "ZeroPadding2D",
// 				  "config": {
// 					"name": "conv_pad_12",
// 					"trainable": true,
// 					"padding": [
// 					  [0, 1],
// 					  [0, 1]
// 					],
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["conv_pw_11_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_12",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_12",
// 					"trainable": true,
// 					"kernel_size": [3, 3],
// 					"strides": [2, 2],
// 					"padding": "valid",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pad_12", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_12_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_12_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_12", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_12_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_12_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_12_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_12",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_12",
// 					"trainable": true,
// 					"filters": 1024,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_12_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_12_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_12_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_12", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_12_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_12_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_12_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_13",
// 				  "class_name": "DepthwiseConv2D",
// 				  "config": {
// 					"name": "conv_dw_13",
// 					"trainable": true,
// 					"kernel_size": [3, 3],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"bias_constraint": null,
// 					"depth_multiplier": 1,
// 					"depthwise_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"depthwise_regularizer": null,
// 					"depthwise_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_12_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_13_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_dw_13_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_13", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_dw_13_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_dw_13_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_dw_13_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_13",
// 				  "class_name": "Conv2D",
// 				  "config": {
// 					"name": "conv_pw_13",
// 					"trainable": true,
// 					"filters": 1024,
// 					"kernel_size": [1, 1],
// 					"strides": [1, 1],
// 					"padding": "same",
// 					"data_format": "channels_last",
// 					"dilation_rate": [1, 1],
// 					"activation": "linear",
// 					"use_bias": false,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_dw_13_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_13_bn",
// 				  "class_name": "BatchNormalization",
// 				  "config": {
// 					"name": "conv_pw_13_bn",
// 					"trainable": true,
// 					"axis": -1,
// 					"momentum": 0.99,
// 					"epsilon": 0.001,
// 					"center": true,
// 					"scale": true,
// 					"beta_initializer": { "class_name": "Zeros", "config": {} },
// 					"gamma_initializer": { "class_name": "Ones", "config": {} },
// 					"moving_mean_initializer": {
// 					  "class_name": "Zeros",
// 					  "config": {}
// 					},
// 					"moving_variance_initializer": {
// 					  "class_name": "Ones",
// 					  "config": {}
// 					},
// 					"beta_regularizer": null,
// 					"gamma_regularizer": null,
// 					"beta_constraint": null,
// 					"gamma_constraint": null
// 				  },
// 				  "inbound_nodes": [[["conv_pw_13", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "conv_pw_13_relu",
// 				  "class_name": "ReLU",
// 				  "config": {
// 					"name": "conv_pw_13_relu",
// 					"trainable": true,
// 					"max_value": 6.0,
// 					"negative_slope": 0.0,
// 					"threshold": 0.0
// 				  },
// 				  "inbound_nodes": [[["conv_pw_13_bn", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "global_average_pooling2d_1",
// 				  "class_name": "GlobalAveragePooling2D",
// 				  "config": {
// 					"name": "global_average_pooling2d_1",
// 					"trainable": true,
// 					"data_format": "channels_last"
// 				  },
// 				  "inbound_nodes": [[["conv_pw_13_relu", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "dropout_1",
// 				  "class_name": "Dropout",
// 				  "config": {
// 					"name": "dropout_1",
// 					"trainable": true,
// 					"rate": 0.25,
// 					"noise_shape": null,
// 					"seed": null
// 				  },
// 				  "inbound_nodes": [[["global_average_pooling2d_1", 0, 0, {}]]]
// 				},
// 				{
// 				  "name": "dense_1",
// 				  "class_name": "Dense",
// 				  "config": {
// 					"name": "dense_1",
// 					"trainable": true,
// 					"units": 7,
// 					"activation": "softmax",
// 					"use_bias": true,
// 					"kernel_initializer": {
// 					  "class_name": "VarianceScaling",
// 					  "config": {
// 						"scale": 1.0,
// 						"mode": "fan_avg",
// 						"distribution": "uniform",
// 						"seed": null
// 					  }
// 					},
// 					"bias_initializer": { "class_name": "Zeros", "config": {} },
// 					"kernel_regularizer": null,
// 					"bias_regularizer": null,
// 					"activity_regularizer": null,
// 					"kernel_constraint": null,
// 					"bias_constraint": null
// 				  },
// 				  "inbound_nodes": [[["dropout_1", 0, 0, {}]]]
// 				}
// 			  ],
// 			  "input_layers": [["input_1", 0, 0]],
// 			  "output_layers": [["dense_1", 0, 0]]
// 			}
// 		  },
// 		  "training_config": {
// 			"optimizer_config": {
// 			  "class_name": "Adam",
// 			  "config": {
// 				"lr": 9.999999747378752e-6,
// 				"beta_1": 0.8999999761581421,
// 				"beta_2": 0.9990000128746033,
// 				"decay": 0.0,
// 				"epsilon": 1e-7,
// 				"amsgrad": false
// 			  }
// 			},
// 			"loss": "categorical_crossentropy",
// 			"metrics": ["categorical_accuracy", "top_2_accuracy", "top_3_accuracy"],
// 			"weighted_metrics": null,
// 			"sample_weight_mode": null,
// 			"loss_weights": null
// 		  }
// 		},
// 		"weightsManifest": [
// 		  {
// 			"paths": [
// 			  "group1-shard1of4",
// 			  "group1-shard2of4",
// 			  "group1-shard3of4",
// 			  "group1-shard4of4"
// 			],
// 			"weights": [
// 			  { "name": "conv1/kernel", "shape": [3, 3, 3, 32], "dtype": "float32" },
// 			  { "name": "conv1_bn/gamma", "shape": [32], "dtype": "float32" },
// 			  { "name": "conv1_bn/beta", "shape": [32], "dtype": "float32" },
// 			  { "name": "conv1_bn/moving_mean", "shape": [32], "dtype": "float32" },
// 			  {
// 				"name": "conv1_bn/moving_variance",
// 				"shape": [32],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_1/depthwise_kernel",
// 				"shape": [3, 3, 32, 1],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_10/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_10_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_10_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_10_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_10_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_11/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_11_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_11_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_11_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_11_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_12/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_12_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_12_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_12_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_12_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_13/depthwise_kernel",
// 				"shape": [3, 3, 1024, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_13_bn/gamma", "shape": [1024], "dtype": "float32" },
// 			  { "name": "conv_dw_13_bn/beta", "shape": [1024], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_13_bn/moving_mean",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_13_bn/moving_variance",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_1_bn/gamma", "shape": [32], "dtype": "float32" },
// 			  { "name": "conv_dw_1_bn/beta", "shape": [32], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_1_bn/moving_mean",
// 				"shape": [32],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_1_bn/moving_variance",
// 				"shape": [32],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_2/depthwise_kernel",
// 				"shape": [3, 3, 64, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_2_bn/gamma", "shape": [64], "dtype": "float32" },
// 			  { "name": "conv_dw_2_bn/beta", "shape": [64], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_2_bn/moving_mean",
// 				"shape": [64],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_2_bn/moving_variance",
// 				"shape": [64],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_3/depthwise_kernel",
// 				"shape": [3, 3, 128, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_3_bn/gamma", "shape": [128], "dtype": "float32" },
// 			  { "name": "conv_dw_3_bn/beta", "shape": [128], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_3_bn/moving_mean",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_3_bn/moving_variance",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_4/depthwise_kernel",
// 				"shape": [3, 3, 128, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_4_bn/gamma", "shape": [128], "dtype": "float32" },
// 			  { "name": "conv_dw_4_bn/beta", "shape": [128], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_4_bn/moving_mean",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_4_bn/moving_variance",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_5/depthwise_kernel",
// 				"shape": [3, 3, 256, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_5_bn/gamma", "shape": [256], "dtype": "float32" },
// 			  { "name": "conv_dw_5_bn/beta", "shape": [256], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_5_bn/moving_mean",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_5_bn/moving_variance",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_6/depthwise_kernel",
// 				"shape": [3, 3, 256, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_6_bn/gamma", "shape": [256], "dtype": "float32" },
// 			  { "name": "conv_dw_6_bn/beta", "shape": [256], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_6_bn/moving_mean",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_6_bn/moving_variance",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_7/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_7_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_7_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_7_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_7_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_8/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_8_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_8_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_8_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_8_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_9/depthwise_kernel",
// 				"shape": [3, 3, 512, 1],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_dw_9_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_dw_9_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_dw_9_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_dw_9_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_1/kernel",
// 				"shape": [1, 1, 32, 64],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_10/kernel",
// 				"shape": [1, 1, 512, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_10_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_10_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_10_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_10_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_11/kernel",
// 				"shape": [1, 1, 512, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_11_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_11_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_11_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_11_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_12/kernel",
// 				"shape": [1, 1, 512, 1024],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_12_bn/gamma", "shape": [1024], "dtype": "float32" },
// 			  { "name": "conv_pw_12_bn/beta", "shape": [1024], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_12_bn/moving_mean",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_12_bn/moving_variance",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_13/kernel",
// 				"shape": [1, 1, 1024, 1024],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_13_bn/gamma", "shape": [1024], "dtype": "float32" },
// 			  { "name": "conv_pw_13_bn/beta", "shape": [1024], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_13_bn/moving_mean",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_13_bn/moving_variance",
// 				"shape": [1024],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_1_bn/gamma", "shape": [64], "dtype": "float32" },
// 			  { "name": "conv_pw_1_bn/beta", "shape": [64], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_1_bn/moving_mean",
// 				"shape": [64],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_1_bn/moving_variance",
// 				"shape": [64],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_2/kernel",
// 				"shape": [1, 1, 64, 128],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_2_bn/gamma", "shape": [128], "dtype": "float32" },
// 			  { "name": "conv_pw_2_bn/beta", "shape": [128], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_2_bn/moving_mean",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_2_bn/moving_variance",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_3/kernel",
// 				"shape": [1, 1, 128, 128],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_3_bn/gamma", "shape": [128], "dtype": "float32" },
// 			  { "name": "conv_pw_3_bn/beta", "shape": [128], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_3_bn/moving_mean",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_3_bn/moving_variance",
// 				"shape": [128],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_4/kernel",
// 				"shape": [1, 1, 128, 256],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_4_bn/gamma", "shape": [256], "dtype": "float32" },
// 			  { "name": "conv_pw_4_bn/beta", "shape": [256], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_4_bn/moving_mean",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_4_bn/moving_variance",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_5/kernel",
// 				"shape": [1, 1, 256, 256],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_5_bn/gamma", "shape": [256], "dtype": "float32" },
// 			  { "name": "conv_pw_5_bn/beta", "shape": [256], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_5_bn/moving_mean",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_5_bn/moving_variance",
// 				"shape": [256],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_6/kernel",
// 				"shape": [1, 1, 256, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_6_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_6_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_6_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_6_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_7/kernel",
// 				"shape": [1, 1, 512, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_7_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_7_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_7_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_7_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_8/kernel",
// 				"shape": [1, 1, 512, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_8_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_8_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_8_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_8_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_9/kernel",
// 				"shape": [1, 1, 512, 512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "conv_pw_9_bn/gamma", "shape": [512], "dtype": "float32" },
// 			  { "name": "conv_pw_9_bn/beta", "shape": [512], "dtype": "float32" },
// 			  {
// 				"name": "conv_pw_9_bn/moving_mean",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  {
// 				"name": "conv_pw_9_bn/moving_variance",
// 				"shape": [512],
// 				"dtype": "float32"
// 			  },
// 			  { "name": "dense_1/kernel", "shape": [1024, 7], "dtype": "float32" },
// 			  { "name": "dense_1/bias", "shape": [7], "dtype": "float32" }
// 			]
// 		  }
// 		]
// 	  });

// 	model = JSON.parse(text);
	  
// 	// $("#selected-image").attr("src", "http://skin.test.woza.work/assets/samplepic.jpg");
// 	$("#selected-image").attr("src", "../assets/samplepic.jpg");
	
// 	// Hide the model loading spinner
// 	// This line of html gets hidden:
// 	// <div class="progress-bar">Ai is Loading...</div>
// 	$('.progress-bar').hide();
	
	
// 	// Simulate a click on the predict button.
// 	// Make a prediction on the default front page image.
// 	predictOnLoad();
	
	
	
// })();



	

//######################################################################

// ### 2. MAKE A PREDICTION ON THE FRONT PAGE IMAGE WHEN THE PAGE LOADS

//######################################################################



// The model images have size 96x96

// This code is triggered when the predict button is clicked i.e.
// we simulate a click on the predict button.
// $("#predict-button").click(async function () {
	
// 	let image = undefined;
	
// 	image = $('#selected-image').get(0);
	
// 	// Pre-process the image
// 	let tensor = tf.fromPixels(image)
// 	.resizeNearestNeighbor([224,224])
// 	.toFloat();
	
	
// 	let offset = tf.scalar(127.5);
	
// 	tensor = tensor.sub(offset)
// 	.div(offset)
// 	.expandDims();
	
	
// 	// Pass the tensor to the model and call predict on it.
// 	// Predict returns a tensor.
// 	// data() loads the values of the output tensor and returns
// 	// a promise of a typed array when the computation is complete.
// 	// Notice the await and async keywords are used together.
	
// 	// TARGET_CLASSES is defined in the target_clssses.js file.
// 	// There's no need to load this file because it was imported in index.html
// 	let predictions = await model.predict(tensor).data();
// 	let top5 = Array.from(predictions)
// 		.map(function (p, i) { // this is Array.map
// 			return {
// 				probability: p,
// 				className: TARGET_CLASSES[i] 
// 			};
				
			
// 		}).sort(function (a, b) {
// 			return b.probability - a.probability;
				
// 		}).slice(0, 3);
	

// 		// Append the file name to the prediction list
// 		var file_name = 'samplepic.jpg';
// 		$("#prediction-list").append(`<li class="w3-text-blue fname-font" style="list-style-type:none;">${file_name}</li>`);
		
// 		//$("#prediction-list").empty();
// 		top5.forEach(function (p) {
		
// 			// ist-style-type:none removes the numbers.
// 			// https://www.w3schools.com/html/html_lists.asp
// 			$("#prediction-list").append(`<li style="list-style-type:none;">${p.className}: ${p.probability.toFixed(3)}</li>`);
		
			
// 		});
	
	
// });



//######################################################################

// ### 3. READ THE IMAGES THAT THE USER SELECTS

// Then direct the code execution to app_batch_prediction_code.js

//######################################################################




// This listens for a change. It fires when the user submits images.

$("#image-selector").change(async function () {
	
	// the FileReader reads one image at a time
	fileList = $("#image-selector").prop('files');
	
	//$("#prediction-list").empty();
	
	// Start predicting
	// This function is in the app_batch_prediction_code.js file.
	model_processArray(fileList);	
	
});





