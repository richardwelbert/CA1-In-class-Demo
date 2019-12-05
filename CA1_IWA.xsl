<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <div class="table-responsive table-hover">
            <table id="menuTable" class="indent table-hover">
                <thead>
                    <tr>
                        <th colspan="4">Album Collection</th>
                    </tr>
                    <tr>
                        <th>Select</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="/collection/section">
                        <tr>
                            <td colspan="4">
                                <xsl:value-of select="@genre" />
                            </td>
                        </tr>
                        <xsl:for-each select="entree">
                            <tr id="{position()}">
                                <xsl:attribute name="numberOne">
                                    <xsl:value-of select="boolean(./@numberOne)" />
                                </xsl:attribute>
                                    
                                <td class="text-center">
                                    <input name="item0" type="checkbox" />
                                    <xsl:variable name="link" select="img" />
                                    <img src="{$link}" class="img-thumbnail" width="100" height="100" />
                                </td>
                                <td align="center">
                                    <xsl:value-of select="artist" />
                                </td>
                                <td align="center">
                                    <xsl:value-of select="album" />
                                </td>
                                <td align="center">
                                    <xsl:value-of select="year" />
                                </td>
                            </tr>
                        </xsl:for-each>
                    </xsl:for-each>
                </tbody>
            </table><br/>
        </div>
    </xsl:template>
</xsl:stylesheet>
