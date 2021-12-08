const iconImportCsv = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Layer_7"><path d="M21,30H11a5,5,0,0,1-5-5V7a5,5,0,0,1,5-5h8a1,1,0,0,1,.71.29l6,6A1,1,0,0,1,26,9V25A5,5,0,0,1,21,30ZM11,4A3,3,0,0,0,8,7V25a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V9.41L18.59,4Z"></path><path d="M16.71,11.29a1,1,0,0,0-1.42,0l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,12,17h1v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17h1a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09Z"></path><path d="M25.71,8.29l-6-6a1,1,0,0,0-1.09-.21A1,1,0,0,0,18,3V8a2,2,0,0,0,2,2h5a1,1,0,0,0,.92-.62A1,1,0,0,0,25.71,8.29Z"></path><path d="M24,29H8V16.63c0,2,2.08,8.08,6.58,8.08,4,0,9.42-1,9.42-4.92Z"></path></g></svg>'


miro.onReady(() => {
	miro.initialize({
		extensionPoints: {
//			bottomBar: {
//			},  
			toolbar: {
				title: 'CSVｱｯﾌﾟﾛｰﾄﾞ',
				toolbarSvgIcon: iconImportCsv, 
				librarySvgIcon: iconImportCsv, 
				positionPriority: 3,
				onClick: async () => {
					await miro.board.ui.openModal('uploadcsv.html', { width: 300, height: 200 });
				}
			}
		}
	})
})

