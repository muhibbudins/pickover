/*
 * Bismillahiromanirohim
 * 
 * Pick Over (Picker Popover)
 * Author  : Muhibbudin Suretno
 * Date    : 10/20/2016
 * License : MIT
 * Color   : Flat, Material, Custom
 * Theme   : Bootstrap, Semantic, Default
 * Demo    : http://pickover.feelinart.com
 * Github  : https://github.com/muhibbudins/pickover
 */

(function() {
	/*
	 * Initialize variable
	 * Variable intilize for global parameter
	 */
	_inputs = {}
	_format = ''
	_theme  = ''
	_scheme = 'flat'
	_color  = {
		flat: ['#EC644B','#D24D57','#F22613','#D91E18','#96281B','#EF4836','#D64541','#C0392B','#CF000F','#E74C3C','#DB0A5B','#F64747','#F1A9A0','#D2527F','#E08283','#F62459','#E26A6A','#DCC6E0','#663399','#674172','#AEA8D3','#913D88','#9A12B3','#BF55EC','#BE90D4','#8E44AD','#9B59B6','#446CB3','#E4F1FE','#4183D7','#59ABE3','#81CFE0','#52B3D9','#C5EFF7','#22A7F0','#3498DB','#2C3E50','#19B5FE','#336E7B','#22313F','#6BB9F0','#1E8BC3','#3A539B','#34495E','#67809F','#2574A9','#1F3A93','#89C4F4','#4B77BE','#5C97BF','#4ECDC4','#A2DED0','#87D37C','#90C695','#26A65B','#03C9A9','#68C3A3','#65C6BB','#1BBC9B','#1BA39C','#66CC99','#36D7B7','#C8F7C5','#86E2D5','#2ECC71','#16A085','#3FC380','#019875','#03A678','#4DAF7C','#2ABB9B','#00B16A','#1E824C','#049372','#26C281','#E9D460','#FDE3A7','#F89406','#EB9532','#E87E04','#F4B350','#F2784B','#EB974E','#F5AB35','#D35400','#F39C12','#F9690E','#F9BF3B','#F27935','#E67E22','#ECECEC','#6C7A89','#D2D7D3','#EEEEEE','#BDC3C7','#ECF0F1','#95A5A6','#DADFE1','#ABB7B7','#F2F1EF','#BFBFBF'],
		material: ['#f44336','#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350','#f44336','#e53935','#d32f2f','#c62828','#b71c1c','#ff8a80','#ff5252','#ff1744','#d50000','#E91E63','#FCE4EC','#F8BBD0','#F48FB1','#F06292','#EC407A','#E91E63','#D81B60','#C2185B','#AD1457','#880E4F','#FF80AB','#FF4081','#F50057','#C51162','#9C27B0','#F3E5F5','#E1BEE7','#CE93D8','#BA68C8','#AB47BC','#9C27B0','#8E24AA','#7B1FA2','#6A1B9A','#4A148C','#EA80FC','#E040FB','#D500F9','#AA00FF','#673AB7','#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#B388FF','#7C4DFF','#651FFF','#6200EA','#3F51B5','#E8EAF6','#C5CAE9','#9FA8DA','#7986CB','#5C6BC0','#3F51B5','#3949AB','#303F9F','#283593','#1A237E','#8C9EFF','#536DFE','#3D5AFE','#304FFE','#2196F3','#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1','#82B1FF','#448AFF','#2979FF','#2962FF','#03A9F4','#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B','#80D8FF','#40C4FF','#00B0FF','#0091EA','#00BCD4','#E0F7FA','#B2EBF2','#80DEEA','#4DD0E1','#26C6DA','#00BCD4','#00ACC1','#0097A7','#00838F','#006064','#84FFFF','#18FFFF','#00E5FF','#00B8D4','#009688','#E0F2F1','#B2DFDB','#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40','#A7FFEB','#64FFDA','#1DE9B6','#00BFA5','#4CAF50','#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20','#B9F6CA','#69F0AE','#00E676','#00C853','#8BC34A','#F1F8E9','#DCEDC8','#C5E1A5','#AED581','#9CCC65','#8BC34A','#7CB342','#689F38','#558B2F','#33691E','#CCFF90','#B2FF59','#76FF03','#64DD17','#CDDC39','#F9FBE7','#F0F4C3','#E6EE9C','#DCE775','#D4E157','#CDDC39','#C0CA33','#AFB42B','#9E9D24','#827717','#F4FF81','#EEFF41','#C6FF00','#AEEA00','#FFEB3B','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFFF8D','#FFFF00','#FFEA00','#FFD600','#FFC107','#FFF8E1','#FFECB3','#FFE082','#FFD54F','#FFCA28','#FFC107','#FFB300','#FFA000','#FF8F00','#FF6F00','#FFE57F','#FFD740','#FFC400','#FFAB00','#FF9800','#FFF3E0','#FFE0B2','#FFCC80','#FFB74D','#FFA726','#FF9800','#FB8C00','#F57C00','#EF6C00','#E65100','#FFD180','#FFAB40','#FF9100','#FF6D00','#FF5722','#FBE9E7','#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#F4511E','#E64A19','#D84315','#BF360C','#FF9E80','#FF6E40','#FF3D00','#DD2C00','#795548','#EFEBE9','#D7CCC8','#BCAAA4','#A1887F','#8D6E63','#795548','#6D4C41','#5D4037','#4E342E','#3E2723','#9E9E9E','#FAFAFA','#F5F5F5','#EEEEEE','#E0E0E0','#BDBDBD','#9E9E9E','#757575','#616161','#424242','#212121','#607D8B','#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238']
	}
	_custom = {}

	/* Initialize Plugin */
    PickOver = function(e) {
    	if (typeof $ !== 'undefined') {
    		/* Grab all parameter to default variable */
			_inputs = $('.pickover')
			_format = e.format
			_theme  = e.theme
			_scheme = e.scheme
			_custom = e.color

			/* Loop all found element */
			for (key in _inputs) {
				if (!isNaN(parseInt(key))) {
					_element      = $(_inputs[key])
					_height       = _element.height()
					_width        = _element.width()
					_picker       = $('<div/>')
					_picker.addClass('pickpopup')
					_picker.addClass(_theme)
					
					_picker.attr('data-id', key)
					_element.attr('data-id', key)
					
					generateColor(_scheme, _format, key, function(el) {
						_picker.append(el)
					})
		    		
		    		_element.after(_picker)
		    		_element
			    		.on('focus', function(e) {
			    			e.preventDefault()
							_top  = $(this).position().top
							_left = $(this).position().left
							_id   = $(this).data('id')
							_pick = $('.pickpopup[data-id="'+_id+'"]')
			    			_pick.css('visibility', 'visible')
			    			_pick.css('left', _left)

			    			/* Auto position */
							if (_top > _pick.height()) {
								_pick.css('top', (_top - _pick.height() - _height))
							} else {
								_pick.css('top', (_top + _height + 10))
							}
			    		})
				}
			}
			/* Add palette to input */
			$('.pickpopup_palette').click(function(e) {
				e.preventDefault()
				$('.pickover[data-id="'+$(this).data('parent')+'"]').val($(this).data('palette'))
			    $('.pickpopup').css('visibility', 'hidden')
			})
			/* Triger to close popover */
			$(document).click(function(event) { 
				if(!$(event.target).closest('.pickover').length) {
					$('.pickpopup').css('visibility', 'hidden')
				}
			})
    	} else {
    		console.log('Fatal error : This library require jQuery http://jquery.com/download/')
    	}
    }

    /* Generate color */
    generateColor = function(scheme, format, keys, callback) {
    	// Generate from scheme else from custom color
    	if (typeof _custom === 'undefined') {
	    	for (key in _color) {
	    		if (key === scheme) {
	    			for (col in _color[key]) {
	    				_el = $('<div/>')
	    				   .addClass('pickpopup_palette')
	    				   .attr('data-palette', _color[key][col])
	    				   .attr('data-parent', keys)
	    				   .css('background-color', _color[key][col])
	    				callback(_el)
	    			}
	    		}
	    	}
    	} else {
	    	for (key in _custom) {
				_el = $('<div/>')
				   .addClass('pickpopup_palette')
				   .attr('data-palette', _custom[key])
				   .attr('data-parent', keys)
				   .css('background-color', _custom[key])
				callback(_el)
	    	}
    	}
    }
}(window))
