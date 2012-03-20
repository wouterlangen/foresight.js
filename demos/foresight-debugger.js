var foresightStart = new Date();

var foresight_debugger = function () {
	// oncomplete only being use to print out debugger info, demo purposes only
	var info = [];

	info.push( 'Foresight Images: ' + foresight.images.length );
	info.push( 'Device Pixel Ratio: ' + foresight.devicePixelRatio );
	info.push( 'Check Connection Speed: ' + foresight.options.testConn );
	info.push( 'Connection Test Method: ' + foresight.connTestMethod );
	if( foresight.connTestMethod === 'skip' ) {
		info.push( 'No speed test completed because this device has a pixel ratio of 1, so no need' );
	} else {
		info.push( 'Min Kbps For High Speed Connection: ' + foresight.options.minKbpsForHighSpeedConn + 'Kbps' );
		info.push( 'Estimated Connection Speed: ' + foresight.connKbps + 'Kbps' );
		info.push( 'Is Considered High Speed Connection: ' + foresight.isHighSpeedConn );
	}

	var foresightEnd = new Date();
	var duration = ( foresightEnd ).getTime() - ( foresightStart ).getTime();
	info.push( 'Overall Duration in Milliseconds: ' + duration + 'ms');
	
	info.push( '<hr>' );

	var docPre = document.createElement( 'pre' );
	docPre.innerHTML = info.join( '<br>' );
	document.body.insertBefore(docPre, document.body.firstChild);

	// print out img info above each foresight image
	for( var x = 0; x < foresight.images.length; x++ ) {
		var img = foresight.images[ x ];
		var imgInfo = [];
		imgInfo.push( 'Image: ' + x + ', ID: ' + img.id + ', ClassName: ' + img.className );
		imgInfo.push( 'Orginal Src: <a href="' + img.orgSrc + '">' + img.orgSrc + '</a>');
		imgInfo.push( 'Pixel Ratio: ' + img.pixelRatio );
		imgInfo.push( 'Src Modification Method: ' + img.srcModification );
		imgInfo.push( 'Width/Height: ' + img.width + 'x' + img.height );
		imgInfo.push( 'Requested Width/Height: ' + img.requestWidth + 'x' + img.requestHeight );
		imgInfo.push( 'Requested Src: <a href="' + img.src +'">' + img.src +'</a>' );
		
		var imgPre = document.createElement( 'pre' );
		imgPre.innerHTML = imgInfo.join( '<br>' );
		img.parentElement.insertBefore( imgPre, img );
	}
};