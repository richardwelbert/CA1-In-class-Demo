<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="menuTable" class="indent">
                    <thead>
                        <tr>
                            <th colspan="3">Album Collection</th>
                        </tr>
                        <tr>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/collection/section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@genre" />
                                </td>
                            </tr>
                            <xsl:for-each select="entree">
                                <tr>
                                    <xsl:attribute name="numberOne">
                                        <xsl:value-of select="boolean(./@numberOne)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="item0" type="checkbox" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="artist" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="album" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="year" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
    </xsl:template>
</xsl:stylesheet>
