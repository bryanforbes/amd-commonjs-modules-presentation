define({
	theme:      { module: 'xstyle/css!themes/black/theme.css' },
	transition: { module: 'xstyle/css!themes/none.css' },
    model: {
	     create: {
             module: 'hc/slides/SingleFilePresentationModel',
             args: { $ref: 'slidePath' }
	     }
     },
     view: {
         create: {
             module: 'hc/slides/SlideView',
             args: [{ $ref: 'slideContainer' }, { $ref: 'model' }]
         }
     },
     controller: {
         create: {
             module: 'hc/slides/PresentationController',
             args: { $ref: 'view' }
         }
     }
});
