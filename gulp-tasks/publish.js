const publishDocs = require( '@gravityforms/gulp-tasks/src/publish/docs' ).default;
const paths = require( '../config/gulp/paths' );
const { loadEnv } = require( '@gravityforms/gulp-tasks/src/utils/tools' );
const path = require( 'path' );

loadEnv( path.resolve( __dirname, '../' ) );

module.exports = {
	docs: function() {
		return publishDocs.sync( paths.docs_css, {
			config: {
				region: 'us-east-1',
				params: {
					Bucket: 'docs.css.gravity.com'
				},
				credentials: {
					accessKeyId: process.env.AWS_DOCS_ACCESS_KEY_ID,
					secretAccessKey: process.env.AWS_DOCS_SECRET_ACCESS_KEY,
					signatureVersion: 'v3'
				}
			},
			headers: {
				'Cache-Control': 'max-age=315360000, no-transform, public'
			},
			options: {
				noAcl: 'true'
			},
		} );
	},
};
