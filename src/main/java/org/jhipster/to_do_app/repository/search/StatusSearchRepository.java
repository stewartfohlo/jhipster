package org.jhipster.to_do_app.repository.search;

import org.jhipster.to_do_app.domain.Status;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Status} entity.
 */
public interface StatusSearchRepository extends ElasticsearchRepository<Status, Long> {
}
