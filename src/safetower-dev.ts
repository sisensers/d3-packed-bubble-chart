import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Safetower-Dev', type: 'live' };

interface eventDimension extends Dimension {
    actual_harm_score: Attribute;
    anonymous_flag: Attribute;
    archived: Attribute;
    created_by_id: Attribute;
    death_or_loss: Attribute;
    draft_flag: Attribute;
    equipment_involved_flag: Attribute;
    error_proofing_checklist: Attribute;
    error_proofing_double_checks: Attribute;
    error_proofing_forcing_functions: Attribute;
    error_proofing_redundancies: Attribute;
    error_proofing_simplify: Attribute;
    error_proofing_standardize: Attribute;
    error_proofing_training: Attribute;
    error_proofing_warnings: Attribute;
    event_type: Attribute;
    followup_flag: Attribute;
    followup_flag_string: Attribute;
    good_catch_description: Attribute;
    good_catch_flag: Attribute;
    good_catch_members: Attribute;
    harm_to_any_patient: Attribute;
    health_system_review_complete_flag: Attribute;
    event_id: Attribute;
    is_deleted: Attribute;
    location_super_location: Attribute;
    narrative: Attribute;
    patients_involved_flag: Attribute;
    potential_harm_score: Attribute;
    predicted_harm_score: Attribute;
    primary_location_id: Attribute;
    safety_concern_flag: Attribute;
    structured_followup: Attribute;
    submitted_by_id: Attribute;
    suggestions: Attribute;
    synopsis: Attribute;
    system_changes_content: Attribute;
    system_changes_department: Attribute;
    system_changes_health_system: Attribute;
    system_changes_organization: Attribute;
    system_changes_unit: Attribute;
    tagged_flag: Attribute;
    title: Attribute;
    updated_by_id: Attribute;
    when_addressed: Attribute;
    witnesses_involved_flag: Attribute;
    created: DateDimension;
    event_date: DateDimension;
    event_time: DateDimension;
    submitted: DateDimension;
    updated: DateDimension;
    when_addressed_date: DateDimension;
}
export const event = createDimension({
    name: 'event',
    actual_harm_score: createAttribute({
        name: 'actual_harm_score',
        type: 'numeric-attribute',
        expression: '[event.actual_harm_score]',
    }),
    anonymous_flag: createAttribute({
        name: 'anonymous_flag',
        type: 'text-attribute',
        expression: '[event.anonymous_flag]',
    }),
    archived: createAttribute({
        name: 'archived',
        type: 'text-attribute',
        expression: '[event.archived]',
    }),
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[event.created_by_id]',
    }),
    death_or_loss: createAttribute({
        name: 'death_or_loss',
        type: 'numeric-attribute',
        expression: '[event.death_or_loss]',
    }),
    draft_flag: createAttribute({
        name: 'draft_flag',
        type: 'text-attribute',
        expression: '[event.draft_flag]',
    }),
    equipment_involved_flag: createAttribute({
        name: 'equipment_involved_flag',
        type: 'text-attribute',
        expression: '[event.equipment_involved_flag]',
    }),
    error_proofing_checklist: createAttribute({
        name: 'error_proofing_checklist',
        type: 'text-attribute',
        expression: '[event.error_proofing_checklist]',
    }),
    error_proofing_double_checks: createAttribute({
        name: 'error_proofing_double_checks',
        type: 'text-attribute',
        expression: '[event.error_proofing_double_checks]',
    }),
    error_proofing_forcing_functions: createAttribute({
        name: 'error_proofing_forcing_functions',
        type: 'text-attribute',
        expression: '[event.error_proofing_forcing_functions]',
    }),
    error_proofing_redundancies: createAttribute({
        name: 'error_proofing_redundancies',
        type: 'text-attribute',
        expression: '[event.error_proofing_redundancies]',
    }),
    error_proofing_simplify: createAttribute({
        name: 'error_proofing_simplify',
        type: 'text-attribute',
        expression: '[event.error_proofing_simplify]',
    }),
    error_proofing_standardize: createAttribute({
        name: 'error_proofing_standardize',
        type: 'text-attribute',
        expression: '[event.error_proofing_standardize]',
    }),
    error_proofing_training: createAttribute({
        name: 'error_proofing_training',
        type: 'text-attribute',
        expression: '[event.error_proofing_training]',
    }),
    error_proofing_warnings: createAttribute({
        name: 'error_proofing_warnings',
        type: 'text-attribute',
        expression: '[event.error_proofing_warnings]',
    }),
    event_type: createAttribute({
        name: 'event_type',
        type: 'text-attribute',
        expression: '[event.event_type]',
    }),
    followup_flag: createAttribute({
        name: 'followup_flag',
        type: 'text-attribute',
        expression: '[event.followup_flag]',
    }),
    followup_flag_string: createAttribute({
        name: 'followup_flag_string',
        type: 'text-attribute',
        expression: '[event.followup_flag_string]',
    }),
    good_catch_description: createAttribute({
        name: 'good_catch_description',
        type: 'text-attribute',
        expression: '[event.good_catch_description]',
    }),
    good_catch_flag: createAttribute({
        name: 'good_catch_flag',
        type: 'text-attribute',
        expression: '[event.good_catch_flag]',
    }),
    good_catch_members: createAttribute({
        name: 'good_catch_members',
        type: 'text-attribute',
        expression: '[event.good_catch_members]',
    }),
    harm_to_any_patient: createAttribute({
        name: 'harm_to_any_patient',
        type: 'text-attribute',
        expression: '[event.harm_to_any_patient]',
    }),
    health_system_review_complete_flag: createAttribute({
        name: 'health_system_review_complete_flag',
        type: 'text-attribute',
        expression: '[event.health_system_review_complete_flag]',
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[event.id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[event.is_deleted]',
    }),
    location_super_location: createAttribute({
        name: 'location_super_location',
        type: 'text-attribute',
        expression: '[event.location_super_location]',
    }),
    narrative: createAttribute({
        name: 'narrative',
        type: 'text-attribute',
        expression: '[event.narrative]',
    }),
    patients_involved_flag: createAttribute({
        name: 'patients_involved_flag',
        type: 'text-attribute',
        expression: '[event.patients_involved_flag]',
    }),
    potential_harm_score: createAttribute({
        name: 'potential_harm_score',
        type: 'numeric-attribute',
        expression: '[event.potential_harm_score]',
    }),
    predicted_harm_score: createAttribute({
        name: 'predicted_harm_score',
        type: 'numeric-attribute',
        expression: '[event.predicted_harm_score]',
    }),
    primary_location_id: createAttribute({
        name: 'primary_location_id',
        type: 'numeric-attribute',
        expression: '[event.primary_location_id]',
    }),
    safety_concern_flag: createAttribute({
        name: 'safety_concern_flag',
        type: 'text-attribute',
        expression: '[event.safety_concern_flag]',
    }),
    structured_followup: createAttribute({
        name: 'structured_followup',
        type: 'text-attribute',
        expression: '[event.structured_followup]',
    }),
    submitted_by_id: createAttribute({
        name: 'submitted_by_id',
        type: 'numeric-attribute',
        expression: '[event.submitted_by_id]',
    }),
    suggestions: createAttribute({
        name: 'suggestions',
        type: 'text-attribute',
        expression: '[event.suggestions]',
    }),
    synopsis: createAttribute({
        name: 'synopsis',
        type: 'text-attribute',
        expression: '[event.synopsis]',
    }),
    system_changes_content: createAttribute({
        name: 'system_changes_content',
        type: 'text-attribute',
        expression: '[event.system_changes_content]',
    }),
    system_changes_department: createAttribute({
        name: 'system_changes_department',
        type: 'text-attribute',
        expression: '[event.system_changes_department]',
    }),
    system_changes_health_system: createAttribute({
        name: 'system_changes_health_system',
        type: 'text-attribute',
        expression: '[event.system_changes_health_system]',
    }),
    system_changes_organization: createAttribute({
        name: 'system_changes_organization',
        type: 'text-attribute',
        expression: '[event.system_changes_organization]',
    }),
    system_changes_unit: createAttribute({
        name: 'system_changes_unit',
        type: 'text-attribute',
        expression: '[event.system_changes_unit]',
    }),
    tagged_flag: createAttribute({
        name: 'tagged_flag',
        type: 'text-attribute',
        expression: '[event.tagged_flag]',
    }),
    title: createAttribute({
        name: 'title',
        type: 'text-attribute',
        expression: '[event.title]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[event.updated_by_id]',
    }),
    when_addressed: createAttribute({
        name: 'when_addressed',
        type: 'numeric-attribute',
        expression: '[event.when_addressed]',
    }),
    witnesses_involved_flag: createAttribute({
        name: 'witnesses_involved_flag',
        type: 'text-attribute',
        expression: '[event.witnesses_involved_flag]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[event.created (Calendar)]',
    }),
    event_date: createDateDimension({
        name: 'event_date',
        expression: '[event.event_date (Calendar)]',
    }),
    event_time: createDateDimension({
        name: 'event_time',
        expression: '[event.event_time (Calendar)]',
    }),
    submitted: createDateDimension({
        name: 'submitted',
        expression: '[event.submitted (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[event.updated (Calendar)]',
    }),
    when_addressed_date: createDateDimension({
        name: 'when_addressed_date',
        expression: '[event.when_addressed_date (Calendar)]',
    }),
}) as eventDimension;

interface event_indicatorDimension extends Dimension {
    created_by_id: Attribute;
    event_id: Attribute;
    event_indicator_id: Attribute;
    indicator_id: Attribute;
    is_deleted: Attribute;
    updated_by_id: Attribute;
    created: DateDimension;
    updated: DateDimension;
}
export const event_indicator = createDimension({
    name: 'event_indicator',
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[event_indicator.created_by_id]',
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[event_indicator.event_id]',
    }),
    event_indicator_id: createAttribute({
        name: 'event_indicator_id',
        type: 'numeric-attribute',
        expression: '[event_indicator.id]',
    }),
    indicator_id: createAttribute({
        name: 'indicator_id',
        type: 'numeric-attribute',
        expression: '[event_indicator.indicator_id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[event_indicator.is_deleted]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[event_indicator.updated_by_id]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[event_indicator.created (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[event_indicator.updated (Calendar)]',
    }),
}) as event_indicatorDimension;

interface event_locationDimension extends Dimension {
    created_by_id: Attribute;
    event_id: Attribute;
    event_location_id: Attribute;
    is_deleted: Attribute;
    jhi_primary: Attribute;
    location_id: Attribute;
    manual_flag: Attribute;
    event_location_name: Attribute;
    updated_by_id: Attribute;
    created: DateDimension;
    updated: DateDimension;
}
export const event_location = createDimension({
    name: 'event_location',
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[event_location.created_by_id]',
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[event_location.event_id]',
    }),
    event_location_id: createAttribute({
        name: 'event_location_id',
        type: 'numeric-attribute',
        expression: '[event_location.id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[event_location.is_deleted]',
    }),
    jhi_primary: createAttribute({
        name: 'jhi_primary',
        type: 'text-attribute',
        expression: '[event_location.jhi_primary]',
    }),
    location_id: createAttribute({
        name: 'location_id',
        type: 'numeric-attribute',
        expression: '[event_location.location_id]',
    }),
    manual_flag: createAttribute({
        name: 'manual_flag',
        type: 'text-attribute',
        expression: '[event_location.manual_flag]',
    }),
    event_location_name: createAttribute({
        name: 'event_location_name',
        type: 'text-attribute',
        expression: '[event_location.name]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[event_location.updated_by_id]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[event_location.created (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[event_location.updated (Calendar)]',
    }),
}) as event_locationDimension;

interface event_patientDimension extends Dimension {
    admission_reason: Attribute;
    admitting_service: Attribute;
    attending_provider: Attribute;
    created_by_id: Attribute;
    csn: Attribute;
    enterprise_mrn: Attribute;
    ethnicity: Attribute;
    event_id: Attribute;
    facility_mrn: Attribute;
    first_name: Attribute;
    gender: Attribute;
    event_patient_id: Attribute;
    is_deleted: Attribute;
    last_name: Attribute;
    preferred_name: Attribute;
    race: Attribute;
    updated_by_id: Attribute;
    admission_date: DateDimension;
    created: DateDimension;
    dob: DateDimension;
    updated: DateDimension;
}
export const event_patient = createDimension({
    name: 'event_patient',
    admission_reason: createAttribute({
        name: 'admission_reason',
        type: 'text-attribute',
        expression: '[event_patient.admission_reason]',
    }),
    admitting_service: createAttribute({
        name: 'admitting_service',
        type: 'text-attribute',
        expression: '[event_patient.admitting_service]',
    }),
    attending_provider: createAttribute({
        name: 'attending_provider',
        type: 'text-attribute',
        expression: '[event_patient.attending_provider]',
    }),
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[event_patient.created_by_id]',
    }),
    csn: createAttribute({
        name: 'csn',
        type: 'text-attribute',
        expression: '[event_patient.csn]',
    }),
    enterprise_mrn: createAttribute({
        name: 'enterprise_mrn',
        type: 'text-attribute',
        expression: '[event_patient.enterprise_mrn]',
    }),
    ethnicity: createAttribute({
        name: 'ethnicity',
        type: 'text-attribute',
        expression: '[event_patient.ethnicity]',
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[event_patient.event_id]',
    }),
    facility_mrn: createAttribute({
        name: 'facility_mrn',
        type: 'text-attribute',
        expression: '[event_patient.facility_mrn]',
    }),
    first_name: createAttribute({
        name: 'first_name',
        type: 'text-attribute',
        expression: '[event_patient.first_name]',
    }),
    gender: createAttribute({
        name: 'gender',
        type: 'text-attribute',
        expression: '[event_patient.gender]',
    }),
    event_patient_id: createAttribute({
        name: 'event_patient_id',
        type: 'numeric-attribute',
        expression: '[event_patient.id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[event_patient.is_deleted]',
    }),
    last_name: createAttribute({
        name: 'last_name',
        type: 'text-attribute',
        expression: '[event_patient.last_name]',
    }),
    preferred_name: createAttribute({
        name: 'preferred_name',
        type: 'text-attribute',
        expression: '[event_patient.preferred_name]',
    }),
    race: createAttribute({
        name: 'race',
        type: 'text-attribute',
        expression: '[event_patient.race]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[event_patient.updated_by_id]',
    }),
    admission_date: createDateDimension({
        name: 'admission_date',
        expression: '[event_patient.admission_date (Calendar)]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[event_patient.created (Calendar)]',
    }),
    dob: createDateDimension({
        name: 'dob',
        expression: '[event_patient.dob (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[event_patient.updated (Calendar)]',
    }),
}) as event_patientDimension;

interface event_reviewerDimension extends Dimension {
    complete: Attribute;
    created_by_id: Attribute;
    event_id: Attribute;
    flag: Attribute;
    event_reviewer_id: Attribute;
    is_deleted: Attribute;
    jhi_read: Attribute;
    manual: Attribute;
    owner: Attribute;
    updated_by_id: Attribute;
    user_id: Attribute;
    created: DateDimension;
    updated: DateDimension;
}
export const event_reviewer = createDimension({
    name: 'event_reviewer',
    complete: createAttribute({
        name: 'complete',
        type: 'text-attribute',
        expression: '[event_reviewer.complete]',
    }),
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[event_reviewer.created_by_id]',
    }),
    event_id: createAttribute({
        name: 'event_id',
        type: 'numeric-attribute',
        expression: '[event_reviewer.event_id]',
    }),
    flag: createAttribute({
        name: 'flag',
        type: 'text-attribute',
        expression: '[event_reviewer.flag]',
    }),
    event_reviewer_id: createAttribute({
        name: 'event_reviewer_id',
        type: 'numeric-attribute',
        expression: '[event_reviewer.id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[event_reviewer.is_deleted]',
    }),
    jhi_read: createAttribute({
        name: 'jhi_read',
        type: 'text-attribute',
        expression: '[event_reviewer.jhi_read]',
    }),
    manual: createAttribute({
        name: 'manual',
        type: 'text-attribute',
        expression: '[event_reviewer.manual]',
    }),
    owner: createAttribute({
        name: 'owner',
        type: 'text-attribute',
        expression: '[event_reviewer.owner]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[event_reviewer.updated_by_id]',
    }),
    user_id: createAttribute({
        name: 'user_id',
        type: 'numeric-attribute',
        expression: '[event_reviewer.user_id]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[event_reviewer.created (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[event_reviewer.updated (Calendar)]',
    }),
}) as event_reviewerDimension;

interface FlagTableDimension extends Dimension {
    follow_up_flag_numeric: Attribute;
    followup_flag: Attribute;
    submitted: DateDimension;
}
export const FlagTable = createDimension({
    name: 'Flag Table',
    follow_up_flag_numeric: createAttribute({
        name: 'follow_up_flag_numeric',
        type: 'numeric-attribute',
        expression: '[Flag Table.follow_up_flag_numeric]',
    }),
    followup_flag: createAttribute({
        name: 'followup_flag',
        type: 'text-attribute',
        expression: '[Flag Table.followup_flag]',
    }),
    submitted: createDateDimension({
        name: 'submitted',
        expression: '[Flag Table.submitted (Calendar)]',
    }),
}) as FlagTableDimension;

interface indicatorDimension extends Dimension {
    child_indicator: Attribute;
    comments: Attribute;
    created_by_id: Attribute;
    definition: Attribute;
    definitive_keywords: Attribute;
    indicator_id: Attribute;
    indicator_pair: Attribute;
    is_deleted: Attribute;
    keywords: Attribute;
    parent_indicator: Attribute;
    source: Attribute;
    threshold: Attribute;
    updated_by_id: Attribute;
    created: DateDimension;
    updated: DateDimension;
}
export const indicator = createDimension({
    name: 'indicator',
    child_indicator: createAttribute({
        name: 'child_indicator',
        type: 'text-attribute',
        expression: '[indicator.child_indicator]',
    }),
    comments: createAttribute({
        name: 'comments',
        type: 'text-attribute',
        expression: '[indicator.comments]',
    }),
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[indicator.created_by_id]',
    }),
    definition: createAttribute({
        name: 'definition',
        type: 'text-attribute',
        expression: '[indicator.definition]',
    }),
    definitive_keywords: createAttribute({
        name: 'definitive_keywords',
        type: 'text-attribute',
        expression: '[indicator.definitive_keywords]',
    }),
    indicator_id: createAttribute({
        name: 'indicator_id',
        type: 'numeric-attribute',
        expression: '[indicator.id]',
    }),
    indicator_pair: createAttribute({
        name: 'indicator_pair',
        type: 'text-attribute',
        expression: '[indicator.indicator_pair]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[indicator.is_deleted]',
    }),
    keywords: createAttribute({
        name: 'keywords',
        type: 'text-attribute',
        expression: '[indicator.keywords]',
    }),
    parent_indicator: createAttribute({
        name: 'parent_indicator',
        type: 'text-attribute',
        expression: '[indicator.parent_indicator]',
    }),
    source: createAttribute({
        name: 'source',
        type: 'text-attribute',
        expression: '[indicator.source]',
    }),
    threshold: createAttribute({
        name: 'threshold',
        type: 'numeric-attribute',
        expression: '[indicator.threshold]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[indicator.updated_by_id]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[indicator.created (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[indicator.updated (Calendar)]',
    }),
}) as indicatorDimension;

interface locationDimension extends Dimension {
    activated: Attribute;
    aliases: Attribute;
    area: Attribute;
    created_by_id: Attribute;
    department: Attribute;
    location_id: Attribute;
    is_deleted: Attribute;
    location_type: Attribute;
    locations_count: Attribute;
    metadata: Attribute;
    old_location: Attribute;
    pediatric: Attribute;
    physical_location: Attribute;
    site: Attribute;
    super_location: Attribute;
    updated_by_id: Attribute;
    created: DateDimension;
    updated: DateDimension;
}
export const location = createDimension({
    name: 'location',
    activated: createAttribute({
        name: 'activated',
        type: 'text-attribute',
        expression: '[location.activated]',
    }),
    aliases: createAttribute({
        name: 'aliases',
        type: 'text-attribute',
        expression: '[location.aliases]',
    }),
    area: createAttribute({
        name: 'area',
        type: 'text-attribute',
        expression: '[location.area]',
    }),
    created_by_id: createAttribute({
        name: 'created_by_id',
        type: 'numeric-attribute',
        expression: '[location.created_by_id]',
    }),
    department: createAttribute({
        name: 'department',
        type: 'text-attribute',
        expression: '[location.department]',
    }),
    location_id: createAttribute({
        name: 'location_id',
        type: 'numeric-attribute',
        expression: '[location.id]',
    }),
    is_deleted: createAttribute({
        name: 'is_deleted',
        type: 'text-attribute',
        expression: '[location.is_deleted]',
    }),
    location_type: createAttribute({
        name: 'location_type',
        type: 'text-attribute',
        expression: '[location.location_type]',
    }),
    locations_count: createAttribute({
        name: 'locations_count',
        type: 'numeric-attribute',
        expression: '[location.locations_count]',
    }),
    metadata: createAttribute({
        name: 'metadata',
        type: 'text-attribute',
        expression: '[location.metadata]',
    }),
    old_location: createAttribute({
        name: 'old_location',
        type: 'text-attribute',
        expression: '[location.old_location]',
    }),
    pediatric: createAttribute({
        name: 'pediatric',
        type: 'text-attribute',
        expression: '[location.pediatric]',
    }),
    physical_location: createAttribute({
        name: 'physical_location',
        type: 'text-attribute',
        expression: '[location.physical_location]',
    }),
    site: createAttribute({
        name: 'site',
        type: 'text-attribute',
        expression: '[location.site]',
    }),
    super_location: createAttribute({
        name: 'super_location',
        type: 'text-attribute',
        expression: '[location.super_location]',
    }),
    updated_by_id: createAttribute({
        name: 'updated_by_id',
        type: 'numeric-attribute',
        expression: '[location.updated_by_id]',
    }),
    created: createDateDimension({
        name: 'created',
        expression: '[location.created (Calendar)]',
    }),
    updated: createDateDimension({
        name: 'updated',
        expression: '[location.updated (Calendar)]',
    }),
}) as locationDimension;
