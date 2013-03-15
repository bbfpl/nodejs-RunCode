/* jQuery Notice Plugin
 * 
 * This plug-in allows you to show a little notice box.
 * 
 * @author: Vincent Composieux
 * @homepage: http://vincent.composieux.fr
 * @date 20/06/2010
 */

(function($) {
	$.notice = {
		show: function(message) {
			/** Configuration */
			var top = 5;
			var left = 15;
			var fadeoutDuration = 1000;
			
			/** Launch the notification */
			$('html, body').animate({scrollTop:0});
			$('<div></div>').attr('id', 'notice').css({'left':'50%','margin-left':'-75px'}).css('top', (0+top)+'px').appendTo('body').text(message);
			
			/** Switch off the notification */
			setTimeout(function() {$('#notice').animate({ opacity: 0, top: '-20px' }, fadeoutDuration);}, 1500);
			setTimeout(function() {$('#notice').remove();}, 2500);
		}
	}
	
	jQnotice = function(message) { $.notice.show(message); };
})(jQuery);