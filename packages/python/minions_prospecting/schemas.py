"""
Minions Prospecting SDK — Type Schemas
Custom MinionType schemas for Minions Prospecting.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

search_config_type = MinionType(
    id="prospecting-search-config",
    name="Search config",
    slug="search-config",
    description="A configured web search for finding prospects.",
    icon="🔍",
    schema=[
        FieldDefinition(name="territoryId", type="string", label="territoryId"),
        FieldDefinition(name="query", type="string", label="query"),
        FieldDefinition(name="searchEngine", type="select", label="searchEngine"),
        FieldDefinition(name="industry", type="string", label="industry"),
        FieldDefinition(name="maxResults", type="number", label="maxResults"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastRunAt", type="string", label="lastRunAt"),
    ],
)

discovery_rule_type = MinionType(
    id="prospecting-discovery-rule",
    name="Discovery rule",
    slug="discovery-rule",
    description="A rule for qualifying discovered prospects.",
    icon="��",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="condition", type="string", label="condition"),
        FieldDefinition(name="scoreContribution", type="number", label="scoreContribution"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

scoring_criteria_type = MinionType(
    id="prospecting-scoring-criteria",
    name="Scoring criteria",
    slug="scoring-criteria",
    description="The criteria used to score and rank leads.",
    icon="⭐",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="field", type="string", label="field"),
        FieldDefinition(name="weight", type="number", label="weight"),
        FieldDefinition(name="direction", type="select", label="direction"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    search_config_type,
    discovery_rule_type,
    scoring_criteria_type,
]

