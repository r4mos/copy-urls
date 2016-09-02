chrome.browserAction.onClicked.addListener( function( tab ) {
  chrome.tabs.query( { currentWindow: true }, function( tabs ) {
    var textArea = document.createElement( 'textarea' );

    tabs.forEach( function( tab ) {
      textArea.value += tab.url + ' ';
    } );
    textArea.value = textArea.value.slice( 0, -1 );

    document.body.appendChild( textArea );

    textArea.select();

    document.execCommand( 'copy' );

    document.body.removeChild( textArea );
  } );
} );
