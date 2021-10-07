/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import { YellowBox } from "react-native"

// prettier-ignore
YellowBox.ignoreWarnings([
  "Require cycle:",
])
