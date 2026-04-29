package landingzone.tagging

deny[msg] {
    not input.tags["Environment"]
    msg := "Resource must have an 'Environment' tag"
}

deny[msg] {
    not input.tags["CostCenter"]
    msg := "Resource must have a 'CostCenter' tag"
}

deny[msg] {
    allowed_envs := {"dev", "staging", "prod"}
    not allowed_envs[input.tags["Environment"]]
    msg := sprintf("Environment tag '%v' is not allowed", [input.tags["Environment"]])
}
