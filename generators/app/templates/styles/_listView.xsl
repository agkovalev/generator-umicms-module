<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet SYSTEM	"ulang://common/<%= safeModuleName %>" [
	<!ENTITY sys-module '<%= safeModuleName %>'>
]>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- <xsl:template match="data[@type = 'list' and @action = 'view']">

		<xsl:call-template name="ui-smc-table">
			<xsl:with-param name="control-params" select="$method" />
			<xsl:with-param name="content-type">objects</xsl:with-param>
			<xsl:with-param name="enable-objects-activity" select="$method = 'lists'" />
		</xsl:call-template>

	</xsl:template> -->

</xsl:stylesheet>
